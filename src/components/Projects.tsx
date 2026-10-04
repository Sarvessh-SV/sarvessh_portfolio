'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { siteConfig, Project } from '@/config/siteConfig';
import CarePointQueueVisual from './CarePointQueueVisual';
import KeyShieldSecurityVisual from './KeyShieldSecurityVisual';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            PROVEN WORK & CODE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects & Engineering
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Real software systems solving domain challenges in healthcare queue optimization and cybersecurity process detection.
          </p>
        </div>

        {/* Projects Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {siteConfig.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-slate-50/60 rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Visual Graphic Representation */}
                <div className="w-full transform group-hover:scale-[1.01] transition-transform duration-300">
                  {project.visualType === 'carepoint-queue' ? (
                    <CarePointQueueVisual />
                  ) : (
                    <KeyShieldSecurityVisual />
                  )}
                </div>

                {/* Achievement Badge */}
                {project.achievement && (
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/90 flex items-start gap-2.5 text-xs text-amber-950 font-medium">
                    <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{project.achievement}</span>
                  </div>
                )}

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase text-slate-500">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-1.5 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Highlighted Capabilities
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Badges */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-white text-slate-800 border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Action Footer */}
              <div className="bg-white px-6 sm:px-8 py-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-amber-600 transition-colors"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                  {project.id === 'carepoint' ? 'Healthcare Queue' : 'Cybersecurity'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
