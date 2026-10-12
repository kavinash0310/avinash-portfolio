'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

interface ContactProps {
  isDark: boolean;
  cardBg: string;
  borderClass: string;
  formData: { name: string; email: string; message: string };
  onFormChange: (field: string, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting?: boolean;
}

export default function Contact({
  isDark,
  cardBg,
  borderClass,
  formData,
  onFormChange,
  onSubmit,
  isSubmitting = false,
}: ContactProps) {
  const muted = isDark ? 'text-slate-400' : 'text-slate-600';

  return (
    <section id="contact" className={'px-4 py-24 sm:px-6 ' + (isDark ? 'bg-slate-900/50' : 'bg-slate-100')}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-blue-400">Get in touch</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Let’s talk about what you’re building.</h2>
          <p className={'mt-4 text-lg leading-8 ' + muted}>
            For backend, full-stack, and product engineering opportunities, feel free to reach out.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <a href="mailto:avi.kr1710@gmail.com" className={cardBg + ' flex items-center gap-4 rounded-2xl border ' + borderClass + ' p-5 transition hover:-translate-y-0.5'}>
              <span className="rounded-xl bg-blue-500/10 p-3 text-blue-400"><Mail size={22} /></span>
              <span>
                <span className={'block text-sm ' + muted}>Email</span>
                <span className="mt-1 block font-semibold">avi.kr1710@gmail.com</span>
              </span>
            </a>
            <a href="https://github.com/kavinash0310" target="_blank" rel="noopener noreferrer" className={cardBg + ' flex items-center gap-4 rounded-2xl border ' + borderClass + ' p-5 transition hover:-translate-y-0.5'}>
              <span className="rounded-xl bg-violet-500/10 p-3 text-violet-400"><Github size={22} /></span>
              <span>
                <span className={'block text-sm ' + muted}>GitHub</span>
                <span className="mt-1 block font-semibold">github.com/kavinash0310</span>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/kavinash0310/" target="_blank" rel="noopener noreferrer" className={cardBg + ' flex items-center gap-4 rounded-2xl border ' + borderClass + ' p-5 transition hover:-translate-y-0.5'}>
              <span className="rounded-xl bg-sky-500/10 p-3 text-sky-400"><Linkedin size={22} /></span>
              <span>
                <span className={'block text-sm ' + muted}>LinkedIn</span>
                <span className="mt-1 block font-semibold">linkedin.com/in/kavinash0310</span>
              </span>
            </a>
          </div>

          <div className={cardBg + ' rounded-2xl border ' + borderClass + ' p-6 shadow-xl sm:p-8'}>
            <h3 className="text-xl font-bold">Send a message</h3>
            <p className={'mt-2 text-sm ' + muted}>I’ll get back to you as soon as I can.</p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <label className="block">
                <span className="sr-only">Your name</span>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={(e) => onFormChange('name', e.target.value)}
                  className={'w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-400 ' + (isDark ? 'border-slate-700 bg-slate-950 text-white placeholder:text-slate-500' : 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-500')}
                />
              </label>
              <label className="block">
                <span className="sr-only">Your email</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Your email"
                  required
                  maxLength={254}
                  value={formData.email}
                  onChange={(e) => onFormChange('email', e.target.value)}
                  className={'w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-400 ' + (isDark ? 'border-slate-700 bg-slate-950 text-white placeholder:text-slate-500' : 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-500')}
                />
              </label>
              <label className="block">
                <span className="sr-only">Your message</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="What would you like to discuss?"
                  required
                  maxLength={5000}
                  value={formData.message}
                  onChange={(e) => onFormChange('message', e.target.value)}
                  className={'w-full resize-y rounded-xl border px-4 py-3 outline-none transition focus:border-blue-400 ' + (isDark ? 'border-slate-700 bg-slate-950 text-white placeholder:text-slate-500' : 'border-slate-300 bg-white text-slate-900 placeholder:text-slate-500')}
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Sending…' : 'Send message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
