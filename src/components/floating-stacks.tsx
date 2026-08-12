"use client";

import { useState } from "react";

type StackChip = {
  name: string;
  detail: string;
  accent: string;
};

const CHIPS: StackChip[] = [
  { name: "Next.js", detail: "App Router web apps", accent: "text-sky-300 border-sky-400/40" },
  { name: "NestJS", detail: "Modular REST APIs", accent: "text-rose-300 border-rose-400/40" },
  { name: "TypeScript", detail: "Typed everywhere", accent: "text-blue-300 border-blue-400/40" },
  { name: "PostgreSQL", detail: "Relational data", accent: "text-indigo-300 border-indigo-400/40" },
  { name: "React", detail: "Component UI", accent: "text-cyan-300 border-cyan-400/40" },
  { name: "Tailwind CSS", detail: "Utility styling", accent: "text-teal-300 border-teal-400/40" },
  { name: "Prisma", detail: "Typed ORM", accent: "text-violet-300 border-violet-400/40" },
  { name: "Docker", detail: "Containers & dev env", accent: "text-sky-300 border-sky-400/40" },
  { name: "Redis", detail: "Caching & queues", accent: "text-red-300 border-red-400/40" },
  { name: "Python", detail: "ML & scripting", accent: "text-amber-300 border-amber-400/40" },
  { name: "Socket.IO", detail: "Real-time updates", accent: "text-emerald-300 border-emerald-400/40" },
  { name: "Framer Motion", detail: "UI animation", accent: "text-fuchsia-300 border-fuchsia-400/40" },
];

export default function FloatingStacks() {
  const [flipped, setFlipped] = useState<Set<string>>(new Set());

  const toggle = (name: string) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  return (
    <div className="mx-auto max-w-6xl px-6">
      <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
        My stack — floating in 3D · tap a chip to flip it
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {CHIPS.map((chip, index) => (
          <button
            key={chip.name}
            type="button"
            onClick={() => toggle(chip.name)}
            aria-label={`${chip.name} — ${chip.detail}`}
            className={`chip3d ${flipped.has(chip.name) ? "flipped" : ""} cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60`}
            style={{ "--dur": `${5 + (index % 4)}s`, animationDelay: `${-index * 0.7}s` } as React.CSSProperties}
          >
            <span className="chip3d-inner h-[44px] min-w-[104px]">
              {/* Front: tech name */}
              <span
                className={`chip3d-face absolute inset-0 flex items-center justify-center rounded-xl border bg-zinc-900/95 px-4 font-mono text-xs font-medium shadow-lg backdrop-blur ${chip.accent}`}
              >
                {chip.name}
              </span>
              {/* Back: what it's for */}
              <span className="chip3d-face chip3d-back absolute inset-0 flex items-center justify-center rounded-xl border border-white/20 bg-gradient-to-br from-indigo-500/20 to-violet-600/20 px-4 text-center font-mono text-[11px] text-zinc-200 shadow-lg backdrop-blur">
                {chip.detail}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
