import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Send, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  // Interactive client contact form with validation
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!senderName.trim() || senderName.trim().length < 2) {
      errs.name = 'Please provide your name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!senderEmail.trim() || !emailRegex.test(senderEmail.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!subject.trim() || subject.trim().length < 3) {
      errs.subject = 'Please enter a subject (at least 3 characters).';
    }
    if (!message.trim() || message.trim().length < 10) {
      errs.message = 'Please write a message of at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio] ${subject.trim()}`
    )}&body=${encodeURIComponent(
      `From: ${senderName.trim()} <${senderEmail.trim()}>\n\nMessage:\n${message.trim()}\n\n---\nSent via Yashas B Naik Developer Portfolio`
    )}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" aria-label="Contact and Collaboration" className="py-20 sm:py-24 relative z-10 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            06. Direct Channels
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#F4F7FB]">
            Contact &amp; Collaboration
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-mono">
            Open for software development internships, cybersecurity research, and hackathon partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Email Address</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-mono text-[#F4F7FB] hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1"
                    aria-label={`Send email to ${personalInfo.email}`}
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-[#152238] border border-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Direct Voice / WhatsApp</p>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-mono text-[#F4F7FB] hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1"
                    aria-label={`Call ${personalInfo.phoneDisplay}`}
                  >
                    {personalInfo.phoneDisplay}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-[#152238] border border-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-purple-400" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Location</p>
                <p className="text-sm font-mono text-[#F4F7FB]">{personalInfo.location}</p>
              </div>
            </div>

            {/* Social Network Buttons with secure rel */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-200 hover:text-cyan-400 border border-slate-800 hover:border-cyan-400/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Open Yashas Naik's GitHub profile in new tab"
              >
                <Github className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-4 rounded-xl flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-200 hover:text-blue-400 border border-slate-800 hover:border-blue-400/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                aria-label="Open Yashas Naik's LinkedIn profile in new tab"
              >
                <Linkedin className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

          </div>

          {/* Validated Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleFormSubmit}
              noValidate
              className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border border-slate-800"
              aria-label="Direct message transmission form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-mono text-slate-300 uppercase tracking-wider flex justify-between">
                    <span>Your Name *</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => {
                      setSenderName(e.target.value);
                      if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
                    }}
                    placeholder="Enter your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#070B14] border ${
                      errors.name ? 'border-red-500 focus:border-red-400' : 'border-slate-800 focus:border-cyan-400'
                    } focus:outline-none text-[#F4F7FB] font-mono text-xs`}
                  />
                  {errors.name && (
                    <p id="name-error" className="text-xs text-red-400 font-mono flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-mono text-slate-300 uppercase tracking-wider flex justify-between">
                    <span>Your Email *</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => {
                      setSenderEmail(e.target.value);
                      if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                    }}
                    placeholder="name@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full px-4 py-2.5 rounded-xl bg-[#070B14] border ${
                      errors.email ? 'border-red-500 focus:border-red-400' : 'border-slate-800 focus:border-cyan-400'
                    } focus:outline-none text-[#F4F7FB] font-mono text-xs`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-xs text-red-400 font-mono flex items-center gap-1" role="alert">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-mono text-slate-300 uppercase tracking-wider flex justify-between">
                  <span>Subject *</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                    if (errors.subject) setErrors(prev => ({ ...prev, subject: '' }));
                  }}
                  placeholder="Internship opportunity / CTF collaboration"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#070B14] border ${
                    errors.subject ? 'border-red-500 focus:border-red-400' : 'border-slate-800 focus:border-cyan-400'
                  } focus:outline-none text-[#F4F7FB] font-mono text-xs`}
                />
                {errors.subject && (
                  <p id="subject-error" className="text-xs text-red-400 font-mono flex items-center gap-1" role="alert">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-mono text-slate-300 uppercase tracking-wider flex justify-between">
                  <span>Message *</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors(prev => ({ ...prev, message: '' }));
                  }}
                  placeholder="Describe your inquiry, internship proposal, or project details..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`w-full px-4 py-2.5 rounded-xl bg-[#070B14] border ${
                    errors.message ? 'border-red-500 focus:border-red-400' : 'border-slate-800 focus:border-cyan-400'
                  } focus:outline-none text-[#F4F7FB] font-mono text-xs resize-none`}
                />
                {errors.message && (
                  <p id="message-error" className="text-xs text-red-400 font-mono flex items-center gap-1" role="alert">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                <p className="text-[11px] font-mono text-slate-300" role="status">
                  {submitted ? (
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      Opening email client with pre-filled message...
                    </span>
                  ) : (
                    'Dispatches directly to yashasbabunaik19@gmail.com'
                  )}
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all font-semibold shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070B14]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
