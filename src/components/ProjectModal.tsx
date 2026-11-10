import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Code2, Check, Sparkles, Users, Award, BookOpen } from 'lucide-react';
import { ProjectItem, Language } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  lang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-[#0d0f17] border border-slate-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-6 sm:p-8 text-slate-200">
        {/* Header Bar */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800/80 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-1.5">
              <span>{lang === 'en' ? project.categoryLabelEn : project.categoryLabelZh}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
              <span aria-hidden="true">·</span>
              <span>{project.organization}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit']">
              {lang === 'en' ? project.title : project.titleZh}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
              {lang === 'en' ? project.roleEn : project.roleZh}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-6 space-y-6">
          {/* Detailed Narrative */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              {lang === 'en' ? 'Overview & Methodological Architecture' : '核心架构与研发背景'}
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {lang === 'en' ? project.descriptionEn : project.descriptionZh}
            </p>
          </div>

          {/* Collaborators & Organization */}
          <div className="bg-[#121420] border border-slate-800/80 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <Users className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
              <div className="text-xs">
                <span className="text-slate-400 font-mono">
                  {lang === 'en' ? 'Key Collaborators & Mentorship:' : '核心合作团队与导师：'}
                </span>
                <p className="text-slate-200 mt-0.5 font-medium">
                  {lang === 'en' ? project.collaboratorsEn : project.collaboratorsZh}
                </p>
              </div>
            </div>
          </div>

          {/* Key Deliverables / Outcomes */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              {lang === 'en' ? 'Key Results & Technical Milestones' : '学术产出与核心里程碑'}
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {(lang === 'en' ? project.outcomesEn : project.outcomesZh).map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="pt-2">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              {lang === 'en' ? 'Tech Stack & Research Domains' : '技术栈与研究标签'}
            </h4>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-[#161826] border border-slate-700/60 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Code Snippet (if available) */}
          {project.codeSnippet && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{project.codeSnippet.filename}</span>
                </h4>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-white px-2.5 py-1 rounded bg-slate-800/60 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Code2 className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? (lang === 'en' ? 'Copied!' : '已复制!') : (lang === 'en' ? 'Copy Code' : '复制代码')}</span>
                </button>
              </div>
              <pre className="p-4 bg-[#08090f] border border-slate-800/90 rounded-xl overflow-x-auto text-xs font-mono text-indigo-200/90 leading-relaxed">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          )}

          {/* External Action Button */}
          {project.externalUrl && (
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-400 font-mono">
                {lang === 'en' ? 'External Documentation / Showcase:' : '外部公开页面与资料：'}
              </span>
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs sm:text-sm transition-colors shadow-lg shadow-indigo-600/20 whitespace-nowrap cursor-pointer"
              >
                <span>
                  {lang === 'en'
                    ? project.externalUrlLabelEn || 'Open External Resource'
                    : project.externalUrlLabelZh || '在新窗口打开外部资源'}
                </span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
