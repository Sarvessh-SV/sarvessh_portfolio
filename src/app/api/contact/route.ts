import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// Form validation schema for server-side validation
const contactSchema = z.object({
  name: z.string().trim().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().trim().lowercase().email({ message: 'Please enter a valid email address' }),
  category: z.string().trim().min(1, { message: 'Please select a project category' }),
  budget: z.string().trim().optional(),
  description: z.string().trim().min(10, { message: 'Description must be at least 10 characters long' }),
});

// Category display mapping for pretty email subject & body
const CATEGORY_NAMES: Record<string, string> = {
  'website-development': 'Website Development',
  'fullstack-apps': 'Full-Stack Web Application',
  'frontend-development': 'Frontend Development',
  'website-improvements': 'Website Improvements & Fixes',
  'security-aware-dev': 'Security-Aware Development',
  'other': 'Other Software Consulting',
};

// In-memory duplicate submission store (keyed by email + description hash/slice, valid for 3 minutes)
const recentSubmissions = new Map<string, number>();
const DUPLICATE_WINDOW_MS = 3 * 60 * 1000; // 3 minutes

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Server-side Zod validation
    const validatedData = contactSchema.parse(body);
    const { name, email, category, budget, description } = validatedData;

    // Check for duplicate submissions
    const now = Date.now();
    const submissionKey = `${email}:${description.toLowerCase().slice(0, 40)}`;

    // Clean up expired keys
    for (const [key, timestamp] of recentSubmissions.entries()) {
      if (now - timestamp > DUPLICATE_WINDOW_MS) {
        recentSubmissions.delete(key);
      }
    }

    if (recentSubmissions.has(submissionKey)) {
      const lastTime = recentSubmissions.get(submissionKey)!;
      if (now - lastTime < DUPLICATE_WINDOW_MS) {
        return NextResponse.json(
          {
            success: false,
            message: 'Duplicate submission detected. Please wait 3 minutes before submitting another identical inquiry.'
          },
          { status: 429 }
        );
      }
    }

    // Read environment variables (kept strictly server-side)
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'sarvesshsvsh@gmail.com';
    const senderEmail = process.env.SENDER_EMAIL || 'Portfolio Inquiry <onboarding@resend.dev>';

    // Check if Resend API key is configured
    if (!apiKey) {
      console.error('[API Route /api/contact Error]: RESEND_API_KEY environment variable is not configured.');
      return NextResponse.json(
        {
          success: false,
          message: 'Server email service is not configured. Please set the RESEND_API_KEY environment variable in Vercel.'
        },
        { status: 500 }
      );
    }

    // Initialize Resend with server secret
    const resend = new Resend(apiKey);
    const categoryLabel = CATEGORY_NAMES[category] || category;
    const budgetLabel = budget || 'Not specified';
    const timestampStr = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    });

    // Send email via Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: email,
      subject: `[New Project Inquiry] ${categoryLabel} from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #0f172a; margin: 0; padding: 24px; }
              .container { max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
              .header { border-bottom: 2px solid #f59e0b; padding-bottom: 16px; margin-bottom: 24px; }
              .title { font-size: 20px; font-weight: 800; color: #0f172a; margin: 0; }
              .badge { display: inline-block; background-color: #fef3c7; color: #92400e; font-size: 12px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; margin-top: 8px; }
              .field-group { margin-bottom: 18px; }
              .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 4px; }
              .value { font-size: 14px; font-weight: 500; color: #1e293b; background: #f8fafc; padding: 10px 14px; border-radius: 8px; border: 1px solid #f1f5f9; }
              .description-box { font-size: 14px; color: #0f172a; background: #fffbeb; padding: 16px; border-radius: 12px; border: 1px solid #fef3c7; white-space: pre-wrap; line-height: 1.6; }
              .footer { margin-top: 28px; padding-top: 16px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 class="title">📬 New Project Inquiry</h1>
                <span class="badge">${categoryLabel}</span>
              </div>

              <div class="field-group">
                <div class="label">Sender Name</div>
                <div class="value"><strong>${name}</strong></div>
              </div>

              <div class="field-group">
                <div class="label">Sender Email (Reply-To)</div>
                <div class="value"><a href="mailto:${email}" style="color: #d97706; text-decoration: none;">${email}</a></div>
              </div>

              <div class="field-group">
                <div class="label">Project Category</div>
                <div class="value">${categoryLabel}</div>
              </div>

              <div class="field-group">
                <div class="label">Estimated Budget</div>
                <div class="value">${budgetLabel}</div>
              </div>

              <div class="field-group">
                <div class="label">Project Description</div>
                <div class="description-box">${description}</div>
              </div>

              <div class="footer">
                Submitted on ${timestampStr} IST via Portfolio Inquiry Form
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
NEW PROJECT INQUIRY
===================
Name: ${name}
Email: ${email}
Category: ${categoryLabel}
Budget: ${budgetLabel}

Project Description:
${description}

Submitted on: ${timestampStr} IST
      `.trim(),
    });

    if (emailError) {
      console.error('[Resend Email Delivery Error]:', emailError);
      return NextResponse.json(
        {
          success: false,
          message: `Email delivery failed: ${emailError.message || 'Unable to send email via Resend'}`
        },
        { status: 500 }
      );
    }

    // Record submission timestamp for duplicate prevention
    recentSubmissions.set(submissionKey, now);

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your project inquiry has been delivered successfully. I will respond to your email shortly.',
      id: emailData?.id
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      const issueMessages = error.issues.map(i => i.message).join('; ');
      return NextResponse.json(
        {
          success: false,
          message: `Validation failed: ${issueMessages}`,
          errors: error.issues
        },
        { status: 400 }
      );
    }

    console.error('[API Route /api/contact Unexpected Error]:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred while processing your inquiry. Please try again or email directly.'
      },
      { status: 500 }
    );
  }
}
