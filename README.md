# MD Arif Foysal — Portfolio

A personal portfolio website built with **Next.js 16** (App Router), **TypeScript**, and **Tailwind CSS v4**.

## ✨ Features

- **Professional dark design** — refined typography, numbered sections, SVG icons (no emoji), sticky nav
- **3D animated profile photo** — floating 3D portrait with an interactive tilt and rotating accent ring
- **3D touchable keyboard** — a real, working QWERTY keyboard rendered in pure CSS 3D; type a message and press **Send ↵** to open WhatsApp with it pre-filled (wa.me click-to-chat)
- **3D touchable floating stack chips** — tap a chip to flip it in 3D and reveal what it's used for
- **3D tilt cards** — project and stack cards tilt in 3D as you hover
- **Scroll-reveal animations** — sections and cards fade in as you scroll
- **Subtle ambient background** — aurora glows, dot grid, and soft mouse parallax (respects `prefers-reduced-motion`)
- **Live GitHub data** — project cards are enriched from the GitHub API at build time (last-updated dates, stars, forks) with a per-repo fallback fetch, so cards always carry live data
- **CV-driven content** — experience timeline, IEEE publication with DOI link, education, and full skill stack
- **Sections** — hero, floating stack strip, featured projects (incl. GameHub BD), tech stack, 3D keyboard playground, experience, research & publications, education, about, contact (GitHub / email / WhatsApp), footer
- **Static with hourly ISR** — prerendered, revalidates project data every hour
- **Responsive** — works on mobile and desktop

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

Next.js · React · TypeScript · Tailwind CSS · GitHub REST API

## 📁 Structure

```
src/
├── app/            # Pages & layout
├── components/     # Section components (hero, projects, stack, experience, ...)
├── lib/            # Project data + GitHub API integration
└── three-background, tilt-card, reveal  # Animation building blocks
```

## ✏️ Customizing

- **Projects & copy** — edit `src/lib/projects.ts` and the components in `src/components/`
- **Contact details** — update the email / LinkedIn placeholders in `src/components/contact.tsx`
