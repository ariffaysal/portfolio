"use client";

import { useEffect, useRef } from "react";

export default function ThreeBackground() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const loop = () => {
      cx += (tx - cx) * 0.04;
      cy += (ty - cy) * 0.04;
      el.style.setProperty("--mx", cx.toFixed(3));
      el.style.setProperty("--my", cy.toFixed(3));
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="bg3d pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-zinc-950"
    >
      {/* Deep radial base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(79,70,229,0.14),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_85%_110%,rgba(139,92,246,0.10),transparent_70%)]" />

      {/* Aurora — slow, low-opacity, professional */}
      <div
        className="bg3d-parallax aurora left-[-12%] top-[15%] h-96 w-96 bg-indigo-600/15"
        style={{ "--dur": "30s" } as React.CSSProperties}
      />
      <div
        className="bg3d-parallax aurora right-[-10%] top-[45%] h-[28rem] w-[28rem] bg-violet-600/12"
        style={{ "--dur": "36s", animationDelay: "-12s" } as React.CSSProperties}
      />
      <div
        className="bg3d-parallax aurora bottom-[-12%] left-[25%] h-80 w-80 bg-cyan-500/8"
        style={{ "--dur": "42s", animationDelay: "-22s" } as React.CSSProperties}
      />

      {/* Fine dot grid, masked to the center */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:26px_26px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />

      {/* Fade at the very top for the sticky header */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-zinc-950/80 to-transparent" />
    </div>
  );
}
