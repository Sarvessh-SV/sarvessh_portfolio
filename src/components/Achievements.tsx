'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ExternalLink, Code2, ShieldAlert, Award, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            COMPETITIVE STANDING & RECOGNITION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Achievements & Competitive Coding
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            National hackathon finalist positions and proven problem-solving metrics across competitive platforms.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.achievements.map((ach, index) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                      {ach.id.includes('leetcode') || ach.id.includes('codechef') ? (
                        <Code2 className="w-6 h-6" />
                      ) : (
                        <Trophy className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-amber-700 block">
                        {ach.organization}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">
                        {ach.title}
                      </h3>
                    </div>
                  </div>

                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900 text-white shrink-0">
                    {ach.badgeText}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {ach.description}
                </p>

                {/* Highlight Stats Pill */}
                {ach.detailHighlight && (
                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{ach.detailHighlight}</span>
                  </div>
                )}
              </div>

              {/* Bottom Footer Row */}
              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                {ach.location ? (
                  <span className="text-xs font-medium text-slate-500">
                    Location: {ach.location}
                  </span>
                ) : (
                  <span className="text-xs font-medium text-slate-500">
                    Verified Competition Metric
                  </span>
                )}

                {ach.profileUrl ? (
                  <a
                    href={ach.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-amber-600 transition-colors"
                  >
                    <span>View Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-500" />
                  </a>
                ) : (
                  <span className="text-[11px] text-slate-400 font-mono">
                    Official Competition Result
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
