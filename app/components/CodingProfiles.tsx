'use client';

import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { codingProfiles } from '@/app/data/codingProfiles';

interface CodingProfilesProps {
  isDark: boolean;
  cardBg: string;
  borderClass: string;
}

export default function CodingProfiles({ isDark, cardBg, borderClass }: CodingProfilesProps) {
  return (
    <section id="coding" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-blue-400">Practice & progress</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Coding profiles</h2>
          <p className={'mt-4 text-lg leading-8 ' + (isDark ? 'text-slate-400' : 'text-slate-600')}>
            A snapshot of my problem-solving activity. Open a profile for the latest results.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {codingProfiles.map((profile) => (
            <a
              key={profile.platform}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className={cardBg + ' group rounded-2xl border ' + borderClass + ' p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-blue-400/50'}
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl text-blue-300">{profile.icon}</span>
                <ExternalLink size={17} className="text-slate-500 transition group-hover:text-blue-400" />
              </div>
              <h3 className="mt-6 text-lg font-bold group-hover:text-blue-400">{profile.platform}</h3>
              <p className={'mt-1 text-sm ' + (isDark ? 'text-slate-500' : 'text-slate-500')}>@{profile.username}</p>
              <div className={'mt-5 flex min-h-12 items-center border-t pt-4 text-sm leading-6 ' + borderClass + ' ' + (isDark ? 'text-slate-300' : 'text-slate-700')}>
                {profile.detail}
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-400">
                View profile <ArrowUpRight size={15} />
              </span>
            </a>
          ))}
        </div>
        <p className={'mt-5 text-xs ' + (isDark ? 'text-slate-500' : 'text-slate-500')}>
          Ratings and counts are profile snapshots and may change over time.
        </p>
      </div>
    </section>
  );
}
