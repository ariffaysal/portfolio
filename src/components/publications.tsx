import { ArrowUpRight } from "./icons";
import { DOI, DOI_URL, NAME } from "@/lib/contact";

const PAPER = {
  title:
    "A Comparative Study of GRU, LSTM, and Bi-LSTM for Financial Time Series Forecasting: Apple Stock and Bitcoin",
  authors: `${NAME} and co-authors`,
  venue: "IEEE Conference Proceedings (QPAIN), 2026",
  points: [
    "Comparative analysis of GRU, LSTM and Bi-LSTM architectures for financial time-series forecasting.",
    "Evaluated prediction accuracy and performance across models on Apple stock and Bitcoin datasets.",
  ],
};

export default function Publications() {
  return (
    <div className="space-y-10">
      <div className="border-t border-line pt-8">
        <p className="label">Peer-reviewed publication</p>

        <h3 className="mt-4 max-w-3xl font-serif text-[21px] leading-snug tracking-[-0.01em] text-ink sm:text-[23px]">
          {PAPER.title}
        </h3>

        <p className="mt-3 text-[13.5px] text-muted">
          {PAPER.authors} <span aria-hidden="true">·</span> {PAPER.venue}
        </p>

        <ul className="mt-5 max-w-2xl space-y-1.5">
          {PAPER.points.map((point) => (
            <li
              key={point}
              className="relative pl-4 text-[14px] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-line"
            >
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href={DOI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-accent transition-opacity hover:opacity-75"
          >
            Read on IEEE Xplore
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <p className="font-mono text-[11px] tracking-wide text-muted">DOI {DOI}</p>
        </div>
      </div>

      <div className="border-t border-line pt-8">
        <p className="label">Research project</p>
        <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-serif text-[20px] leading-snug tracking-[-0.01em] text-ink">
            ML-Based Software Failure Risk Prediction
          </h3>
          <p className="text-[13.5px] text-muted">AIUB · 2026</p>
        </div>
        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted">
          An ML framework for predicting software defects early on the NASA JM1 dataset, using SMOTE
          for class imbalance and SHAP/LIME for interpretability, with a probability-based risk
          classification for ranking modules by failure risk.
        </p>
      </div>
    </div>
  );
}
