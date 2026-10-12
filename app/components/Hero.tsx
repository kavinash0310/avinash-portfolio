'use client';

import Image from 'next/image';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
  cardBg: string;
  borderClass: string;
  onSectionClick: (section: string) => void;
}

export default function Hero({ isDark, cardBg, borderClass, onSectionClick }: HeroProps) {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <div className={"mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm " + (isDark ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300" : "border-emerald-600/20 bg-emerald-50 text-emerald-700")}>
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to Java backend and full-stack roles
          </div>

          <p className={"mb-3 font-mono text-sm uppercase tracking-[0.25em] " + (isDark ? "text-blue-300" : "text-blue-700")}>
            Java · Spring Boot · Microservices
          </p>
          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl xl:text-7xl">
            Avinash Kumar
            <span className="mt-3 block bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 bg-clip-text text-3xl text-transparent sm:text-4xl xl:text-5xl">
              Backend engineer building useful products.
            </span>
          </h1>
          <p className={"mt-6 max-w-2xl text-lg leading-8 " + (isDark ? "text-slate-300" : "text-slate-600")}>
            I bring three years of Java and Spring Boot experience from BFSI engineering at Nagarro, with hands-on work in APIs, security, service integrations, databases, and asynchronous processing.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => onSectionClick('projects')}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:shadow-blue-500/25"
            >
              Explore projects <ArrowDown size={18} />
            </button>
            <a
              href="/Avinash_Kumar.pdf"
              download="Avinash_Kumar.pdf"
              className={"inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 font-semibold transition hover:-translate-y-0.5 " + (isDark ? "border-slate-700 bg-slate-900/50 hover:border-slate-500" : "border-slate-300 bg-white hover:border-slate-400")}
            >
              <Download size={18} /> Download resume
            </a>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <a href="https://github.com/kavinash0310" target="_blank" rel="noopener noreferrer" aria-label="Avinash Kumar on GitHub" className={"rounded-lg p-2 transition " + (isDark ? "text-slate-300 hover:bg-slate-800 hover:text-white" : "text-slate-600 hover:bg-slate-200 hover:text-slate-950")}>
              <Github size={21} />
            </a>
            <a href="https://www.linkedin.com/in/kavinash0310/" target="_blank" rel="noopener noreferrer" aria-label="Avinash Kumar on LinkedIn" className={"rounded-lg p-2 transition " + (isDark ? "text-slate-300 hover:bg-slate-800 hover:text-white" : "text-slate-600 hover:bg-slate-200 hover:text-slate-950")}>
              <Linkedin size={21} />
            </a>
            <a href="https://codolio.com/profile/kavinash" target="_blank" rel="noopener noreferrer" className={"inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm transition " + (isDark ? "text-slate-300 hover:bg-slate-800 hover:text-white" : "text-slate-600 hover:bg-slate-200 hover:text-slate-950")}>
              Coding profiles <ArrowUpRight size={15} />
            </a>
          </div>


        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-500/30 via-violet-500/20 to-fuchsia-500/30 blur-xl" />
          <div className={"relative overflow-hidden rounded-[1.75rem] border p-2 shadow-2xl " + borderClass + " " + (isDark ? "bg-slate-900" : "bg-white")}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] bg-slate-200">
              <Image
                src="/profile.jpg"
                alt="Portrait of Avinash Kumar"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
