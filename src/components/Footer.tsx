import React from 'react';
import { ArrowUp, Github, Sparkles, FileText } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-800/80 bg-[#06070a] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Academic Note */}
          <div className="text-center md:text-left space-y-1">
            <div className="text-white font-semibold font-['Outfit'] text-sm">
              {lang === 'en' ? PERSONAL_INFO.nameEn : PERSONAL_INFO.nameZh}
            </div>
            <p className="text-slate-500 font-mono text-[11px]">
              {lang === 'en'
                ? 'Composer · Pianist · Graduate Student in Music Technology @ NYU'
                : '作曲家 · 钢琴演奏 · 纽约大学音乐科技硕士在读'}
            </p>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-slate-400">
            <a
              href={PERSONAL_INFO.socialLinks.portfolioLouvre}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Louvre Abu Dhabi Portfolio</span>
            </a>
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV (PDF)</span>
            </a>
          </div>

          {/* Right Action: Back to Top */}
          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-[11px] font-mono">
              © {new Date().getFullYear()} {lang === 'en' ? PERSONAL_INFO.nameEn : PERSONAL_INFO.nameZh}.
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-[#10121d] border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
