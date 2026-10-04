'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, ShieldCheck, Cpu, Download, FileText, CheckCircle2, AlertCircle } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function About() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const handleResumeClick = () => {
    if (siteConfig.personal.hasResumeFile) {
      window.open(siteConfig.personal.resumePath, '_blank');
    } else {
      setShowResumeModal(true);
    }
  };

  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            BACKGROUND & APPROACH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            A Little About Me
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Bridging robust software engineering with security-first mindset and analytical problem solving.
          </p>
        </div>

        {/* Main Grid: Bio Left, Cards Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base"
          >
            {siteConfig.personal.aboutText.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-slate-600">
                {paragraph}
              </p>
            ))}

            {/* Resume Button & Contact CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={handleResumeClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all transform hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download Resume (PDF)</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
              >
                <span>Let's Connect</span>
              </a>
            </div>
          </motion.div>

          {/* 3 Highlight Cards Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                  <Code2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Full-Stack Development
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Building responsive frontend UIs and reliable backend services with Next.js, Node.js, Express, React, and modern databases.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/90 shadow-sm hover:border-amber-300 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Cybersecurity Awareness
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Integrating secure development practices, input validation, vulnerability awareness, and security monitoring into applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Problem-Solving
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Applying data structures, algorithm optimization, and logic-driven approaches honed through 500+ LeetCode problems.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Honest Resume Notice Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-slate-200 shadow-2xl space-y-4">
            <div className="flex items-center gap-3 text-slate-900">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Resume Verification</h3>
            </div>
            
            <p className="text-xs text-slate-600 leading-relaxed">
              The official resume PDF document can be downloaded directly once placed at <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800 font-mono">public/Sarvessh_SV_Resume.pdf</code>.
            </p>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 space-y-1">
              <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Academic & Internship Summary Verified:
              </div>
              <ul className="list-disc list-inside text-[11px] text-slate-600 space-y-0.5 pt-1">
                <li>B.E. CSE — Cyber Security (CGPA: 9.1/10)</li>
                <li>Full Stack Intern @ Novi Tech & Zentexus</li>
                <li>Cybersecurity Intern @ AICTE</li>
              </ul>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setShowResumeModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
