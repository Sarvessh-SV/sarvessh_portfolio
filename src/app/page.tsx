import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Volunteering from '@/components/Volunteering';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-slate-950">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
        <Certifications />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
