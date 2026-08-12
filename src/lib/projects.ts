export type Project = {
  /** GitHub repo name, used to match against the live API */
  id: string;
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  repoUrl: string;
  /** Optional live demo URL */
  homepage?: string;
  /** Extra repo URLs worth linking (e.g. paired frontend/backend repos) */
  relatedLinks?: { label: string; url: string }[];
};

/** Curated projects — the API enriches these with live fields at build time. */
export const PROJECTS: Project[] = [
  {
    id: "gamehub-bd",
    title: "GameHub BD — Game Currency Marketplace",
    description:
      "Production-grade, Codashop-inspired game top-up marketplace for Bangladesh — buy UC, Diamonds, Points & Gift Cards and pay instantly with bKash, Nagad, Rocket or cards. A full npm-workspaces monorepo, live on Vercel.",
    highlights: [
      "Live storefront + admin dashboard + API on Vercel",
      "bKash / Nagad / Rocket payments with transaction-ID verification",
      "Real-time order tracking (WebSocket) & admin analytics",
      "JWT auth + RBAC, Redis + BullMQ queues, CI/CD",
    ],
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Redis", "BullMQ", "Socket.IO", "Tailwind CSS", "Docker", "GitHub Actions"],
    repoUrl: "https://github.com/ariffaysal/gamehub-bd",
    homepage: "https://gamehub-bd-web.vercel.app",
  },
  {
    id: "-Suzu-BD",
    title: "Suzu BD — Footwear E-Commerce",
    description:
      "Full-stack e-commerce platform with product catalog, cart, COD order flow, admin dashboard, and image uploads. Deployed end-to-end on Vercel with a managed Postgres database.",
    highlights: [
      "Live storefront + API in production",
      "DB-backed cart with session tracking",
      "Admin JWT auth + order stats dashboard",
      "Image uploads to Vercel Blob with magic-byte validation",
    ],
    stack: ["NestJS", "Prisma", "PostgreSQL", "Next.js", "Tailwind CSS", "JWT", "Docker", "Vercel"],
    repoUrl: "https://github.com/ariffaysal/-Suzu-BD",
    homepage: "https://suzu-bd-web.vercel.app",
  },
  {
    id: "HRattendance",
    title: "HR Attendance System",
    description:
      "Modern TypeScript rewrite of a legacy PHP HR application — CSV attendance import, statistics, monthly reports, employee CRUD, and real-time punches from ZKTeco biometric devices.",
    highlights: [
      "Legacy PHP → NestJS + Next.js migration",
      "ZKTeco device integration with live updates",
      "CSV upload with delimiter auto-detection",
      "Print-friendly job cards & monthly views",
    ],
    stack: ["NestJS", "PostgreSQL", "Next.js", "Socket.IO", "ZKTeco", "Docker"],
    repoUrl: "https://github.com/ariffaysal/HRattendance",
  },
  {
    id: "RBMS_TASK",
    title: "RBMS — Role-Based Management System",
    description:
      "Authentication and authorization demo with four roles — SuperAdmin, Moderator, RegularUser, Guest — each with guarded API routes and UI.",
    highlights: [
      "JWT auth with role-based access control",
      "Permission-guarded API + client views",
      "Seed demo accounts for every role",
    ],
    stack: ["NestJS", "JWT", "Next.js", "Tailwind CSS"],
    repoUrl: "https://github.com/ariffaysal/RBMS_TASK",
  },
  {
    id: "job-board",
    title: "Job Board",
    description:
      "Full-stack job listings platform — employers post roles and candidates browse, search, and apply, with a Next.js client and a NestJS API deployed on Vercel.",
    highlights: [
      "Separate client + API codebases",
      "Deployed live on Vercel",
      "Responsive job listing UI",
    ],
    stack: ["NestJS", "Next.js", "TypeScript", "Vercel"],
    repoUrl: "https://github.com/ariffaysal/job-board",
    homepage: "https://job-board-eosin-rho.vercel.app",
  },
  {
    id: "notice-board-for-get-asap-notified-by-whatsapp-backend",
    title: "Notice Board + WhatsApp Alerts",
    description:
      "Notice management system that notifies subscribers on WhatsApp the moment a new notice is published — NestJS API with a Next.js admin client.",
    highlights: [
      "Instant WhatsApp notification on publish",
      "Admin notice CRUD with preview",
      "Separate API + client repositories",
    ],
    stack: ["NestJS", "Next.js", "WhatsApp API", "TypeScript"],
    repoUrl: "https://github.com/ariffaysal/notice-board-for-get-asap-notified-by-whatsapp-backend",
    relatedLinks: [
      {
        label: "Frontend repo",
        url: "https://github.com/ariffaysal/ariffaysal-notice-board-for-get-asap-notified-by-whatsapp-frontend",
      },
    ],
  },
  {
    id: "whatsapp-project",
    title: "WhatsApp Full-Stack Project",
    description:
      "Early-stage WhatsApp-integrated application — a TypeScript monorepo pairing a backend API with a web client.",
    highlights: ["TypeScript monorepo", "Backend + frontend pair", "WhatsApp integration focus"],
    stack: ["TypeScript", "Node.js", "REST API"],
    repoUrl: "https://github.com/ariffaysal/whatsapp-project",
  },
];

export type GitHubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  homepage: string | null;
  topics: string[];
  archived: boolean;
  fork: boolean;
};

async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const res = await fetch("https://api.github.com/users/ariffaysal/repos?per_page=100&sort=updated", {
    headers: { Accept: "application/vnd.github+json" },
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`GitHub API responded ${res.status}`);
  return (await res.json()) as GitHubRepo[];
}

async function fetchGitHubRepo(name: string): Promise<GitHubRepo | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/ariffaysal/${name}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return (await res.json()) as GitHubRepo;
  } catch {
    return null;
  }
}

export type EnrichedProject = Project & {
  stars: number;
  forks: number;
  language: string;
  lastUpdated: string;
  apiDescription: string | null;
};

function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short" });
  } catch {
    return iso;
  }
}

/**
 * Merges the curated project list with live data from the GitHub API.
 * Falls back to curated data if the API is unreachable (e.g. offline builds).
 */
export async function getProjects(): Promise<EnrichedProject[]> {
  const fallback: EnrichedProject[] = PROJECTS.map((p) => ({
    ...p,
    stars: 0,
    forks: 0,
    language: "TypeScript",
    lastUpdated: "2026",
    apiDescription: null,
  }));

  try {
    const repos = await fetchGitHubRepos();
    const byName = new Map(repos.map((r) => [r.name, r]));

    // The list endpoint occasionally serves a stale response missing newer
    // repos (e.g. gamehub-bd). Fill any gaps with per-repo fetches so the
    // curated cards always carry live data.
    const missing = PROJECTS.filter((p) => !byName.has(p.id));
    for (const project of missing) {
      const repo = await fetchGitHubRepo(project.id);
      if (repo) byName.set(project.id, repo);
    }

    return PROJECTS.map((p) => {
      const repo = byName.get(p.id);
      if (!repo) return fallback.find((f) => f.id === p.id)!;
      return {
        ...p,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language ?? "TypeScript",
        lastUpdated: formatDate(repo.pushed_at),
        apiDescription: repo.description,
      };
    });
  } catch {
    return fallback;
  }
}
