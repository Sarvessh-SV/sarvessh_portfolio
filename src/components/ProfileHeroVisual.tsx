'use client';

import React from 'react';
import { ShieldCheck, Code, Award, Terminal, CheckCircle2, UserCheck } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function ProfileHeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Subtle Background Glow Accent */}
      <div className="absolute -top-6 -right-6 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-slate-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Profile Presentation Card */}
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xl shadow-slate-200/60 space-y-6">
        
        {/* Top Profile Header Area */}
        <div className="flex items-center gap-5">
          {/* Avatar Container with Gold Accent Ring */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border-2 border-amber-500/40 p-1 flex items-center justify-center shadow-lg">
              <div className="w-full h-full rounded-xl bg-slate-900 flex flex-col items-center justify-center text-center p-2">
                <span className="text-xl sm:text-2xl font-black tracking-widest text-amber-400">SV</span>
                <span className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold mt-0.5">Sarvessh</span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 p-1 rounded-full ring-2 ring-white shadow" title="Verified Security & Developer">
              <ShieldCheck className="w-4 h-4 font-bold" />
            </div>
          </div>

          {/* Title & Badge */}
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>CGPA: 9.1 / 10</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              {siteConfig.personal.name}
            </h3>
            <p className="text-xs text-slate-600 font-medium">
              B.E. CSE — Cyber Security
            </p>
            <p className="text-[11px] text-slate-500 flex items-center gap-1">
              <UserCheck className="w-3 h-3 text-emerald-600" /> Open for Freelance & Projects
            </p>
          </div>
        </div>

        {/* Floating Mini Code Snippet Card */}
        <div className="bg-slate-950 rounded-2xl p-4 text-slate-200 border border-slate-800 shadow-inner font-mono text-xs space-y-2">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-medium text-slate-300">security_scan.py</span>
            </div>
            <span className="text-[10px] text-amber-400 font-semibold">Python & Security</span>
          </div>

          <div className="space-y-1 text-[11px] text-slate-300 pt-1">
            <p><span className="text-purple-400">class</span> <span className="text-amber-300">SecurityAnalyzer</span>:</p>
            <p className="pl-4 text-slate-400"># Cyber Security & Full-Stack Integration</p>
            <p className="pl-4"><span className="text-blue-400">def</span> <span className="text-emerald-400">audit_application</span>(self, app):</p>
            <p className="pl-8"><span className="text-slate-400">security_score</span> = app.<span className="text-blue-300">validate_inputs</span>()</p>
            <p className="pl-8"><span className="text-purple-400">return</span> &#123; <span className="text-emerald-300">"status"</span>: <span className="text-emerald-300">"SECURE"</span>, <span className="text-emerald-300">"cgpa"</span>: <span className="text-amber-400">9.1</span> &#125;</p>
          </div>
        </div>

        {/* Live Credibility Badges */}
        <div className="grid grid-cols-2 gap-2.5 pt-1">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">500+ Solved</span>
              <span className="text-[10px] text-slate-500 font-medium">LeetCode (Top 9.36%)</span>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-slate-900 text-white">
              <Terminal className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block">CarePoint & KeyShield</span>
              <span className="text-[10px] text-slate-500 font-medium">Full-Stack Projects</span>
            </div>
          </div>
        </div>

        {/* Note for replaceable profile image */}
        <div className="text-[10px] text-center text-slate-400 italic pt-1 border-t border-slate-100 flex items-center justify-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-amber-600" />
          <span>Configurable profile visual — Replace avatar in <code className="text-slate-600 bg-slate-100 px-1 rounded">siteConfig.ts</code></span>
        </div>

      </div>
    </div>
  );
}
