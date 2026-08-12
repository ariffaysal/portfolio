import Reveal from "./reveal";

const EDUCATION = [
  {
    degree: "BSc in Computer Science & Engineering",
    school: "American International University-Bangladesh (AIUB)",
    period: "2022 — 2026",
    detail: "CGPA: 3.00",
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    school: "Ideal College, Dhanmondi",
    period: "2019 — 2021",
    detail: "GPA: 4.42",
  },
];

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
      <path d="M22 10v6" />
    </svg>
  );
}

export default function Education() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {EDUCATION.map((item, index) => (
        <Reveal key={item.school} delay={index * 100}>
          <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40">
            <div className="flex items-start justify-between gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-600/20 text-indigo-300">
                <GraduationCapIcon className="h-5 w-5" />
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] text-zinc-400">
                {item.period}
              </span>
            </div>
            <h3 className="mt-4 text-sm font-semibold text-zinc-100">{item.degree}</h3>
            <p className="mt-1 text-sm text-indigo-300">{item.school}</p>
            <p className="mt-2 font-mono text-xs text-zinc-500">{item.detail}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
