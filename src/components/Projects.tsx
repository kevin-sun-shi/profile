import React, { useState } from 'react';
import { ExternalLink, Code2, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import { Language, ProjectItem } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsProps {
  lang: Language;
  onSelectProject: (project: ProjectItem) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ lang, onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-music' | 'mir-data' | 'composition'>('all');

  const filterTabs = [
    { key: 'all', labelEn: 'All Selected Works', labelZh: '全部精选项目' },
    { key: 'ai-music', labelEn: 'AI & Generative Music', labelZh: 'AI 与生成式音乐' },
    { key: 'mir-data', labelEn: 'MIR & Multimodal Data', labelZh: '音乐检索与多模态' },
    { key: 'composition', labelEn: 'Acoustic Composition & Jazz', labelZh: '严肃作曲与爵士' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 bg-[#07080c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>{lang === 'en' ? 'FEATURED RESEARCH & ARTISTIC WORKS' : '精选研究与艺术创作'}</span>
              <span aria-hidden="true">·</span>
              <span>2021 – 2025</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-['Outfit']">
              {lang === 'en' ? 'Research & Projects' : '研究与代表作品'}
            </h2>
          </div>

          {/* Filter Tabs (Interactive Functional Buttons) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#0e101a] border border-slate-800/90 rounded-xl overflow-x-auto">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key as typeof activeFilter)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {lang === 'en' ? tab.labelEn : tab.labelZh}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => {
            const isFeatured = project.id === 'dreamscape-louvre';
            return (
              <div
                key={project.id}
                className={`flex flex-col justify-between rounded-2xl bg-[#0c0d16] border transition-all duration-300 p-6 sm:p-7 relative group hover:shadow-xl hover:shadow-indigo-950/20 ${
                  isFeatured
                    ? 'border-indigo-500/50 hover:border-indigo-400 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#0c0d16] via-[#0e101e] to-[#121424]'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                {/* Card Top: Unboxed Metadata */}
                <div>
                  <div className="flex items-center justify-between gap-3 text-xs font-mono text-slate-400 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-indigo-400 font-semibold">
                        {lang === 'en' ? project.categoryLabelEn : project.categoryLabelZh}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>
                    <span className="text-slate-500 truncate max-w-[140px] text-right">
                      {project.organization}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] group-hover:text-indigo-200 transition-colors">
                    {lang === 'en' ? project.title : project.titleZh}
                  </h3>

                  {/* Role */}
                  <div className="text-xs font-mono text-slate-400 mt-1 mb-3">
                    {lang === 'en' ? project.roleEn : project.roleZh}
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {lang === 'en' ? project.summaryEn : project.summaryZh}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-mono text-slate-400">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-[#131522] border border-slate-800/80 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Actions Bar */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  {/* Detailed Modal Trigger */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Methodology & Code' : '查看架构与代码'}</span>
                  </button>

                  {/* Direct External Link */}
                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer group-hover:text-indigo-300"
                      title={lang === 'en' ? 'Open link in new tab' : '在新窗口打开外部资源'}
                    >
                      <span>
                        {project.id === 'dreamscape-louvre'
                          ? lang === 'en'
                            ? 'Louvre Portfolio'
                            : '卢浮宫官网'
                          : lang === 'en'
                            ? 'Repository'
                            : '项目仓库'}
                      </span>
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
