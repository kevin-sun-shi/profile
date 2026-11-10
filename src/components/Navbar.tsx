import React, { useState, useEffect } from 'react';
import { FileText, Globe, Menu, X, ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', labelEn: 'About', labelZh: '关于' },
    { href: '#projects', labelEn: 'Research & Works', labelZh: '研究与作品' },
    { href: '#interactive-audio', labelEn: 'Audio Engine', labelZh: '交互探针' },
    { href: '#experience', labelEn: 'Experience', labelZh: '经历与学术' },
    { href: '#publications', labelEn: 'Publications', labelZh: '学术成果' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-white hover:text-indigo-300 transition-colors whitespace-nowrap shrink-0 font-['Outfit']"
          >
            {lang === 'en' ? PERSONAL_INFO.nameEn : PERSONAL_INFO.nameZh}
          </a>

          {/* Zone 2: Single-line Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs sm:text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-indigo-400 transition-colors whitespace-nowrap shrink-0"
              >
                {lang === 'en' ? link.labelEn : link.labelZh}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Actions (Language Toggle + CV Button) */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-700/80 bg-[#121420] text-xs font-mono text-slate-300 hover:text-white hover:border-slate-600 transition-colors cursor-pointer whitespace-nowrap shrink-0"
              title={lang === 'en' ? 'Switch to Chinese' : '切换为英文'}
            >
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>{lang === 'en' ? '中文' : 'EN'}</span>
            </button>

            {/* Direct CV PDF Link */}
            <a
              href={PERSONAL_INFO.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors shadow-sm shadow-indigo-600/30 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Curriculum Vitae' : '查看完整简历'}</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-slate-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0d16] border-b border-slate-800 px-6 py-5 mt-3 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-3 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-indigo-400 py-1 transition-colors"
              >
                {lang === 'en' ? link.labelEn : link.labelZh}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
            <a
              href={PERSONAL_INFO.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 py-1"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Open CV (PDF)' : '在新窗口打开 CV 简历'}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
