import Reveal from "./reveal";

function BookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 6.25c-1.8-1.4-4.2-2-7-2v14c2.8 0 5.2.6 7 2 1.8-1.4 4.2-2 7-2v-14c-2.8 0-5.2.6-7 2Z" />
      <path d="M12 6.25v14" />
    </svg>
  );
}

function FlaskIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M9 3h6M10 3v5.5L4.6 18a2 2 0 0 0 1.8 3h11.2a2 2 0 0 0 1.8-3L14 8.5V3" />
      <path d="M7.5 14h9" />
    </svg>
  );
}

const PAPER = {
  title:
    "A Comparative Study of GRU, LSTM, and Bi-LSTM for Financial Time Series Forecasting: Apple Stock and Bitcoin",
  venue: "IEEE Conference Proceedings (QPAIN), 2026",
  role: "Co-Author",
  doi: "10.1109/QPAIN69676.2026.11545577",
  doiUrl: "https://doi.org/10.1109/QPAIN69676.2026.11545577",
  points: [
    "Conducted a comparative analysis of GRU, LSTM, and Bi-LSTM architectures for financial forecasting using Apple stock and Bitcoin datasets.",
    "Evaluated prediction accuracy and performance across deep learning models for time-series forecasting.",
    "Published in IEEE Conference Proceedings.",
  ],
};

export default function Publications() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* IEEE Paper — hero card */}
      <Reveal className="lg:col-span-2">
        <div className="relative h-full overflow-hidden rounded-2xl border border-indigo-400/25 bg-gradient-to-br from-indigo-500/[0.08] via-white/[0.03] to-fuchsia-500/[0.06] p-6">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-400/40 bg-indigo-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-indigo-300">
              <BookIcon className="h-3 w-3" />
              Published Paper
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-zinc-400">
              IEEE · 2026
            </span>
          </div>

          <h3 className="mt-4 text-lg font-semibold leading-snug text-zinc-50">{PAPER.title}</h3>
          <p className="mt-2 text-sm text-zinc-400">
            {PAPER.venue} · {PAPER.role}
          </p>

          <ul className="mt-4 space-y-1.5">
            {PAPER.points.map((point) => (
              <li key={point} className="flex items-start gap-2 text-sm text-zinc-400">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
            <a
              href={PAPER.doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-[1.03]"
            >
              Read on IEEE Xplore
            </a>
            <code className="font-mono text-[11px] text-zinc-500">DOI: {PAPER.doi}</code>
          </div>
        </div>
      </Reveal>

      {/* Research experience card */}
      <Reveal delay={120}>
        <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-indigo-400/40">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 text-violet-300">
            <FlaskIcon className="h-5 w-5" />
          </span>
          <h3 className="mt-4 text-sm font-semibold text-zinc-100">Research Experience</h3>
          <p className="mt-1 text-xs text-zinc-500">AIUB · 2026</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Co-authored an ML framework for software failure risk prediction (NASA JM1 dataset),
            comparing Logistic Regression, Random Forest, and XGBoost with SMOTE balancing and
            SHAP/LIME explainability.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
