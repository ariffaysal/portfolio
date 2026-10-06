"use client";

import { useSyncExternalStore } from "react";
import ContributionSkyline, { type ContributionDay } from "@/components/ui/contribution-skyline";
import Section from "@/components/section";
import { GITHUB_HANDLE, GITHUB_URL } from "@/lib/contact";

/**
 * Night-only activity skyline.
 *
 * The whole section is gated on the night theme, so the day theme renders
 * nothing at all — no section, no canvas, no listeners — which keeps the
 * "day pays nothing" rule the rest of the night-theme work follows.
 *
 * The theme lives on `document.documentElement` (set before paint by the
 * inline script in layout.tsx), so the DOM is the source of truth and React
 * subscribes to it rather than mirroring it in state. Watching the attribute
 * also covers the toggle, other tabs, and the pre-paint bootstrap, which the
 * toggle's own listener set would not.
 */

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  window.addEventListener("storage", onChange);
  return () => {
    observer.disconnect();
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): boolean {
  return document.documentElement.dataset.theme === "dark";
}

/** The server always renders the day theme; the client upgrades once it mounts. */
function getServerSnapshot(): boolean {
  return false;
}

export default function NightActivity({ days }: { days?: ContributionDay[] }) {
  const isNight = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (!isNight) return null;

  return (
    <Section
      id="activity"
      label="Activity"
      title="A year of work, folded into a skyline."
      lede="Every day of the last year on GitHub — flat as a heat map, or stood up into a skyline you can drag to orbit. It only appears after dark."
    >
      {/* `days` is read from GitHub on the server; without it the chart draws
          its own generated year, which the note below owns up to. */}
      <ContributionSkyline palette="ember" data={days} />

      <p className="mt-5 font-mono text-[11px] leading-relaxed text-muted">
        {days ? (
          <>
            Live from{" "}
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="link">
              github.com/{GITHUB_HANDLE}
            </a>{" "}
            · refreshed hourly
          </>
        ) : (
          "Sample data · GitHub could not be read, so these counts are generated"
        )}
      </p>
    </Section>
  );
}
