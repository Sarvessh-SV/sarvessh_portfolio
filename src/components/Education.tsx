'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Education() {
  const { education } = siteConfig;

  return (
    <section id="education" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            ACADEMIC FOUNDATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Education & Specialization
          </h2>
        </div>

        {/* Refined Academic Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-slate-50/70 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg relative overflow-hidden"
        >
          {/* Subtle Top Gold Border Highlight */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {education.institution}
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5 font-medium mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {education.location}
                  </p>
                </div>
              </div>

              <div className="space-y-1 pt-2">
                <h4 className="text-base font-bold text-slate-900">
                  {education.degree} in {education.department}
                </h4>
                <p className="text-xs font-mono text-slate-600 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Enrolled: {education.period}</span>
                </p>
              </div>

              {/* Highlights List */}
              <div className="pt-3 space-y-2">
                {education.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right CGPA Spotlight Badge */}
            <div className="md:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-amber-200 shadow-md text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Academic CGPA</span>
              <span className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight">
                {education.cgpa}
              </span>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                High Academic Standing
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
