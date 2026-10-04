'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, GraduationCap, Code2, Terminal } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import ProfileHeroVisual from './ProfileHeroVisual';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Headline & Bio Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 sm:space-y-8"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-mono font-semibold tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{siteConfig.personal.title.toUpperCase()}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Turning Ideas Into{' '}
              <span className="navy-gradient-text">Thoughtful Digital</span>{' '}
              <span className="underline decoration-amber-500/60 decoration-wavy decoration-2">Experiences.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {siteConfig.personal.subtext}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5"
              >
                <span>Let's Discuss Your Project</span>
                <ArrowRight className="w-4 h-4 font-bold" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 shadow-sm hover:border-slate-300 transition-all"
              >
                <span>Explore My Work</span>
              </a>
            </div>

            {/* Compact Credibility Line */}
            <div className="pt-6 border-t border-slate-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Academic & Technical Foundation
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-slate-200/80 text-xs font-semibold text-slate-800 shadow-2xs">
                  <GraduationCap className="w-4 h-4 text-slate-900 shrink-0" />
                  <span className="truncate">B.E. CSE — Cyber</span>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/80 text-xs font-bold text-amber-900 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>CGPA: 9.1 / 10</span>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-slate-200/80 text-xs font-semibold text-slate-800 shadow-2xs">
                  <Code2 className="w-4 h-4 text-slate-900 shrink-0" />
                  <span className="truncate">Full-Stack Dev</span>
                </div>

                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/80 border border-slate-200/80 text-xs font-semibold text-slate-800 shadow-2xs">
                  <Terminal className="w-4 h-4 text-slate-900 shrink-0" />
                  <span className="truncate">CP Competitor</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Profile Presentation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <ProfileHeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
