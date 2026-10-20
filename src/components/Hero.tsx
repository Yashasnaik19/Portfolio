import React, { useState, useEffect, Suspense, lazy } from 'react';
import { ArrowRight, Download, Github, ExternalLink, User } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

// Lazy-load the heavy 3D Digital Globe
const DigitalGlobe = lazy(() =>
  import('./DigitalGlobe').then((module) => ({ default: module.DigitalGlobe }))
);

export const Hero: React.FC = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const currentHeadline = personalInfo.roleHeadlines[headlineIndex];
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayedText(currentHeadline);
      return;
    }

    const typingSpeed = isDeleting ? 28 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentHeadline) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setHeadlineIndex((prev) => (prev + 1) % personalInfo.roleHeadlines.length);
      } else {
        setDisplayedText(
          currentHeadline.substring(0, displayedText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, headlineIndex]);

  return (
    <section
      aria-label="Hero Introduction"
      className="relative min-h-[90vh] pt-28 sm:pt-32 pb-16 flex items-center overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Hierarchy & CTAs with High-Contrast Scrim */}
          <div className="lg:col-span-7 space-y-6 text-left relative z-10">
            
            {/* Unboxed Metadata Header (Zero-Pill Discipline & High Contrast) */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs tracking-wider text-cyan-400">
              <span>Dayananda Sagar College of Engineering</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>B.E. 2029</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="text-slate-200">CGPA 8.75</span>
            </div>

            {/* Main Greeting and Name */}
            <div className="space-y-2">
              <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-slate-400">
                Cybersecurity &amp; Software Development
              </p>
              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F7FB] leading-tight break-words">
                {personalInfo.name}
              </h1>
            </div>

            {/* Cycling Headline with accessibility announcement */}
            <div className="h-10 flex items-center" aria-live="polite">
              <span className="font-heading text-lg sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">
                {displayedText}
              </span>
              <span className="w-0.5 h-6 ml-1.5 bg-cyan-400 animate-pulse" aria-hidden="true"></span>
            </div>

            {/* Supporting Bio with WCAG AA Contrast */}
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-xl">
              {personalInfo.tagline}
            </p>

            {/* Quiet Unboxed Metadata Tags */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs font-mono text-slate-300">
              <span className="text-cyan-300">Cybersecurity Focus</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-200">PulseGate Creator</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-200">Full-Stack &amp; AI Systems</span>
            </div>

            {/* Primary Action Buttons with visible focus rings */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              {/* 1. Explore Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm font-mono tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-400/20 transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* 2. About Yashas */}
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm font-mono tracking-wider text-slate-200 bg-[#101A2B] border border-slate-700/60 hover:border-cyan-400/50 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
              >
                <User className="w-4 h-4 text-cyan-400" />
                <span>About Yashas</span>
              </a>

              {/* 3. GitHub Profile */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm font-mono tracking-wider text-slate-200 hover:text-white bg-[#101A2B] border border-slate-700/60 hover:border-cyan-400/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
                aria-label="Visit Yashas B Naik's GitHub profile (opens in new tab)"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              {/* 4. Download Resume */}
              <a
                href={personalInfo.resumePath}
                download={personalInfo.resumeDownloadName}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm font-mono tracking-wider text-slate-200 hover:text-cyan-300 bg-[#101A2B] border border-slate-700/60 hover:border-cyan-400/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
                aria-label="Download Yashas B Naik's resume PDF"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column: Lazy-Loaded 3D Globe with Portrait Lockup */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[340px] sm:min-h-[400px]">
            <div className="w-full relative">
              <Suspense
                fallback={
                  <div className="w-full h-[340px] sm:h-[400px] flex flex-col items-center justify-center gap-3 bg-[#0B1220]/50 rounded-2xl border border-slate-800">
                    <div className="w-8 h-8 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin"></div>
                    <span className="font-mono text-xs text-cyan-400">Loading 3D Scene...</span>
                  </div>
                }
              >
                <DigitalGlobe />
              </Suspense>

              {/* Floating Portrait Lockup with Safe Fallback */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full p-1 border-2 border-cyan-400/50 shadow-2xl bg-[#070B14]/85 backdrop-blur-sm">
                  
                  {/* Subtle orbiting border */}
                  <div className="absolute -inset-2 rounded-full border border-dashed border-cyan-400/25 animate-spin-slow"></div>

                  {!imgError ? (
                    <img
                      src={personalInfo.profileImagePath}
                      alt="Portrait photo of Yashas B Naik"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top rounded-full filter contrast-105"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#101A2B] to-[#152238] flex flex-col items-center justify-center text-center p-3">
                      <span className="font-heading font-bold text-2xl text-cyan-300">YN</span>
                      <span className="text-[10px] font-mono text-slate-300 mt-1">Yashas B Naik</span>
                    </div>
                  )}

                  {/* Verification label */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-[#101A2B] border border-cyan-400/40 text-[9px] font-mono tracking-wider text-cyan-400 uppercase whitespace-nowrap shadow-md">
                    Verified ID
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
