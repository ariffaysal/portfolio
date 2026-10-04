"use client";

import { useCallback, useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "./icons";

/**
 * The theme lives on `document.documentElement` (set before paint by the inline
 * script in layout.tsx), so the DOM is the source of truth and React subscribes
 * to it rather than mirroring it in an effect.
 */
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function getSnapshot(): boolean {
  return document.documentElement.dataset.theme === "dark";
}

/** The server always renders the day theme, which the inline script may upgrade. */
function getServerSnapshot(): boolean {
  return false;
}

export default function ThemeToggle() {
  const isNight = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "day" : "night";

    if (next === "night") {
      root.dataset.theme = "dark";
      // Arm the night-only motion layer in the same synchronous step as the
      // palette swap, so the day theme never inherits a half-applied state.
      root.dataset.motion = "on";
    } else {
      delete root.dataset.theme;
      delete root.dataset.motion;
    }

    try {
      window.localStorage.setItem("theme", next);
    } catch {
      // Storage can be unavailable in private modes; the toggle still works.
    }

    listeners.forEach((listener) => listener());
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isNight}
      aria-label={isNight ? "Switch to day theme" : "Switch to night theme"}
      title={isNight ? "Switch to day theme" : "Switch to night theme"}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-muted transition-colors hover:bg-surface hover:text-ink"
    >
      {isNight ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
    </button>
  );
}
