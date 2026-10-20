import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070B14]/95 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg'
          : 'bg-transparent py-4'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-base font-heading font-bold tracking-tight text-[#F4F7FB] hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14] rounded-lg p-1"
            aria-label="Yashas B Naik Home"
          >
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-black font-bold text-xs" aria-hidden="true">
              YN
            </span>
            <span className="truncate max-w-[160px] sm:max-w-none">{personalInfo.name}</span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav
            className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wider uppercase text-slate-300"
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1 py-0.5"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={personalInfo.resumePath}
              download={personalInfo.resumeDownloadName}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all font-semibold whitespace-nowrap shrink-0 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
              aria-label="Download Yashas B Naik's resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={personalInfo.resumePath}
              download={personalInfo.resumeDownloadName}
              className="p-2 rounded-lg text-cyan-400 border border-cyan-400/30 bg-cyan-400/5 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Download Resume PDF"
            >
              <Download className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-cyan-400 border border-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-cyan-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden bg-[#0B1220]/98 backdrop-blur-xl border-b border-slate-800 px-6 pt-4 pb-6 space-y-4 animate-in fade-in"
          aria-label="Mobile Navigation Drawer"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-sm font-mono text-slate-200 hover:text-cyan-400 py-1.5 border-b border-slate-800/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href={personalInfo.resumePath}
              download={personalInfo.resumeDownloadName}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
