'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cloud, Network, Cpu, Calendar, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Certifications() {
  const getBadgeIcon = (badgeType: string) => {
    switch (badgeType) {
      case 'network': return <Network className="w-5 h-5 text-blue-600" />;
      case 'cloud': return <Cloud className="w-5 h-5 text-amber-600" />;
      case 'ai': return <Cpu className="w-5 h-5 text-purple-600" />;
      case 'security': return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      default: return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="certifications" className="py-20 sm:py-28 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            VERIFIED CREDENTIALS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Industry Certifications
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Professional certifications in networking, cloud computing, AI, and ethical penetration testing.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getBadgeIcon(cert.badgeType)}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" /> Certified
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-slate-900 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-700 mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Completion Date */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {cert.date}
                </span>
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
