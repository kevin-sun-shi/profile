import React from 'react';
import { Compass, Sparkles, BookOpen, Music, Cpu, Layers } from 'lucide-react';
import { Language } from '../types';
import { ABOUT_CONTENT } from '../data/portfolioData';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const disciplineIcons = [
    <Cpu className="w-5 h-5 text-indigo-400" />,
    <Sparkles className="w-5 h-5 text-purple-400" />,
    <Music className="w-5 h-5 text-teal-400" />,
    <Layers className="w-5 h-5 text-amber-400" />,
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-[#090a0e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2">
            <Compass className="w-4 h-4 text-indigo-400" />
            <span>{lang === 'en' ? 'BIOGRAPHY & RESEARCH PHILOSOPHY' : '学术背景与研究哲学'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Cross-Disciplinary Trajectory' : '跨学科研创脉络'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-['Outfit']">
            {lang === 'en' ? 'About Me' : '关于我'}
          </h2>
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Academic & Creative Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-sm sm:text-base">
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
              {lang === 'en' ? ABOUT_CONTENT.introEn : ABOUT_CONTENT.introZh}
            </p>

            <p>{lang === 'en' ? ABOUT_CONTENT.paragraph2En : ABOUT_CONTENT.paragraph2Zh}</p>

            <p>{lang === 'en' ? ABOUT_CONTENT.paragraph3En : ABOUT_CONTENT.paragraph3Zh}</p>

            {/* Core Influences & Idioms Quote Box */}
            <div className="mt-8 p-5 rounded-2xl bg-[#0f111c] border border-slate-800/90 relative">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <span className="font-mono text-indigo-300 font-semibold uppercase tracking-wider block mb-1">
                    {lang === 'en' ? 'Compositional Influences & Theoretical Grounding' : '作曲技法渊源与理论根基'}
                  </span>
                  <p className="text-slate-300 italic">
                    {lang === 'en'
                      ? '“Bridging Pat Metheny’s asymmetric polymeter, György Ligeti’s micropolyphony, and Nikolai Kapustin’s concert etudes with mathematical syncopation entropy and modern transformer inductive priors.”'
                      : '“将 Pat Metheny 的非对称复节拍、Ligeti 的微复调音块以及卡普斯汀练习曲中的精湛爵士语汇，与数学切分熵和 Transformer 归纳偏置相融合，探索人机深度共创的新纪元。”'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Research Pillars Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
              {lang === 'en' ? 'Core Research Axes' : '核心研创支柱'}
            </h3>

            {ABOUT_CONTENT.disciplines.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#0c0d16] border border-slate-800/80 hover:border-slate-700 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-[#141624] border border-slate-700/60 group-hover:border-indigo-500/50 transition-colors">
                    {disciplineIcons[idx % disciplineIcons.length]}
                  </div>
                  <h4 className="text-sm sm:text-base font-semibold text-white font-['Outfit']">
                    {lang === 'en' ? item.titleEn : item.titleZh}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-12">
                  {lang === 'en' ? item.descEn : item.descZh}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
