import Link from "next/link";
import ProfilePhoto from "./profile-photo";

const SKILL_BADGES = [
  "Next.js",
  "NestJS",
  "TypeScript",
  "Python",
  "PostgreSQL",
  "React",
  "Tailwind CSS",
  "LSTM / GRU",
];

const STATS = [
  { value: "7+", label: "Projects shipped" },
  { value: "1", label: "IEEE paper" },
  { value: "4+", label: "Years coding" },
];

function BookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 6.25c-1.8-1.4-4.2-2-7-2v14c2.8 0 5.2.6 7 2 1.8-1.4 4.2-2 7-2v-14c-2.8 0-5.2.6-7 2Z" />
      <path d="M12 6.25v14" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-20 sm:pt-28 lg:grid-cols-[1.15fr_1fr]">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <div className="flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to work
            </span>
            <a
              href="https://doi.org/10.1109/QPAIN69676.2026.11545577"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-medium text-indigo-300 transition-colors hover:border-indigo-400/60 hover:text-indigo-200"
            >
              <BookIcon className="h-3.5 w-3.5" />
              IEEE Publication
            </a>
          </div>

          <h1 className="mt-7 text-4xl font-bold leading-[1.1] tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
            MD Arif{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Foysal
            </span>
          </h1>

          <p className="mt-4 font-mono text-sm text-zinc-400 sm:text-base">
            Full-Stack Developer · NestJS + Next.js · ML &amp; AI Automation
          </p>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-zinc-400 lg:mx-0">
            I build complete products — from database schema and REST APIs to polished interfaces —
            and ship them to production. Currently working at{" "}
            <span className="text-zinc-200">Skyview Online Ltd</span> as a{" "}
            <span className="text-zinc-200">Full-Stack Software Engineer</span>, building HRMS
            tooling and optimizing NestJS backends.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              href="#projects"
              className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-7 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-950/50 transition-transform hover:scale-[1.03] sm:w-auto"
            >
              View My Projects
            </Link>
            <Link
              href="#contact"
              className="w-full rounded-full border border-white/15 px-7 py-3 text-center text-sm font-semibold text-zinc-200 transition-colors hover:border-indigo-400/50 hover:text-white sm:w-auto"
            >
              Get in Touch
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-7 lg:max-w-md">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-2xl font-bold text-zinc-50">{stat.value}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 3D photo */}
        <div className="relative">
          <ProfilePhoto />
        </div>
      </div>

      {/* Skill badges strip */}
      <div className="border-y border-white/5 bg-white/[0.02]">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-2.5 px-6 py-5">
          {SKILL_BADGES.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-zinc-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
