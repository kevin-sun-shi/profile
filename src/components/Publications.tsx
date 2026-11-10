import React, { useState } from 'react';
import { BookOpen, Copy, Check, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { PUBLICATIONS } from '../data/portfolioData';

interface PublicationsProps {
  lang: Language;
}

export const Publications: React.FC<PublicationsProps> = ({ lang }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyBibtex = (id: string, bibtex: string) => {
    navigator.clipboard.writeText(bibtex);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="publications" className="py-20 border-t border-slate-800/80 bg-[#07080c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            <span>{lang === 'en' ? 'SCHOLARSHIP & PAPERS' : '学术著述与论文'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Peer-Reviewed & Academic Writing' : '同行评审与学术文集'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-['Outfit']">
            {lang === 'en' ? 'Publications & Reports' : '发表与学术论文'}
          </h2>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {PUBLICATIONS.map((pub) => {
            const isCopied = copiedId === pub.id;
            return (
              <div
                key={pub.id}
                className="bg-[#0c0d16] border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 sm:p-8 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400 font-semibold">{pub.year}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-300">
                      {lang === 'en' ? pub.venueEn : pub.venueZh}
                    </span>
                  </div>

                  <span className="text-amber-400 bg-amber-950/40 border border-amber-800/40 px-2.5 py-0.5 rounded text-[11px]">
                    {lang === 'en' ? pub.statusEn : pub.statusZh}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white font-['Outfit'] mt-1 mb-2">
                  {lang === 'en' ? pub.title : pub.titleZh}
                </h3>

                <p className="text-xs font-mono text-slate-400 mb-3">
                  <span className="text-slate-500">{lang === 'en' ? 'Authors: ' : '作者：'}</span>
                  {lang === 'en' ? pub.authorsEn : pub.authorsZh}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {lang === 'en' ? pub.abstractEn : pub.abstractZh}
                </p>

                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => handleCopyBibtex(pub.id, pub.bibtex)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141624] border border-slate-700/60 hover:bg-[#1a1d30] text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-indigo-400" />
                    )}
                    <span>{isCopied ? (lang === 'en' ? 'BibTeX Copied!' : '已复制 BibTeX!') : 'Copy BibTeX'}</span>
                  </button>

                  {pub.pdfUrl && (
                    <a
                      href={pub.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{lang === 'en' ? 'View PDF Reference' : '查阅学术档案与成果'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
