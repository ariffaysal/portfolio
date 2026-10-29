import type { ReactNode } from "react";
import Reveal from "./reveal";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  lede?: string;
  children: ReactNode;
};

/**
 * Editorial section frame: a monospace marker in a narrow left gutter with the
 * content flowing in a wider right column, separated by a hairline rule.
 */
export default function Section({ id, label, title, lede, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <div className="grid gap-x-10 gap-y-6 md:grid-cols-[8rem_1fr]">
          <Reveal delay={0} className="label pt-2">
            {label}
          </Reveal>
          <div className="min-w-0">
            <Reveal delay={100} className="font-serif text-[28px] leading-[1.15] tracking-[-0.02em] text-ink sm:text-[34px]">
              {title}
            </Reveal>
            {lede && (
              <Reveal delay={200} className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                {lede}
              </Reveal>
            )}
            <Reveal delay={300} className="mt-12">
              {children}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
