import Reveal from "./reveal";
import TiltCard from "./tilt-card";

type StackGroup = {
  title: string;
  monogram: string;
  accent: string;
  items: string[];
};

const STACK_GROUPS: StackGroup[] = [
  {
    title: "Frontend",
    monogram: "F",
    accent: "from-sky-500/25 to-blue-600/25 text-sky-300",
    items: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "TanStack Query", "Zod"],
  },
  {
    title: "Backend",
    monogram: "B",
    accent: "from-rose-500/25 to-red-600/25 text-rose-300",
    items: ["NestJS", "Node.js", "TypeORM", "REST APIs", "JWT Auth", "Socket.IO", "BullMQ"],
  },
  {
    title: "Languages",
    monogram: "L",
    accent: "from-amber-500/25 to-orange-600/25 text-amber-300",
    items: ["TypeScript", "JavaScript", "Python", "C++", "C#"],
  },
  {
    title: "Database & Cache",
    monogram: "D",
    accent: "from-emerald-500/25 to-teal-600/25 text-emerald-300",
    items: ["PostgreSQL", "MySQL", "Prisma", "Redis", "Schema Design", "Migrations"],
  },
  {
    title: "Machine Learning & AI",
    monogram: "M",
    accent: "from-violet-500/25 to-purple-600/25 text-violet-300",
    items: ["LSTM", "GRU", "Bi-LSTM", "Data Analysis", "Explainable AI (SHAP/LIME)", "n8n AI Agents"],
  },
  {
    title: "DevOps & Tools",
    monogram: "T",
    accent: "from-fuchsia-500/25 to-pink-600/25 text-fuchsia-300",
    items: ["Docker", "Vercel", "GitHub Actions (CI/CD)", "n8n", "Postman", "Agile (Trello)", "Git"],
  },
];

export default function Stack() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {STACK_GROUPS.map((group, index) => (
        <Reveal key={group.title} delay={(index % 3) * 80}>
          <TiltCard max={7} className="h-full">
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-indigo-400/40">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-sm font-bold ${group.accent}`}
              >
                {group.monogram}
              </div>
              <h3 className="mt-4 text-sm font-semibold text-zinc-100">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 bg-zinc-900 px-2 py-1 text-xs text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>
        </Reveal>
      ))}
    </div>
  );
}
