export type Project = {
  id: string;
  title: string;
  /** Short, factual classifier shown next to the title. */
  kind: string;
  year: string;
  description: string;
  /** Concrete, verifiable capabilities — not marketing copy. */
  highlights: string[];
  stack: string[];
  repoUrl: string;
  homepage?: string;
  relatedLinks?: { label: string; url: string }[];
};

/**
 * Hand-curated and deliberately short. Every entry is deployed or shipped;
 * nothing here is filler. Content is static so builds are deterministic and
 * no third-party API (and its rate limits) sits on the critical path.
 */
export const PROJECTS: Project[] = [
  {
    id: "gamehub-bd",
    title: "GameHub BD",
    kind: "Game currency marketplace",
    year: "2026",
    description:
      "Production marketplace for buying in-game currency and gift cards in Bangladesh, with instant mobile-wallet checkout. Shipped as an npm-workspaces monorepo.",
    highlights: [
      "bKash, Nagad and Rocket payments with transaction-ID verification",
      "Live order tracking over WebSockets and an admin analytics dashboard",
      "JWT auth with role-based access control at the route and query layer",
      "Redis + BullMQ job queues, containerised deploys on Vercel",
    ],
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Socket.IO", "Docker"],
    repoUrl: "https://github.com/ariffaysal/gamehub-bd",
    homepage: "https://gamehub-bd-web.vercel.app",
  },
  {
    id: "connect-social",
    title: "ConnectSocial",
    kind: "Internal communications platform",
    year: "2026",
    description:
      "Company-wide internal network where employees publish to department or company feeds, and clients follow along as read-only guests.",
    highlights: [
      "Posts, images, comments and reactions scoped per department",
      "SuperAdmin activity timeline, analytics and engagement leaderboard",
      "Guest accounts with enforced read-only access",
      "Real-time notifications over WebSockets; self-hostable",
    ],
    stack: ["Next.js", "NestJS", "TypeORM", "MySQL", "WebSockets", "JWT"],
    repoUrl: "https://github.com/ariffaysal/connect-social",
  },
  {
    id: "-Suzu-BD",
    title: "Suzu BD",
    kind: "Footwear e-commerce",
    year: "2026",
    description:
      "Full-stack storefront and admin console for a footwear retailer, running end-to-end in production against a managed Postgres database.",
    highlights: [
      "Database-backed cart with session tracking and a COD order flow",
      "Vercel Blob image uploads validated by magic bytes, not file extension",
      "Admin JWT auth with an order statistics dashboard",
    ],
    stack: ["NestJS", "Prisma", "PostgreSQL", "Next.js", "Tailwind CSS", "Docker"],
    repoUrl: "https://github.com/ariffaysal/-Suzu-BD",
    homepage: "https://suzu-bd-web.vercel.app",
  },
  {
    id: "HRattendance",
    title: "HR Attendance System",
    kind: "HRMS · ZKTeco integration",
    year: "2026",
    description:
      "TypeScript rewrite of a legacy PHP HR platform, now automating employee records, attendance capture and monthly reporting.",
    highlights: [
      "Live punch ingestion from ZKTeco biometric devices over Socket.IO",
      "CSV import with automatic delimiter detection and validation",
      "Print-ready job cards and month-end reports for payroll",
    ],
    stack: ["NestJS", "PostgreSQL", "Next.js", "Socket.IO", "Docker"],
    repoUrl: "https://github.com/ariffaysal/HRattendance",
  },
  {
    id: "notice-board-for-get-asap-notified-by-whatsapp-backend",
    title: "WhatsApp Notice Board",
    kind: "Automated notifications",
    year: "2026",
    description:
      "Notice management system that pushes published notices to subscriber groups on WhatsApp the moment they go live.",
    highlights: [
      "Automated broadcast with real-time group synchronisation",
      "Documented REST API and an admin console with preview",
      "Relational schema tuned for high message volume",
    ],
    stack: ["NestJS", "Next.js", "WhatsApp API", "PostgreSQL"],
    repoUrl: "https://github.com/ariffaysal/notice-board-for-get-asap-notified-by-whatsapp-backend",
    relatedLinks: [
      {
        label: "Frontend",
        url: "https://github.com/ariffaysal/ariffaysal-notice-board-for-get-asap-notified-by-whatsapp-frontend",
      },
    ],
  },
  {
    id: "job-board",
    title: "Job Board",
    kind: "Listings platform",
    year: "2025",
    description:
      "Two-codebase job platform with a Next.js client over an independently deployed NestJS API.",
    highlights: [
      "Employer posting flow plus candidate search and application",
      "Separate client and API deployments on Vercel",
    ],
    stack: ["NestJS", "Next.js", "TypeScript"],
    repoUrl: "https://github.com/ariffaysal/job-board",
    homepage: "https://job-board-eosin-rho.vercel.app",
  },
];
