'use client';

import { ArrowUpRight, BookOpen, Code2, Github, LayoutDashboard, ShoppingBag } from 'lucide-react';
import { projects } from '@/app/data/projects';

interface ProjectsProps {
  isDark: boolean;
  cardBg: string;
  borderClass: string;
}

const visuals: Record<string, { icon: typeof Code2; label: string; background: string }> = {
  management: { icon: LayoutDashboard, label: 'OPERATIONS PLATFORM', background: 'from-sky-500/20 via-slate-900 to-indigo-950' },
  storefront: { icon: ShoppingBag, label: 'STOREFRONT CONCEPT', background: 'from-amber-500/20 via-stone-900 to-rose-950' },
  learning: { icon: BookOpen, label: 'LEARNING RESOURCE', background: 'from-violet-500/20 via-slate-900 to-blue-950' },
  portfolio: { icon: Code2, label: 'PERSONAL WEBSITE', background: 'from-blue-500/20 via-slate-900 to-fuchsia-950' },
};

export default function Projects({ isDark, cardBg, borderClass }: ProjectsProps) {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-blue-400">Selected work</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Projects built around real workflows.</h2>
          <p className={'mt-4 text-lg leading-8 ' + (isDark ? 'text-slate-400' : 'text-slate-600')}>
            A mix of backend systems, product interfaces, and practical learning resources. Each card links to the code or a live preview where one is available.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const visual = visuals[project.category] || visuals.portfolio;
            const Icon = visual.icon;

            return (
              <article key={project.title} className={cardBg + ' group overflow-hidden rounded-2xl border ' + borderClass + ' shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl'}>
                <div className={'relative flex h-56 items-end overflow-hidden bg-gradient-to-br p-6 ' + visual.background}>
                  <div className="absolute -right-12 -top-16 h-56 w-56 rounded-full border border-white/10" />
                  <div className="absolute -right-4 -top-8 h-40 w-40 rounded-full border border-white/10" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.12),transparent_55%)]" />
                  <div className="relative w-full rounded-xl border border-white/10 bg-slate-950/55 p-5 shadow-xl backdrop-blur">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold tracking-[0.22em] text-slate-300">{visual.label}</span>
                      <Icon size={22} className="text-white/80" />
                    </div>
                    <div className="mt-5 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-xl font-semibold text-white">{project.title}</p>
                        <p className="mt-1 text-sm text-slate-300">{project.subtitle}</p>
                      </div>
                      <div className="hidden h-9 w-20 items-end gap-1 sm:flex" aria-hidden="true">
                        <span className="h-4 flex-1 rounded-t bg-blue-300/60" />
                        <span className="h-7 flex-1 rounded-t bg-violet-300/70" />
                        <span className="h-5 flex-1 rounded-t bg-fuchsia-300/60" />
                        <span className="h-9 flex-1 rounded-t bg-sky-300/70" />
                      </div>
                    </div>
                  </div>
                  {project.status && (
                    <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-slate-950/60 px-3 py-1 text-xs text-white backdrop-blur">{project.status}</span>
                  )}
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold transition-colors group-hover:text-blue-400">{project.title}</h3>
                  <p className={'mt-3 min-h-20 leading-7 ' + (isDark ? 'text-slate-400' : 'text-slate-600')}>{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className={'rounded-full border px-3 py-1 text-xs ' + (isDark ? 'border-blue-400/20 bg-blue-400/10 text-blue-200' : 'border-blue-200 bg-blue-50 text-blue-700')}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className={"mt-6 flex flex-wrap gap-3 border-t pt-5 " + borderClass}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={'Source code for ' + project.title} className="inline-flex items-center gap-2 rounded-lg bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20">
                      <Github size={16} /> Source code <ArrowUpRight size={15} />
                    </a>
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={'Live preview of ' + project.title} className={'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ' + (isDark ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100')}>
                        Live preview <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
