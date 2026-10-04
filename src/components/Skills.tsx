'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Cloud, Brain, BookOpen } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5 text-amber-500" />,
      skills: siteConfig.skills.programming,
      color: "bg-amber-50 border-amber-200"
    },
    {
      title: "Frontend & Design",
      icon: <Layout className="w-5 h-5 text-blue-500" />,
      skills: siteConfig.skills.frontend,
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Backend & Databases",
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      skills: siteConfig.skills.backend,
      color: "bg-emerald-50 border-emerald-200"
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-5 h-5 text-purple-500" />,
      skills: siteConfig.skills.devops,
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "AI & Data Science",
      icon: <Brain className="w-5 h-5 text-rose-500" />,
      skills: siteConfig.skills.ai,
      color: "bg-rose-50 border-rose-200"
    },
    {
      title: "CS Fundamentals",
      icon: <BookOpen className="w-5 h-5 text-indigo-500" />,
      skills: siteConfig.skills.csFundamentals,
      color: "bg-indigo-50 border-indigo-200"
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            TECHNICAL TOOLSET
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Competencies & Stack
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Categorized toolkit across languages, web frameworks, databases, cloud, and core computer science fundamentals.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 space-y-4 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className={`p-2.5 rounded-xl border ${cat.color} flex items-center justify-center shrink-0`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {cat.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-xs font-semibold text-slate-800 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-[10px] text-slate-400 font-mono text-right">
                {cat.skills.length} Technical Items
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
