const EDUCATION = [
  {
    period: "2022 — 2026",
    qualification: "BSc in Computer Science & Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    detail: "CGPA 3.00",
  },
  {
    period: "2019 — 2021",
    qualification: "Higher Secondary Certificate, Science",
    institution: "Ideal College, Dhanmondi",
    detail: "GPA 4.42",
  },
];

export default function Background() {
  return (
    <div className="space-y-12">
      <div>
        <p className="label">Education</p>
        <dl className="mt-5 border-t border-line">
          {EDUCATION.map((item) => (
            <div
              key={item.institution}
              className="grid gap-x-8 gap-y-2 border-b border-line py-5 sm:grid-cols-[9.5rem_1fr]"
            >
              <dt className="label pt-1 tabular-nums">{item.period}</dt>
              <dd>
                <p className="text-[15px] text-ink">{item.qualification}</p>
                <p className="mt-1 text-[13.5px] text-muted">
                  {item.institution} <span aria-hidden="true">·</span> {item.detail}
                </p>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div>
        <p className="label">How I work</p>
        <div className="mt-5 max-w-2xl space-y-4 border-t border-line pt-6">
          <p className="text-[15px] leading-relaxed text-ink">
            I&apos;m a full-stack software engineer working across the whole delivery cycle —
            requirement analysis, design, development, testing, deployment and maintenance. TypeScript
            on both ends, NestJS behind and Next.js in front, backed by PostgreSQL, is where I&apos;m
            most productive; PHP and MySQL sit in my background from earlier production work.
          </p>
          <p className="text-[15px] leading-relaxed text-muted">
            Alongside web development I build and evaluate deep learning models for time-series
            forecasting and predictive analytics, and automate operational workflows with n8n. I care
            about software that ships and stays running: clean data models, documented APIs, and
            releases that don&apos;t take the product down.
          </p>
        </div>
      </div>
    </div>
  );
}
