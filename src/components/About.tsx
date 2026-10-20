import React from 'react';
import { Shield, Code, Cpu, Languages, MapPin, Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" aria-label="About Yashas B Naik" className="py-20 sm:py-24 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            01. Background &amp; Perspective
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F4F7FB]">
            About Yashas
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main narrative block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4 text-slate-200 leading-relaxed border border-slate-800">
              <p className="text-[#F4F7FB] font-medium text-base sm:text-lg">
                I am a Computer Science and Engineering student specializing in Cybersecurity at{' '}
                <span className="text-cyan-400 font-semibold">Dayananda Sagar College of Engineering</span>, Bengaluru.
              </p>
              
              <p>
                My focus centers on software engineering, cybersecurity, and AI-assisted workflows. I learn best through direct development, diagnosing root causes in code, system experimentation, and competitive Capture The Flag (CTF) security challenges.
              </p>

              <p>
                I am currently building <span className="text-[#F4F7FB] font-semibold">PulseGate</span>, an intake and referral routing platform designed to guide patients toward capable facilities with transparent clinical triage rules. My ongoing goal is to create reliable, security-conscious software that solves real bottlenecks.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 border-t border-slate-800 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-blue-400 shrink-0" aria-hidden="true" />
                  <span>Languages: {personalInfo.languages.join(" · ")}</span>
                </div>
              </div>
            </div>

            {/* Action buttons inside About */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
              >
                <span>View Featured Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider text-slate-200 border border-slate-700 bg-[#101A2B] hover:border-cyan-400/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          {/* Right Pillar Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2.5 font-heading font-semibold text-[#F4F7FB] text-base">
                <div className="w-8 h-8 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                </div>
                <span>Cybersecurity &amp; CTF Defense</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hands-on investigation of web vulnerabilities, secure application architectures, cryptanalysis, and suspicious telemetry parsing.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2.5 font-heading font-semibold text-[#F4F7FB] text-base">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <Code className="w-4 h-4 text-blue-400" aria-hidden="true" />
                </div>
                <span>Full-Stack Application Engineering</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Building responsive frontends with React and TypeScript, coupled with FastAPI services and PostgreSQL database backends.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-2.5 font-heading font-semibold text-[#F4F7FB] text-base">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-purple-400" aria-hidden="true" />
                </div>
                <span>AI &amp; Workflow Automation</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Prototyping with Google AI Studio and Gemini models to construct transparent, developer-centric intelligent workflows.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
