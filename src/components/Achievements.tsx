import React from 'react';
import { CheckCircle } from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="activities" className="py-20 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            05. Milestones & Activities
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F4F7FB]">
            Hackathons & Security Competitions
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl font-mono">
            Competitive innovation initiatives, technical societies, and CTF participation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 pl-6 sm:pl-10 space-y-8">
          
          {achievementsData.map((item, index) => {
            return (
              <div key={index} className="relative group">
                
                {/* Static Timeline Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#070B14] border-2 border-cyan-400 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                </div>

                {/* Content Card */}
                <div className="glass-panel p-6 rounded-2xl border border-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider">
                      {item.organization}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Verified Milestone</span>
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-[#F4F7FB] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
