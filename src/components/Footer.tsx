import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      role="contentinfo"
      className="border-t border-slate-800 py-12 relative z-10 bg-[#070B14]/95 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center md:text-left">
            <p className="font-heading font-semibold text-[#F4F7FB] text-base">
              {personalInfo.name}
            </p>
            <p className="font-mono text-xs text-slate-300">
              Computer Science &amp; Engineering (Cybersecurity) · Dayananda Sagar College of Engineering
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
            <span>Bengaluru, Karnataka, India</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>React + TypeScript + Three.js</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-[#101A2B] border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
            aria-label="Scroll back to the top of the page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/60 text-center text-xs font-mono text-slate-400">
          © {new Date().getFullYear()} Yashas B Naik. All verified credentials, projects, and academic records maintained.
        </div>
      </div>
    </footer>
  );
};
