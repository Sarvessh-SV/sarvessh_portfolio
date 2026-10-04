import React from 'react';
import Link from 'next/link';
import { Shield, Home, ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center mx-auto font-bold text-2xl shadow-md">
          <Shield className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase text-amber-600 tracking-wider">
            ERROR 404 &bull; PAGE NOT FOUND
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900">
            Lost in Cyberspace?
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            The page or route you are looking for does not exist or has been relocated.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Return to Sarvessh's Portfolio</span>
          </Link>
        </div>

        <div className="text-[11px] text-slate-400 font-mono">
          {siteConfig.personal.name} &bull; Cyber Security & Full-Stack
        </div>
      </div>
    </div>
  );
}
