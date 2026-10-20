import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Activity, Layers, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // 3D Card tilt calculation with reduced motion check
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.008, 1.008, 1.008)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const primaryProject = projectsData.find((p) => p.isFeatured) || projectsData[0];
  const secondaryProjects = projectsData.filter((p) => p.id !== primaryProject.id);

  return (
    <section id="projects" aria-label="Featured Projects" className="py-24 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            04. Deployments &amp; Research
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F4F7FB]">
            Featured Projects
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-mono">
            Interactive software systems, critical infrastructure defense concepts, and hands-on cybersecurity research.
          </p>
        </div>

        {/* PRIMARY FEATURED PROJECT: PULSEGATE */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-400/30 shadow-xl transition-transform duration-200 ease-out mb-10 relative overflow-hidden"
        >
          {/* Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-400/10 via-transparent to-transparent pointer-events-none rounded-bl-full" aria-hidden="true"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-cyan-400">
                <span className="flex items-center gap-1.5 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                  Primary Featured Project
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-300">{primaryProject.status}</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-[#F4F7FB] break-words">
                {primaryProject.title}
              </h3>
              
              <p className="font-mono text-xs text-cyan-300 uppercase tracking-wider">
                {primaryProject.category}
              </p>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {primaryProject.summary}
              </p>

              {/* Architectural Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {primaryProject.features?.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-mono text-slate-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" aria-hidden="true"></div>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-2 pt-3 text-xs font-mono text-slate-300">
                {primaryProject.techTags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded bg-[#070B14] border border-slate-800 text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                {primaryProject.demoUrl && (
                  <a
                    href={primaryProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all font-semibold shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
                    aria-label="Launch PulseGate live platform (opens in new tab)"
                  >
                    <span>Launch Platform Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(primaryProject)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-mono text-xs sm:text-sm uppercase tracking-wider text-slate-200 bg-[#101A2B] border border-slate-700/60 hover:border-cyan-400/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
                  aria-label="Open detailed architecture breakdown for PulseGate"
                >
                  <span>Architecture Modal</span>
                  <Layers className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
            </div>

            {/* Visual Healthcare Triage Graphics Display */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-[#070B14] p-5 border border-slate-800 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                    <span className="font-mono text-xs text-[#F4F7FB]">Triage Routing Stream</span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400">Rules-Based Engine</span>
                </div>

                {/* Triage Stream Visual */}
                <div className="space-y-2.5 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[#101A2B] border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-[11px]">Intake Routing Priority</p>
                      <p className="text-[#F4F7FB] font-semibold">Priority Code: Alpha (Level 2)</p>
                    </div>
                    <span className="text-amber-300 text-[10px] font-bold">
                      Urgent Review
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#101A2B] border border-slate-800 flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-[11px]">Facility Matching Matrix</p>
                      <p className="text-[#F4F7FB] font-semibold">Bengaluru District Care Center</p>
                    </div>
                    <span className="text-cyan-400 text-[10px]">
                      Capability Matched
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#101A2B] border border-slate-800 space-y-1.5">
                    <div className="flex justify-between text-[11px] text-slate-300">
                      <span>Multilingual Parser (Kannada · Hindi · English)</span>
                      <span className="text-cyan-400">Verified</span>
                    </div>
                    <div className="w-full bg-[#070B14] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full w-[90%]"></div>
                    </div>
                  </div>
                </div>

                <p className="text-[10px] font-mono text-slate-400 text-center pt-1">
                  Transparent rules-based clinical intake criteria
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* SECONDARY PROJECTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryProjects.map((proj) => (
            <div
              key={proj.id}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 transition-transform duration-200 ease-out flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-400 tracking-wider uppercase">
                    {proj.category}
                  </span>
                  <span className="text-slate-400">
                    {proj.status}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-[#F4F7FB]">
                  {proj.title}
                </h3>

                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
                  {proj.summary}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2 text-xs font-mono text-slate-300">
                  {proj.techTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#070B14] border border-slate-800 text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-slate-800">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
                  aria-label={`Open research exploration details for ${proj.title}`}
                >
                  <span>Explore Research Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#070B14] border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    aria-label={`View ${proj.title} repository on GitHub (opens in new tab)`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Accessible Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
