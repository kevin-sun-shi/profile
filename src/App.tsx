import React, { useState, useEffect } from 'react';
import { Language, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { InteractiveAudio } from './components/InteractiveAudio';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Publications } from './components/Publications';
import { SkillsGrid } from './components/SkillsGrid';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Sync title and lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === 'en'
        ? 'Shikaiwen Sun — Music Technology & AI Research'
        : '孙施凯文 — 音乐科技与人工智能研究';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'zh' : 'en'));
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Top Navbar */}
      <Navbar lang={lang} onToggleLang={toggleLanguage} />

      <main>
        {/* Hero Section */}
        <Hero lang={lang} />

        {/* About Section */}
        <About lang={lang} />

        {/* Featured Projects & Research */}
        <Projects lang={lang} onSelectProject={setSelectedProject} />

        {/* Interactive Audio Engine Benchmark */}
        <InteractiveAudio lang={lang} />

        {/* Education & Experience Timeline */}
        <ExperienceTimeline lang={lang} />

        {/* Publications & Academic Reports */}
        <Publications lang={lang} />

        {/* Technical & Musical Capabilities */}
        <SkillsGrid lang={lang} />

        {/* Contact & Inquiry */}
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />
    </div>
  );
}
