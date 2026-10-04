'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layers, Layout, Wrench, ShieldAlert, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Layout': return <Layout className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      default: return <Globe className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            FREELANCE OFFERINGS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Services Built for Clients & Businesses
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Delivering clean, responsive, and secure digital products tailored to your goals.
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-slate-900 text-amber-400 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                  {getIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-900 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`#contact?service=${service.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 hover:text-amber-600 transition-colors"
                >
                  <span>Discuss a Project</span>
                  <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
