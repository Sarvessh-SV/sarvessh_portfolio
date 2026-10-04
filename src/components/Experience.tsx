'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            CAREER & INTERNSHIPS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Industry exposure across full-stack development, API integration, and cybersecurity threat analysis.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative pl-4 sm:pl-8 border-l-2 border-slate-200 space-y-12">
          {siteConfig.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot Node */}
              <div className="absolute -left-[25px] sm:-left-[41px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white border-4 border-slate-900 shadow-md group-hover:border-amber-500 group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              </div>

              {/* Experience Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 space-y-4">
                
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-600 mb-1">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.role}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-slate-400" />
                      {exp.company}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono font-medium text-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
