import React, { useState } from 'react';
import { GraduationCap, Briefcase, Award, ExternalLink, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { EDUCATION, EXPERIENCES } from '../data/portfolioData';

interface ExperienceTimelineProps {
  lang: Language;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  const [tab, setTab] = useState<'education' | 'experience'>('education');

  return (
    <section id="experience" className="py-20 border-t border-slate-800/80 bg-[#090a0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>{lang === 'en' ? 'ACADEMIC PATHWAY & RESEARCH LABS' : '学术履历与研究轨迹'}</span>
              <span aria-hidden="true">·</span>
              <span>2018 – Present</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-['Outfit']">
              {lang === 'en' ? 'Education & Experience' : '教育背景与科研经历'}
            </h2>
          </div>

          {/* Sub-tab switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-[#10121d] border border-slate-800 rounded-xl">
            <button
              onClick={() => setTab('education')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                tab === 'education'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Education & Degrees' : '教育背景与学历'}</span>
            </button>
            <button
              onClick={() => setTab('experience')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                tab === 'experience'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Research & Fellowships' : '科研与大师班经历'}</span>
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800/90 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-12">
          {tab === 'education' ? (
            // Education Timeline
            EDUCATION.map((edu, idx) => (
              <div key={idx} className="relative group">
                {/* Node indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0c0d16] border-2 border-indigo-500 group-hover:scale-125 transition-transform" />

                <div className="bg-[#0c0d16] border border-slate-800/80 rounded-2xl p-6 sm:p-7 hover:border-slate-700 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-indigo-400">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3 h-3" />
                        {lang === 'en' ? edu.locationEn : edu.locationZh}
                      </span>
                    </div>

                    <span className="text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded text-[11px]">
                      {lang === 'en' ? edu.statusEn : edu.statusZh}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit']">
                    {lang === 'en' ? edu.degree : edu.degreeZh}
                  </h3>

                  <div className="text-sm font-medium text-indigo-300 mt-1 mb-3">
                    {lang === 'en' ? edu.institution : edu.institutionZh}
                  </div>

                  {edu.honorsEn && (
                    <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-950/30 border border-amber-700/40 text-amber-300 text-xs font-mono">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>{lang === 'en' ? edu.honorsEn : edu.honorsZh}</span>
                    </div>
                  )}

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {(lang === 'en' ? edu.highlightsEn : edu.highlightsZh).map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          ) : (
            // Research Experiences Timeline
            EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0c0d16] border-2 border-teal-500 group-hover:scale-125 transition-transform" />

                <div className="bg-[#0c0d16] border border-slate-800/80 rounded-2xl p-6 sm:p-7 hover:border-slate-700 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400 mb-2">
                    <span className="flex items-center gap-1 text-teal-400">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    {exp.url && (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <span>{lang === 'en' ? 'Open Portfolio' : '查看展演成果'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit']">
                    {lang === 'en' ? exp.role : exp.roleZh}
                  </h3>

                  <div className="text-sm font-medium text-teal-300 mt-0.5">
                    {lang === 'en' ? exp.organization : exp.organizationZh}
                  </div>

                  {exp.mentorEn && (
                    <div className="text-xs font-mono text-slate-400 mt-1 mb-3">
                      <span className="text-slate-500">{lang === 'en' ? 'Mentors: ' : '指导/合作：'}</span>
                      {lang === 'en' ? exp.mentorEn : exp.mentorZh}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {lang === 'en' ? exp.descEn : exp.descZh}
                  </p>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {(lang === 'en' ? exp.achievementsEn : exp.achievementsZh).map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
