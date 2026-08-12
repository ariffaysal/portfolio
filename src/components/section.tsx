import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-indigo-400">
          <span className="h-px w-8 bg-indigo-400/50" />
          {eyebrow}
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">{subtitle}</p>}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
