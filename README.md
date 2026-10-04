# MD Arif Foysal — Portfolio

A personal portfolio built with **Next.js 16** (App Router), **TypeScript**, and **Tailwind CSS v4**.

## ✨ Design

An editorial layout rather than a template: a warm paper background, hairline rules, and a
serif/sans/mono type system doing the work that gradients and motion usually get asked to do.

- **Type system** — Newsreader for display headings, Geist for body copy, Geist Mono for labels and metadata
- **Two-column sections** — a monospace marker in a narrow left gutter, content in a wider right column
- **Hairline structure** — `border-line` rules instead of cards, shadows and glows
- **One accent** — a single vermilion used only for links, the active nav item, and the current-role badge
- **Day and night themes** — a header toggle beside the résumé button, persisted to `localStorage` and applied before first paint so it never flashes
- **Motion belongs to the night theme only** — the day theme is completely still, enforced by CSS rather than conditional rendering, and both themes honour `prefers-reduced-motion`

## 🧭 Functionality

- **Scroll-spy navigation** derived from live geometry, so the active section is always correct
- **Day/night toggle** read from the DOM through `useSyncExternalStore`, so the DOM stays the single source of truth for the active theme
- **Accessible mobile menu** with `aria-expanded`, escape-to-close, and focus-visible rings
- **Downloadable résumé** served from `public/MD-Arif-Foysal-CV.pdf`
- **Fully static** — no runtime data fetching, so builds are deterministic and there is no third-party API on the critical path

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📦 Production

```bash
npm run build
npm run start
```

Deploy to Vercel with zero configuration: `vercel --prod`.

## 🧰 Stack

Next.js · React · TypeScript · Tailwind CSS v4

## 📁 Structure

```
src/
├── app/            # Layout, global design tokens, page composition
├── components/     # Section components (hero, projects, experience, research, …)
└── lib/            # Project data and contact/identity constants
```

## ✏️ Customizing

- **Content** — edit `src/lib/projects.ts` for project entries. Keep the list curated; every entry should be something actually shipped.
- **Identity & links** — name, email, GitHub, LinkedIn, résumé path and DOI live in `src/lib/contact.ts`
- **Design tokens** — colours and fonts are defined in the `@theme` blocks in `src/app/globals.css`
- **Section order** — compose sections in `src/app/page.tsx`; each one is a `<Section>` with a `label` and `title`
