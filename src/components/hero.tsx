import Image from "next/image";
import { DocumentIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, LOCATION, RESUME_URL } from "@/lib/contact";

const FACTS = [
  { term: "Currently", detail: "Software Engineer, Skyview Online Ltd" },
  { term: "Published", detail: "IEEE QPAIN 2026 · GRU/LSTM/Bi-LSTM forecasting" },
  { term: "Education", detail: "BSc Computer Science & Engineering, AIUB" },
];

export default function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto max-w-5xl px-6 pb-14 pt-14 sm:pb-16 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-[1fr_15rem] md:gap-14">
          <div className="min-w-0">
            <p className="label flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="inline-flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Available for full-time roles
              </span>
              <span aria-hidden="true" className="text-line">
                /
              </span>
              <span>{LOCATION}</span>
            </p>

            <h1 className="mt-6 max-w-[38rem] font-serif text-[36px] leading-[1.07] tracking-[-0.025em] text-ink sm:text-[50px]">
              Full-stack engineer shipping production systems and applied machine learning.
            </h1>

            <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-muted">
              I work across the whole stack — PostgreSQL schemas and NestJS APIs through to the
              Next.js interface — and I keep what I build running in production. Today that is an
              HRMS at Skyview Online Ltd; alongside it sits an IEEE publication on deep learning for
              financial forecasting.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-[13px] font-medium text-paper transition-opacity hover:opacity-85"
              >
                <MailIcon className="h-4 w-4" />
                Get in touch
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-surface"
              >
                <DocumentIcon className="h-4 w-4" />
                Résumé
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-surface"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-[13px] font-medium text-ink transition-colors hover:bg-surface"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>

          <figure className="min-w-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-surface">
              <Image
                src="/profile-photo.jpg"
                alt="MD Arif Foysal presenting his IEEE publication at the QPAIN 2026 conference"
                fill
                priority
                sizes="(min-width: 768px) 15rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 font-mono text-[11px] leading-relaxed text-muted">
              Presenting the QPAIN 2026 paper, IEEE Conference Proceedings.
            </figcaption>
          </figure>
        </div>

        <dl className="mt-14 grid gap-x-10 gap-y-6 border-t border-line pt-7 sm:grid-cols-3">
          {FACTS.map((fact) => (
            <div key={fact.term}>
              <dt className="label">{fact.term}</dt>
              <dd className="mt-2 text-[14px] leading-snug text-ink">{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
