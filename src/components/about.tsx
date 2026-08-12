const FACTS = [
  {
    title: "Full-stack, end-to-end",
    body: "I own the whole journey — schema, API orchestration, UI, and deployment — so features ship as complete products, not half-built pieces.",
  },
  {
    title: "Production experience",
    body: "Projects live on Vercel with managed Postgres and Redis, including a game top-up marketplace, e-commerce storefront, and job board.",
  },
  {
    title: "ML & AI automation",
    body: "Built time-series forecasting models (GRU, LSTM, Bi-LSTM), co-authored an IEEE paper, and automated workflows with n8n AI agents.",
  },
  {
    title: "Detail-oriented",
    body: "CSV parsing with auto-detection, real-time device events, role-based permissions, and security checklists before every launch.",
  },
];

export default function About() {
  return (
    <div className="grid gap-10 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <p className="text-base leading-relaxed text-zinc-300">
          I&apos;m a full-stack developer from Bangladesh who enjoys complex web development, API
          orchestration, and AI automation. My day-to-day stack is{" "}
          <span className="text-zinc-100">TypeScript</span> on both ends —{" "}
          <span className="text-zinc-100">NestJS</span> for robust, modular APIs and{" "}
          <span className="text-zinc-100">Next.js</span> for fast, modern interfaces — backed by{" "}
          <span className="text-zinc-100">PostgreSQL</span>.
        </p>
        <p className="mt-4 text-base leading-relaxed text-zinc-400">
          Beyond web development, I work with machine learning — forecasting financial time series
          with deep learning models and building interpretable, explainable ML systems. I&apos;m
          committed to solving real-world problems through efficient software engineering and
          automated solutions.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["SaaS", "E-Commerce", "HR Systems", "ML & AI", "API Orchestration", "Automation"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-400"
              >
                {tag}
              </span>
            )
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
        {FACTS.map((fact) => (
          <div
            key={fact.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-indigo-400/40"
          >
            <h3 className="text-sm font-semibold text-zinc-100">{fact.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{fact.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
