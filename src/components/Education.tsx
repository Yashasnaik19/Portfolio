import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" aria-label="Education and Coursework" className="py-20 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            02. Academic Foundation
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F4F7FB]">
            Education &amp; Coursework
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Institution Card */}
          <div className="lg:col-span-8 glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden flex flex-col justify-between border border-slate-800">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                  <GraduationCap className="w-4 h-4" aria-hidden="true" />
                  <span>{personalInfo.degree}</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Expected Graduation: {personalInfo.expectedGraduation}</span>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-[#F4F7FB]">
                  {personalInfo.college}
                </h3>
                <p className="font-mono text-sm text-cyan-300 mt-1">
                  Branch: {personalInfo.branch}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>

              {/* Coursework */}
              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <div className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-slate-300">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
                  <span>Key Engineering Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-200">
                  {personalInfo.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 rounded-lg bg-[#070B14] border border-slate-800"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-slate-800/60 text-xs text-slate-400 font-mono">
              Affiliated with Visvesvaraya Technological University (VTU) · Department of CSE
            </div>
          </div>

          {/* Academic CGPA Highlight Card */}
          <div className="lg:col-span-4 glass-panel p-6 sm:p-8 rounded-2xl flex flex-col items-center justify-center text-center relative border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-cyan-400" aria-hidden="true" />
            </div>

            <span className="font-mono text-xs uppercase tracking-widest text-slate-400">
              Cumulative GPA
            </span>
            
            <div className="font-heading text-5xl sm:text-6xl font-black text-[#F4F7FB] mt-2 tracking-tight tabular-nums">
              {personalInfo.cgpa}
              <span className="text-xl text-cyan-400 font-mono font-normal"> / 10</span>
            </div>

            <div className="mt-4 text-xs font-mono text-slate-300">
              Consistent Academic Standing
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
