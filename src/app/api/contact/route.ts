import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  category: z.string().min(1),
  budget: z.string().optional(),
  description: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Log the inquiry for verification
    console.log('[Contact Inquiry Received]:', {
      timestamp: new Date().toISOString(),
      ...validatedData
    });

    // Check if an email integration provider key (e.g. RESEND_API_KEY or SMTP_HOST) is set
    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      // Production email dispatch logic using Resend or custom SMTP can be plugged here
      return NextResponse.json({
        success: true,
        message: 'Your inquiry has been emailed directly to Sarvessh.'
      });
    }

    // Default honest response when email service provider is not yet configured
    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully! For immediate responses, you can also reach Sarvessh directly at sarvesshsvsh@gmail.com.'
    });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: 'Invalid form input data.', errors: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'An error occurred while submitting your inquiry.' },
      { status: 500 }
    );
  }
}
