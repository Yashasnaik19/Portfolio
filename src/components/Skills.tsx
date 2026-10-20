import React, { useState } from 'react';
import { Layers, Check } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map(c => c.title)];

  const displayedCategories = activeCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.title === activeCategory);

  return (
    <section id="skills" aria-label="Technical Skills and Tooling" className="py-20 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            03. Technical Capabilities
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F4F7FB]">
            Skills &amp; Applied Tooling
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-mono">
            Languages, frameworks, database systems, and cybersecurity competencies applied in coursework and projects.
          </p>
        </div>

        {/* Filter Segmented Buttons */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Skill categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14] ${
                activeCategory === cat
                  ? 'bg-cyan-400 text-black font-semibold shadow-sm'
                  : 'bg-[#101A2B] border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((group) => (
            <div
              key={group.title}
              className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-800">
                  <div className="w-7 h-7 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                    <Layers className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading font-semibold text-[#F4F7FB] text-base">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-[#070B14] border border-slate-800 text-slate-200"
                    >
                      <Check className="w-3 h-3 text-cyan-400 shrink-0" aria-hidden="true" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-400 tabular-nums">
                {group.skills.length} verified technologies
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
