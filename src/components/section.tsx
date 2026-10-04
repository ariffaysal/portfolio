import type { ReactNode } from "react";

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
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <div className="grid gap-x-10 gap-y-6 md:grid-cols-[7rem_1fr]">
          <p data-reveal className="label pt-2">
            {label}
          </p>
          <div className="min-w-0">
            <h2
              data-reveal
              className="font-serif text-[28px] leading-[1.15] tracking-[-0.02em] text-ink sm:text-[34px]"
            >
              {title}
            </h2>
            {lede && (
              <p data-reveal className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
                {lede}
              </p>
            )}
            <div data-reveal className="mt-10">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
