"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseIcon, DocumentIcon, GithubIcon, LinkedinIcon, MenuIcon } from "./icons";
import { GITHUB_URL, LINKEDIN_URL, NAME, RESUME_URL } from "@/lib/contact";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Toolkit", href: "#toolkit" },
  { label: "Contact", href: "#contact" },
];

const ICON_LINKS = [
  { label: "GitHub", href: GITHUB_URL, Icon: GithubIcon },
  { label: "LinkedIn", href: LINKEDIN_URL, Icon: LinkedinIcon },
];

export default function SiteHeader() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  // Highlight the last section whose top has crossed an upper reading line.
  // Derived from live geometry rather than IntersectionObserver entry diffs,
  // which can report an exit without a matching enter and leave the state stale.
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector<HTMLElement>(link.href),
    ).filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;

    const update = () => {
      const line = window.innerHeight * 0.3;
      let current = "";
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = `#${section.id}`;
      }
      setActive((previous) => (previous === current ? previous : current));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-6 px-6">
        <Link
          href="#top"
          className="shrink-0 font-serif text-[17px] leading-none tracking-[-0.01em] text-ink"
        >
          {NAME}
        </Link>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`font-mono text-[11px] uppercase tracking-[0.13em] transition-colors ${
                      isActive ? "text-accent" : "text-muted hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <div className="hidden items-center gap-1 sm:flex">
            {ICON_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 hidden items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-[12px] font-medium text-paper transition-opacity hover:opacity-85 sm:flex"
          >
            <DocumentIcon className="h-3.5 w-3.5" />
            Résumé
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-surface md:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Sections"
          className="border-t border-line bg-paper md:hidden"
        >
          <ul className="mx-auto flex max-w-5xl flex-col px-6 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="border-b border-line/70 last:border-b-0">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-serif text-lg text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-auto flex max-w-5xl items-center gap-2 px-6 pb-4">
            {ICON_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-[12px] text-muted"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </a>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-[12px] font-medium text-paper"
            >
              <DocumentIcon className="h-3.5 w-3.5" />
              Résumé
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
