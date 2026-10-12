'use client';

interface AboutProps {
  isDark: boolean;
  cardBg: string;
  borderClass: string;
}

const experience = [
  'Built and maintained Java and Spring Boot microservices and REST APIs for BFSI applications.',
  'Integrated PAN, Aadhaar, Equifax, and AML services into customer-verification workflows.',
  'Secured APIs with Spring Security, JWT, and OAuth 2.0; documented endpoints with Swagger and OpenAPI.',
  'Worked on concurrent disbursement flows with Executors and CompletableFuture, plus PostgreSQL and MySQL query optimization.',
  'Contributed unit tests with JUnit and Mockito, code reviews, CI/CD releases, and production issue resolution.',
];

export default function About({ isDark, cardBg, borderClass }: AboutProps) {
  const muted = isDark ? 'text-slate-400' : 'text-slate-600';

  return (
    <section id="about" className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 font-mono text-sm uppercase tracking-[0.25em] text-blue-400">A little about me</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Engineering experience with an owner’s mindset.</h2>
          <p className={'mt-5 text-lg leading-8 ' + muted}>
            My work spans backend engineering in financial services and hands-on ownership of a small e-commerce and cloud-kitchen business. I enjoy turning operational needs into clear, dependable software.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <article className={cardBg + ' rounded-2xl border ' + borderClass + ' p-7 shadow-lg lg:col-span-2 sm:p-9'}>
            <div className={'flex flex-col justify-between gap-3 border-b pb-5 sm:flex-row sm:items-start ' + borderClass}>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-blue-400">Professional experience</p>
                <h3 className="mt-2 text-2xl font-bold">Engineer · Nagarro</h3>
                <p className={'mt-1 ' + muted}>Gurugram, India · Trainee → Associate → Engineer</p>
              </div>
              <span className={'w-fit rounded-full border px-3 py-1 text-sm ' + borderClass + ' ' + muted}>Aug 2022 – Jun 2025</span>
            </div>
            <ul className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2">
              {experience.map((item) => (
                <li key={item} className={'flex gap-3 leading-7 ' + muted}>
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className={cardBg + ' rounded-2xl border ' + borderClass + ' p-7 shadow-lg'}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400">Entrepreneurial experience</p>
            <h3 className="mt-3 text-xl font-bold">Founder · E-commerce & cloud kitchen</h3>
            <p className={'mt-1 text-sm ' + muted}>Greater Noida · Aug 2025 – Aug 2026</p>
            <p className={'mt-5 leading-7 ' + muted}>
              Led day-to-day operations across planning, team coordination, vendors, procurement, inventory, order fulfilment, customer support, and sales and cost tracking.
            </p>
          </article>

          <article className={cardBg + ' rounded-2xl border ' + borderClass + ' p-7 shadow-lg'}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">Education</p>
            <h3 className="mt-3 text-xl font-bold">B.Tech · Computer Science & Engineering</h3>
            <p className={'mt-1 ' + muted}>Future Institute of Engineering and Management · 2018–2022</p>
            <p className="mt-4 text-sm font-semibold text-emerald-400">GPA 8.73 / 10</p>
          </article>

          <article className={cardBg + ' rounded-2xl border ' + borderClass + ' p-7 shadow-lg lg:col-span-2'}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber-400">Recognition</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-semibold">Capgemini Tech Challenge</h3>
                <p className={'mt-1 text-sm ' + muted}>Finalist · 2021</p>
              </div>
              <div>
                <h3 className="font-semibold">Xplorica Tech Fest</h3>
                <p className={'mt-1 text-sm ' + muted}>1st prize for a gesture-controlled bot built with Arduino and Python · 2022</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
