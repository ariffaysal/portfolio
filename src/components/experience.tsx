import Reveal from "./reveal";

type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  location?: string;
  note?: string;
  points: string[];
  current?: boolean;
};

const EXPERIENCE: ExperienceItem[] = [
  {
    period: "Feb 2026 — Present",
    role: "Full-Stack Software Engineer",
    org: "Skyview Online Ltd",
    location: "Dhaka, Bangladesh",
    note: "Joined as a Software Engineer Intern in Feb 2026 — promoted to Full-Stack Software Engineer in May 2026.",
    current: true,
    points: [
      "Developing an HR Management System (HRMS) to automate employee records, attendance tracking, and payroll processing.",
      "Implemented role-based access control (RBAC) for secure multi-user management and data integrity.",
      "Optimized backend performance by refining API response logic and complex database queries in NestJS.",
      "Collaborated on the architecture of scalable backend systems using PostgreSQL and TypeORM.",
    ],
  },
  {
    period: "2026",
    role: "Research Co-Author",
    org: "ML-Based Software Failure Risk Prediction — AIUB",
    points: [
      "Proposed an ML framework using the NASA JM1 dataset for early software defect prediction.",
      "Compared Logistic Regression, Random Forest, and XGBoost; used SMOTE for class imbalance.",
      "Integrated SHAP/LIME for interpretability (Explainable AI) and a probability-based risk classification.",
    ],
  },
  {
    period: "2025",
    role: "Full-Stack Developer",
    org: "WhatsApp Notice Management System",
    points: [
      "Built a centralized system to manage and distribute notices across multiple WhatsApp groups via browser integration.",
      "Developed automated message broadcasting and real-time group synchronization.",
      "Designed and documented REST APIs while optimizing relational database structures for high message volume.",
    ],
  },
  {
    period: "2024",
    role: "Full-Stack Developer",
    org: "Attendance Intelligence System",
    points: [
      "Engineered a parsing tool that converts raw attendance logs into structured, actionable datasets.",
      "Generated automated reports for workforce tracking, salary timing, and organizational efficiency analysis.",
    ],
  },
  {
    period: "2024",
    role: "Machine Learning Project",
    org: "ML-Based Crypto & Stock Prediction",
    points: [
      "Built time-series forecasting models for market trends using GRU, LSTM, and Bi-LSTM architectures.",
      "Cleaned and analyzed financial datasets to improve prediction accuracy and identify historical patterns.",
    ],
  },
];

export default function Experience() {
  return (
    <ol className="relative space-y-8 border-l border-white/10 pl-8">
      {EXPERIENCE.map((item, index) => (
        <li key={`${item.role}-${item.org}`} className="relative">
          {/* Timeline dot */}
          <span
            className={`absolute -left-[37px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border ${
              item.current
                ? "border-emerald-400/60 bg-emerald-500/30"
                : "border-indigo-400/40 bg-indigo-500/20"
            }`}
          >
            {item.current && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
            )}
          </span>

          <Reveal delay={(index % 3) * 70}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-indigo-400/40">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="text-sm font-semibold text-zinc-100">{item.role}</h3>
                <span className="text-sm text-zinc-500">·</span>
                <span className="text-sm text-indigo-300">{item.org}</span>
                {item.current && (
                  <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                    Current
                  </span>
                )}
              </div>
              <p className="mt-1 font-mono text-xs text-zinc-500">
                {item.period}
                {item.location ? ` · ${item.location}` : ""}
              </p>
              {item.note && (
                <p className="mt-2 text-xs leading-relaxed text-emerald-300/90">{item.note}</p>
              )}
              <ul className="mt-3 space-y-1.5">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-zinc-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
