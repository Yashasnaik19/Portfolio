import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0B1220] border border-cyan-400/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-[#152238] border border-slate-700/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Close project details dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>{project.category}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300">{project.status}</span>
          </div>
          <h3 id="modal-project-title" className="font-heading text-2xl sm:text-3xl font-bold text-[#F4F7FB]">
            {project.title}
          </h3>
        </div>

        {/* Modal Body */}
        <div className="mt-6 space-y-5 text-slate-200 text-sm leading-relaxed">
          {project.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          {project.features && (
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <h4 className="font-heading font-semibold text-[#F4F7FB] text-sm uppercase tracking-wider">
                Key Architecture &amp; Capabilities
              </h4>
              <ul className="grid grid-cols-1 gap-2.5">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs font-mono text-slate-200">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="pt-4 border-t border-slate-800">
            <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2.5">
              Technical Stack
            </h4>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-cyan-300">
              {project.techTags.map((tech, i) => (
                <span key={tech} className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#070B14] border border-slate-800">{tech}</span>
                  {i < project.techTags.length - 1 && <span className="text-slate-600" aria-hidden="true">/</span>}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-slate-800 flex flex-wrap items-center gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all font-semibold shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
              aria-label={`Open live platform for ${project.title} in new tab`}
            >
              <span>Explore Live Platform</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider text-slate-200 bg-[#101A2B] border border-slate-700/60 hover:border-cyan-400/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
              aria-label={`View verified repository for ${project.title} on GitHub in new tab`}
            >
              <Github className="w-4 h-4" />
              <span>Verified Repository</span>
            </a>
          )}
          <button
            onClick={onClose}
            className="ml-auto px-4 py-2.5 rounded-xl font-mono text-xs text-slate-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
