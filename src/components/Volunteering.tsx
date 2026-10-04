'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Flag, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Volunteering() {
  const { volunteering } = siteConfig;

  return (
    <section id="volunteering" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            LEADERSHIP & COMMUNITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Volunteering & Event Leadership
          </h2>
        </div>

        {/* Leadership Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 shadow-md">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {volunteering.role}
                </h3>
                <p className="text-xs font-semibold text-amber-700 flex items-center gap-1.5 mt-0.5">
                  <Flag className="w-3.5 h-3.5" />
                  {volunteering.event}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{volunteering.period}</span>
            </div>
          </div>

          <div className="pt-4 space-y-2">
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              "{volunteering.description}"
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-medium text-emerald-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Fostering Cyber Intelligence & Security Awareness</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
