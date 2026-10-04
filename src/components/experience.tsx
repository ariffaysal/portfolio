type Role = {
  period: string;
  role: string;
  org: string;
  location?: string;
  note?: string;
  points: string[];
  current?: boolean;
};

const ROLES: Role[] = [
  {
    period: "Feb 2026 — Present",
    role: "Software Engineer",
    org: "Skyview Online Ltd",
    location: "Dhaka, Bangladesh",
    note: "Joined as an intern in Feb 2026 and moved into a full-time engineering role in May 2026.",
    current: true,
    points: [
      "Building an HR Management System that automates employee records, attendance tracking and payroll end-to-end.",
      "Implemented role-based access control across the platform to enforce secure multi-user management and data integrity.",
      "Optimised REST API response logic and complex PostgreSQL queries within a NestJS architecture.",
      "Design and maintain a scalable backend on PostgreSQL and TypeORM, focused on data consistency and query efficiency.",
      "Run production releases over FTP/SFTP with minimal downtime, and track work in Agile sprints.",
    ],
  },
  {
    period: "2026",
    role: "Research Co-Author",
    org: "American International University-Bangladesh",
    points: [
      "Proposed an ML framework for early software defect prediction on the NASA JM1 dataset.",
      "Compared Logistic Regression, Random Forest and XGBoost classifiers, handling class imbalance with SMOTE.",
    ],
  },
];

export default function Experience() {
  return (
    <ol className="border-t border-line">
      {ROLES.map((item) => (
        <li
          key={`${item.role}-${item.org}`}
          className="grid gap-x-8 gap-y-3 border-b border-line py-8 sm:grid-cols-[9.5rem_1fr]"
        >
          <p className="label pt-1.5 tabular-nums">{item.period}</p>

          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-serif text-[20px] leading-snug tracking-[-0.01em] text-ink">
                {item.role}
              </h3>
              <p className="text-[14px] text-ink">{item.org}</p>
              {item.current && (
                <span className="rounded-full border border-accent/30 bg-accent/8 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent">
                  Current
                </span>
              )}
            </div>

            {item.location && (
              <p className="mt-1 font-mono text-[11px] tracking-wide text-muted">{item.location}</p>
            )}

            {item.note && (
              <p className="mt-3 text-[13.5px] leading-relaxed text-muted italic">{item.note}</p>
            )}

            <ul className="mt-4 space-y-1.5">
              {item.points.map((point) => (
                <li
                  key={point}
                  className="relative pl-4 text-[14px] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-line"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
