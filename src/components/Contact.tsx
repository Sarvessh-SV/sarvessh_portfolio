'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, MessageSquare } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

// Form validation schema with Zod
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  category: z.string().min(1, { message: 'Please select a project category' }),
  budget: z.string().optional(),
  description: z.string().min(10, { message: 'Please describe your project in at least 10 characters' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      category: 'website-development',
      budget: '',
      description: ''
    }
  });

  // Handle URL pre-selection from Services section
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash.includes('?service=')) {
        const serviceId = hash.split('?service=')[1];
        if (serviceId) {
          setValue('category', serviceId);
        }
      }
    }
  }, [setValue]);

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus('loading');
    setStatusMessage('');

    try {
      // Call local backend API route
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setFormStatus('success');
        setStatusMessage(resData.message || 'Thank you! Your project inquiry has been sent successfully. I will respond to your email shortly.');
        reset(); // Clear input fields only after confirmed successful delivery
      } else {
        setFormStatus('error');
        setStatusMessage(resData.message || 'Failed to send project inquiry. Please try again or reach out directly via email.');
      }
    } catch (err) {
      setFormStatus('error');
      setStatusMessage('Network connection error. Unable to reach the server. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            START A CONVERSATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Have an Idea? Let's Build Something Useful.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Have a website idea, need help improving an existing application, or want to discuss a development project? Tell me a little about what you're building.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">

            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-amber-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Freelance Project Inquiries</span>
              </div>

              <h3 className="text-2xl font-bold text-white leading-tight">
                Let's discuss your web project & technical goals.
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you need a full-stack Next.js app, modern business website, or security improvements, I'm ready to collaborate and deliver.
              </p>

              {/* Direct Details */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <a
                  href={`mailto:${siteConfig.personal.email}`}
                  className="flex items-center gap-3.5 text-xs sm:text-sm text-slate-200 hover:text-amber-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-amber-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Email Address</span>
                    <span className="font-mono font-medium">{siteConfig.personal.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 text-xs sm:text-sm text-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Location</span>
                    <span className="font-medium">{siteConfig.personal.location}</span>
                  </div>
                </div>

                <a
                  href={`tel:${siteConfig.personal.phone}`}
                  className="flex items-center gap-3.5 text-xs sm:text-sm text-slate-200 hover:text-amber-400 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform text-amber-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Phone</span>
                    <span className="font-mono font-medium">{siteConfig.personal.phone}</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Response Note */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 flex items-start gap-3">
              <MessageSquare className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Prompt Direct Communication</span>
                <p className="text-[11px] text-amber-900/90 mt-0.5">
                  I typically respond to new project inquiries within 24 hours. Feel free to share direct project requirements or scope questions.
                </p>
              </div>
            </div>

          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-slate-50/70 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Your Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    {...register('name')}
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-rose-300 focus:ring-rose-500'
                        : 'border-slate-200 focus:border-slate-900 focus:ring-slate-900/20'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-[11px] font-semibold text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Email Address <span className="text-amber-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@company.com"
                    {...register('email')}
                    className={`w-full px-4 py-3 rounded-xl bg-white border text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-300 focus:ring-rose-500'
                        : 'border-slate-200 focus:border-slate-900 focus:ring-slate-900/20'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] font-semibold text-rose-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email.message}
                    </p>
                  )}
                </div>

              </div>

              {/* Category & Budget Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                {/* Category */}
                <div className="space-y-1.5">
                  <label htmlFor="category" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Project Category <span className="text-amber-600">*</span>
                  </label>
                  <select
                    id="category"
                    {...register('category')}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 transition-all"
                  >
                    <option value="website-development">Website Development</option>
                    <option value="fullstack-apps">Full-Stack Web Application</option>
                    <option value="frontend-development">Frontend Development</option>
                    <option value="website-improvements">Website Improvements & Fixes</option>
                    <option value="security-aware-dev">Security-Aware Development</option>
                    <option value="other">Other Software Consulting</option>
                  </select>
                  {errors.category && (
                    <p className="text-[11px] font-semibold text-rose-600">{errors.category.message}</p>
                  )}
                </div>

                {/* Estimated Budget */}
                <div className="space-y-1.5">
                  <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Estimated Budget <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <select
                    id="budget"
                    {...register('budget')}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 transition-all"
                  >
                    <option value="">Select range...</option>
                    <option value="under-15k">Under ₹15,000 / $200</option>
                    <option value="15k-50k">₹15,000 – ₹50,000 ($200 – $600)</option>
                    <option value="50k-plus">₹50,000+ ($600+)</option>
                    <option value="custom">Flexible / To be discussed</option>
                  </select>
                </div>

              </div>

              {/* Project Description */}
              <div className="space-y-1.5">
                <label htmlFor="description" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Project Description <span className="text-amber-600">*</span>
                </label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Tell me about your website goals, features needed, target audience, or timeline..."
                  {...register('description')}
                  className={`w-full px-4 py-3 rounded-xl bg-white border text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 transition-all ${
                    errors.description
                      ? 'border-rose-300 focus:ring-rose-500'
                      : 'border-slate-200 focus:border-slate-900 focus:ring-slate-900/20'
                  }`}
                />
                {errors.description && (
                  <p className="text-[11px] font-semibold text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.description.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {formStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Processing & Sending Email...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 font-bold" />
                    <span>Send Project Inquiry</span>
                  </>
                )}
              </button>

              {/* Form Status Feedback Alerts */}
              {formStatus === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Inquiry Delivered Successfully!</span>
                    <p className="text-[11px] text-emerald-800 mt-0.5">{statusMessage}</p>
                  </div>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-rose-900">Delivery Error</span>
                    <p className="text-[11px] text-rose-800 mt-0.5">{statusMessage}</p>
                  </div>
                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
