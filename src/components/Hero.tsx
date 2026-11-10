import React, { useState } from 'react';
import { FileText, Mail, Check, ArrowRight, Github, ExternalLink, GraduationCap, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.emails.primary);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/3 w-[550px] h-[550px] bg-indigo-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-36 right-10 w-[420px] h-[420px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Hero: Left Column Photo, Right Column Typographic Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Portrait Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative group w-full max-w-[380px]">
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500/25 via-slate-800 to-teal-500/20 rounded-3xl blur-md opacity-75 group-hover:opacity-100 transition duration-500" />

              {/* Image Frame */}
              <div className="relative bg-[#0d0f17] border border-slate-700/80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={lang === 'en' ? 'Shikaiwen Sun portrait' : '孙施凯文个人照片'}
                  className="w-full aspect-[3/4] object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Scrim Overlay & Soundwave Graphic */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-85" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300 bg-[#090a0f]/80 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-medium">{lang === 'en' ? 'NYU Steinhardt' : '纽约大学'}</span>
                  </div>
                  <span className="text-slate-400">
                    {lang === 'en' ? 'Music Tech M.M.' : '音乐科技硕士'}
                  </span>
                </div>
              </div>
            </div>

            {/* Photo Caption Note */}
            <p className="mt-3 text-xs font-mono text-slate-500 text-center lg:text-left">
              {lang === 'en'
                ? 'Shikaiwen Sun · Composer, Pianist & Music AI Researcher'
                : '孙施凯文 · 作曲家 / 钢琴演奏 / 音乐人工智能研究'}
            </p>
          </div>

          {/* Right Column: Hero Content & Identity */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-950/60 border border-indigo-700/50 text-indigo-300 text-xs font-mono mb-4">
              <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
              <span>{lang === 'en' ? PERSONAL_INFO.currentRoleEn : PERSONAL_INFO.currentRoleZh}</span>
            </div>

            {/* Main Headline: Single language display */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-['Outfit'] text-balance">
              {lang === 'en' ? PERSONAL_INFO.nameEn : PERSONAL_INFO.nameZh}
            </h1>

            {/* Tagline */}
            <p className="mt-4 text-lg sm:text-xl text-indigo-200/90 font-medium leading-relaxed text-balance">
              {lang === 'en' ? PERSONAL_INFO.heroTaglineEn : PERSONAL_INFO.heroTaglineZh}
            </p>

            {/* Core Bio Bullet Highlights */}
            <div className="mt-6 space-y-2.5 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                <span>
                  {lang === 'en' ? (
                    <>
                      <strong className="text-white">Lead Composer</strong> of{' '}
                      <em className="text-indigo-300">Dreamscape at Louvre Abu Dhabi</em> (G42 × MBZUAI
                      Music X Lab), the world's first AI fully generated music score.
                    </>
                  ) : (
                    <>
                      作为<strong className="text-white">主创作曲家</strong>主导阿布扎比卢浮宫首部全流程 AI 生成乐谱《Dreamscape》（G42 × MBZUAI Music X Lab）。
                    </>
                  )}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                <span>
                  {lang === 'en' ? (
                    <>
                      Co-developer of <strong className="text-white">CMPD</strong> (Classical Music +
                      Reviews) dual-modal dataset, pairing expert criticism with performance recordings.
                    </>
                  ) : (
                    <>
                      主持开发 <strong className="text-white">CMPD</strong> 古典音乐与权威乐评双模态对齐数据集，探索音乐学先验特征。
                    </>
                  )}
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                <span>
                  {lang === 'en' ? (
                    <>
                      Recipient of the <strong className="text-white">QMUL Global Talent Scholarship</strong>;
                      academic background in Computer Composition & Kapustin concert etudes.
                    </>
                  ) : (
                    <>
                      荣获英国伦敦玛丽女王大学 <strong className="text-white">全球杰出人才奖学金 (Global Talent)</strong>；深厚电子音乐作曲与卡普斯汀练习曲研究背景。
                    </>
                  )}
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* Explore Works Link */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-indigo-600/30 whitespace-nowrap cursor-pointer"
              >
                <span>{lang === 'en' ? 'Explore Research & Works' : '查看研究与代表作品'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* View CV PDF Button */}
              <a
                href={PERSONAL_INFO.cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#131522] hover:bg-[#1a1d30] border border-slate-700/80 text-slate-200 font-medium text-sm transition-colors whitespace-nowrap cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>{lang === 'en' ? 'Download CV (PDF)' : '下载完整 CV 简历'}</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              {/* Quick Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#131522] hover:bg-[#1a1d30] border border-slate-700/80 text-slate-300 hover:text-white font-mono text-xs transition-colors cursor-pointer"
                title="Copy primary email"
              >
                {copiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Mail className="w-4 h-4 text-indigo-400" />
                )}
                <span>{copiedEmail ? (lang === 'en' ? 'Email Copied!' : '已复制邮箱!') : PERSONAL_INFO.emails.primary}</span>
              </button>
            </div>

            {/* External Links Bar */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-400">
              <span className="text-slate-500">{lang === 'en' ? 'ACADEMIC LINKS:' : '学术链接：'}</span>
              
              <a
                href={PERSONAL_INFO.socialLinks.portfolioLouvre}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-indigo-300 hover:text-indigo-200 transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Louvre Abu Dhabi Portfolio</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={PERSONAL_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub (mxladicc25)</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.emails.secondary}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.emails.secondary}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Full-Width Proof & Metrics Row Below Hero Split */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-800/80">
          {PERSONAL_INFO.keyMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-[#0c0d16]/80 border border-slate-800/80 backdrop-blur-sm"
            >
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                {lang === 'en' ? metric.labelEn : metric.labelZh}
              </div>
              <div className="text-base sm:text-lg font-bold text-white font-['Outfit']">
                {lang === 'en' ? metric.valueEn : metric.valueZh}
              </div>
              <div className="text-xs text-slate-400 mt-1 font-sans">
                {lang === 'en' ? metric.subtextEn : metric.subtextZh}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
