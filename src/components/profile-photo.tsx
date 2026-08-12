"use client";

import Image from "next/image";
import { useRef, type PointerEvent } from "react";

const FLOAT_CHIPS = [
  { label: "Next.js", className: "-left-8 top-8", color: "border-sky-400/40 text-sky-300" },
  { label: "NestJS", className: "-right-7 top-1/4", color: "border-rose-400/40 text-rose-300" },
  { label: "TypeScript", className: "-left-6 bottom-10", color: "border-blue-400/40 text-blue-300" },
  { label: "PostgreSQL", className: "-right-8 bottom-6", color: "border-indigo-400/40 text-indigo-300" },
];

export default function ProfilePhoto() {
  const tiltRef = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateY(${(px * 14).toFixed(2)}deg) rotateX(${(-py * 12).toFixed(2)}deg)`;
  };

  const onPointerLeave = () => {
    if (tiltRef.current) tiltRef.current.style.transform = "";
  };

  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px]">
      {/* Rotating conic ring behind the photo */}
      <div
        aria-hidden="true"
        className="ring-spin absolute -inset-6 rounded-[2rem] bg-[conic-gradient(from_0deg,transparent_0deg,rgba(99,102,241,0.55)_90deg,transparent_180deg,rgba(139,92,246,0.45)_270deg,transparent_360deg)] opacity-70 blur-[2px]"
      />

      <div className="photo-scene relative" onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
        <div ref={tiltRef} className="photo-card relative transition-transform duration-200 ease-out will-change-transform">
          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/15 shadow-2xl shadow-indigo-950/60">
            <Image
              src="/profile-photo.jpg"
              alt="MD Arif Foysal — Full-Stack Developer"
              width={3024}
              height={4032}
              priority
              className="h-auto w-full object-cover"
            />
            {/* Soft professional grade: subtle bottom vignette + accent line */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent" />
          </div>

          {/* "Open to work" badge */}
          <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-zinc-900/95 px-4 py-2 text-xs font-medium text-zinc-200 shadow-lg backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to work
          </div>
        </div>
      </div>

      {/* Floating stack chips around the photo */}
      {FLOAT_CHIPS.map((chip, index) => (
        <span
          key={chip.label}
          className={`chip3d absolute ${chip.className} hidden sm:block`}
          style={{ "--dur": "5.5s", animationDelay: `${-index * 1.3}s` } as React.CSSProperties}
        >
          <span
            className={`chip3d-inner rounded-lg border bg-zinc-900/90 px-3 py-1.5 font-mono text-[11px] shadow-lg backdrop-blur ${chip.color}`}
          >
            {chip.label}
          </span>
        </span>
      ))}
    </div>
  );
}
