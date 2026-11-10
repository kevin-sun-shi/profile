import React from 'react';
import { Wrench, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { TECHNICAL_SKILLS } from '../data/portfolioData';

interface SkillsGridProps {
  lang: Language;
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ lang }) => {
  return (
    <section className="py-20 border-t border-slate-800/80 bg-[#090a0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2">
            <Wrench className="w-4 h-4 text-indigo-400" />
            <span>{lang === 'en' ? 'COMPUTATIONAL & ARTISTIC CAPABILITIES' : '专业技术与创作能力'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Interdisciplinary Toolkit' : '跨学科工具矩阵'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-['Outfit']">
            {lang === 'en' ? 'Technical & Musical Expertise' : '专业技能与技术栈'}
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {TECHNICAL_SKILLS.map((skillGroup, idx) => (
            <div
              key={idx}
              className="bg-[#0c0d16] border border-slate-800/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit'] pb-3 border-b border-slate-800/80 mb-5">
                  {lang === 'en' ? skillGroup.categoryEn : skillGroup.categoryZh}
                </h3>

                <div className="space-y-4">
                  {skillGroup.items.map((item, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>{item.name}</span>
                      </div>
                      <p className="text-xs text-slate-400 pl-6 leading-relaxed">
                        {lang === 'en' ? item.detailEn : item.detailZh}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
