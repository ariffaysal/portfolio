"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  /** Max tilt angle in degrees */
  max?: number;
};

export default function TiltCard({ children, className = "", max = 9 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(950px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(
      px * max
    ).toFixed(2)}deg) translateY(-3px)`;
    el.style.setProperty("--tilt-x", `${(px * 12).toFixed(1)}px`);
    el.style.setProperty("--tilt-y", `${(py * 12).toFixed(1)}px`);
  };

  const onPointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
    el.style.setProperty("--tilt-x", "0px");
    el.style.setProperty("--tilt-y", "0px");
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`transition-transform duration-200 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
