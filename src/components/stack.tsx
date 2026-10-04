import { Fragment } from "react";

const GROUPS: { term: string; items: string[] }[] = [
  {
    term: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "PHP", "C++", "C#", "SQL"],
  },
  {
    term: "Frontend",
    items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI"],
  },
  {
    term: "Backend",
    items: [
      "NestJS",
      "Node.js",
      "REST API design & documentation",
      "Role-based access control",
      "Server-side architecture",
    ],
  },
  {
    term: "Data",
    items: [
      "PostgreSQL",
      "MySQL",
      "TypeORM",
      "Relational schema design",
      "Query optimisation",
    ],
  },
  {
    term: "Machine learning",
    items: [
      "LSTM",
      "GRU",
      "Bi-LSTM",
      "Time-series forecasting",
      "SMOTE",
      "SHAP / LIME",
      "Logistic Regression",
      "Random Forest",
      "XGBoost",
      "n8n",
    ],
  },
  {
    term: "Tooling",
    items: ["Git", "GitHub", "Docker", "Postman", "FileZilla (FTP/SFTP)", "CI/CD", "Trello"],
  },
];

export default function Stack() {
  return (
    <dl className="border-t border-line">
      {GROUPS.map((group) => (
        <div
          key={group.term}
          className="grid gap-x-8 gap-y-2.5 border-b border-line py-5 sm:grid-cols-[9.5rem_1fr]"
        >
          <dt className="label pt-1">{group.term}</dt>
          <dd className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[14px] text-ink">
            {group.items.map((item, index) => (
              <Fragment key={item}>
                {index > 0 && (
                  <span aria-hidden="true" className="text-line">
                    ·
                  </span>
                )}
                <span>{item}</span>
              </Fragment>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  );
}
