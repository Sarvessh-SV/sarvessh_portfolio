'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, CheckCircle2, AlertCircle } from 'lucide-react';
import { Project } from '@/config/siteConfig';
import { GithubIcon } from '@/components/SocialIcons';
import CarePointQueueVisual from './CarePointQueueVisual';
import KeyShieldSecurityVisual from './KeyShieldSecurityVisual';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-slate-900 text-white p-6 flex items-center justify-between border-b border-slate-800 shrink-0">
            <div>
              <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                {project.title}
              </h3>
            </div>
            <button 
              onClick={onClose}
              className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Scrollable */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
            {/* Project Mockup Graphic */}
            <div className="w-full">
              {project.visualType === 'carepoint-queue' ? (
                <CarePointQueueVisual />
              ) : (
                <KeyShieldSecurityVisual />
              )}
            </div>

            {/* Achievement Highlight if present */}
            {project.achievement && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/90 flex items-start gap-3 text-amber-900">
                <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-amber-950 text-sm">Key Achievement / Recognition</span>
                  <p className="text-xs text-amber-800/90 mt-0.5">{project.achievement}</p>
                </div>
              </div>
            )}

            {/* Overview */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
                Project Overview
              </h4>
              <p className="text-sm leading-relaxed text-slate-600">
                {project.fullDescription}
              </p>
            </div>

            {/* Features List */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                Key Features & Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>Repository & Demo links configurable in siteConfig.ts</span>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl ? (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub Repository
                </a>
              ) : (
                <button 
                  disabled
                  className="px-4 py-2 rounded-xl bg-slate-200 text-slate-500 text-xs font-semibold flex items-center gap-2 cursor-not-allowed opacity-80"
                  title="GitHub repository link pending configuration"
                >
                  <GithubIcon className="w-4 h-4" /> Code Repository (Pending)
                </button>
              )}

              {project.liveDemoUrl ? (
                <a 
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold flex items-center gap-2 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              ) : (
                <button 
                  disabled
                  className="px-4 py-2 rounded-xl bg-slate-200 text-slate-500 text-xs font-semibold flex items-center gap-2 cursor-not-allowed opacity-80"
                  title="Live demo link pending configuration"
                >
                  <ExternalLink className="w-4 h-4" /> Demo Unavailable
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
