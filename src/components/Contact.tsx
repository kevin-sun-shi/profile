import React, { useState } from 'react';
import { Mail, Copy, Check, FileText, Send, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.emails.primary}?subject=${encodeURIComponent(
      subject || 'Academic Collaboration / Inquiry'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 bg-[#07080c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-2">
            <Mail className="w-4 h-4 text-indigo-400" />
            <span>{lang === 'en' ? 'CONNECT & COLLABORATE' : '学术交流与项目合作'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Get In Touch' : '联系方式'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-['Outfit']">
            {lang === 'en' ? 'Contact & Dialogue' : '联系与合作'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            {lang === 'en'
              ? 'Always open to discussions on AI music co-creation, complex rhythm modeling, MIR benchmark datasets, and direct PhD research collaborations.'
              : '欢迎关于人工智能音乐共创、复杂节奏度量建模、音乐信息检索基准数据集及前沿科研课题的深入探讨与合作。'}
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info & Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <div className="bg-[#0c0d16] border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition-colors">
              <div className="text-xs font-mono text-slate-400 mb-1">
                {lang === 'en' ? 'Primary Academic Email' : '首选联系邮箱'}
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm sm:text-base font-mono text-white select-all">
                  {PERSONAL_INFO.emails.primary}
                </span>
                <button
                  onClick={() => handleCopy('primary', PERSONAL_INFO.emails.primary)}
                  className="p-2 rounded-lg bg-[#141624] border border-slate-700/60 hover:bg-[#1a1d30] text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email"
                >
                  {copiedKey === 'primary' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-indigo-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Secondary Email Card */}
            <div className="bg-[#0c0d16] border border-slate-800/80 rounded-2xl p-5 hover:border-slate-700 transition-colors">
              <div className="text-xs font-mono text-slate-400 mb-1">
                {lang === 'en' ? 'Secondary / International Email' : '国际联络邮箱'}
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm sm:text-base font-mono text-white select-all">
                  {PERSONAL_INFO.emails.secondary}
                </span>
                <button
                  onClick={() => handleCopy('secondary', PERSONAL_INFO.emails.secondary)}
                  className="p-2 rounded-lg bg-[#141624] border border-slate-700/60 hover:bg-[#1a1d30] text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                  title="Copy email"
                >
                  {copiedKey === 'secondary' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-indigo-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Academic Locations */}
            <div className="bg-[#0c0d16] border border-slate-800/80 rounded-2xl p-5">
              <div className="text-xs font-mono text-slate-400 mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{lang === 'en' ? 'Institutional Presence' : '学术驻地'}</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-300 font-mono">
                <div>• New York, NY · NYU Steinhardt Music Technology</div>
                <div>• Abu Dhabi · MBZUAI & Louvre Music X Lab Collaborations</div>
                <div>• London, UK · QMUL Jazz Research Group & C4DM</div>
              </div>
            </div>

            {/* Download Full CV Button */}
            <a
              href={PERSONAL_INFO.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shadow-lg shadow-indigo-600/25 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'en' ? 'Download Comprehensive CV (PDF)' : '在新窗口查阅完整个人简历 (PDF)'}</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
          </div>

          {/* Right Column: Fast Dispatch Form */}
          <div className="lg:col-span-7 bg-[#0c0d16] border border-slate-800/80 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white font-['Outfit'] mb-2">
              {lang === 'en' ? 'Direct Inquiry Dispatch' : '发起即时邮件联络'}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {lang === 'en'
                ? 'Fill out your topic to quickly draft and send via your default email client.'
                : '填写您关心的课题或合作设想，直接调用本地邮件客户端发送。'}
            </p>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  {lang === 'en' ? 'Subject / Research Topic' : '邮件主题 / 研究议题'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={
                    lang === 'en'
                      ? 'e.g. AI Music Co-Creation / MIR Research Collaboration'
                      : '例：AI 音乐共创探讨 / 复杂节奏研究合作'
                  }
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#111320] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-1.5">
                  {lang === 'en' ? 'Message / Thoughts' : '留言内容 / 设想'}
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={
                    lang === 'en'
                      ? 'Share your thoughts, paper ideas, or project brief...'
                      : '请简述您的学术背景、合作构想或项目需求...'
                  }
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#111320] border border-slate-700/80 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1a1d30] hover:bg-indigo-600 border border-slate-700/80 hover:border-indigo-500 text-white text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
              >
                <Send className="w-4 h-4 text-indigo-400 group-hover:text-white" />
                <span>{lang === 'en' ? 'Send via Email Client' : '唤起邮件客户端发送'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
