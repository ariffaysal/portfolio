"use client";

import { useEffect, useRef } from "react";

/**
 * Night-only motion driver.
 *
 * Everything it drives is inert in the day theme: the reveal styles are gated
 * on `html[data-theme="dark"][data-motion="on"]`, and this component only sets
 * `data-motion` while the night theme is active. In day mode it does no work
 * beyond syncing that one attribute.
 *
 * Scroll handling is a single passive, rAF-throttled listener that both
 * reveals elements and advances the top progress bar, so there is no
 * per-element IntersectionObserver bookkeeping to keep in sync when the theme
 * changes mid-page.
 */
export default function NightMotion() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const progress = progressRef.current;
    let targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    // Tells the bootstrap script's watchdog that the app took over, so the
    // motion gate stays armed instead of being dropped for safety.
    root.dataset.motionReady = "on";

    let frame = 0;

    const paint = () => {
      frame = 0;

      const isNight = root.dataset.theme === "dark";
      // The toggle sets this synchronously; re-asserting it here keeps the two
      // paths in agreement (for example after a cross-tab storage change).
      if (isNight) root.setAttribute("data-motion", "on");
      else root.removeAttribute("data-motion");

      if (!isNight) return;

      const readingLine = window.innerHeight * 0.88;
      for (const target of targets) {
        if (target.classList.contains("is-revealed")) continue;
        // `top < line` covers both entering from below and content that was
        // already scrolled past when the theme flipped to night.
        if (target.getBoundingClientRect().top < readingLine) {
          target.classList.add("is-revealed");
          // Safety net: if the reveal transition cannot run — throttled or
          // paused compositing, for instance — snap to the final state so the
          // copy can never be left stranded at zero opacity.
          window.setTimeout(() => target.classList.add("is-settled"), 1200);
        }
      }

      if (progress) {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
        progress.style.setProperty(
          "--night-progress",
          String(Math.min(1, Math.max(0, ratio))),
        );
      }
    };

    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(paint);
    };

    // Sections can mount after this effect runs — the night-only ones do
    // exactly that, once the stored theme resolves — so the list is re-collected
    // whenever the document gains nodes rather than frozen at mount. Watching
    // childList only (never attributes) keeps a reveal from re-triggering itself.
    const domObserver = new MutationObserver(() => {
      targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
      schedule();
    });
    domObserver.observe(document.body, { childList: true, subtree: true });

    // The bootstrap script has already set the attribute for a stored night
    // theme; this covers the toggle, other tabs, and the initial measurement.
    const themeObserver = new MutationObserver(schedule);
    themeObserver.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();

    return () => {
      delete root.dataset.motionReady;
      if (frame) window.cancelAnimationFrame(frame);
      domObserver.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return <div ref={progressRef} aria-hidden="true" className="night-progress" />;
}
