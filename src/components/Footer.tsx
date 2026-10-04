'use client';

import React from 'react';
import { Shield, Mail, ArrowUp } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { GithubIcon, LinkedinIcon } from '@/components/SocialIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="inline-flex items-center gap-2 text-white font-mono font-bold text-xl">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                <Shield className="w-4 h-4" />
              </div>
              <span>{siteConfig.personal.name.toUpperCase()}</span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              "Building useful digital experiences through code, creativity, and problem-solving."
            </p>

            <div className="text-xs text-slate-400">
              Chennai Institute of Technology &bull; B.E. CSE Cyber Security
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              <a href="#hero" className="hover:text-amber-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-amber-400 transition-colors">About Me</a>
              <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
              <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
              <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-amber-400 transition-colors">Skills</a>
              <a href="#achievements" className="hover:text-amber-400 transition-colors">Achievements</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Column 3: Connect & Profiles */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Connect & Profiles
            </h4>
            
            <div className="flex items-center gap-3">
              {siteConfig.personal.socials.github && (
                <a 
                  href={siteConfig.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}

              {siteConfig.personal.socials.linkedin && (
                <a 
                  href={siteConfig.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              )}

              <a 
                href={`mailto:${siteConfig.personal.email}`}
                className="w-10 h-10 rounded-xl bg-slate-900 text-slate-300 hover:text-amber-400 hover:bg-slate-800 flex items-center justify-center transition-colors"
                title="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="text-[11px] text-slate-400 space-y-1 font-mono">
              <div>LeetCode: Sarvessh_sv</div>
              <div>CodeChef: sarvesshsv</div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & scroll top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-400 text-center sm:text-left">
            &copy; {currentYear} {siteConfig.personal.name}. All rights reserved. Crafted with Next.js & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

      </div>
    </footer>
  );
}
