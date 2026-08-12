import type { EnrichedProject } from "@/lib/projects";
import Reveal from "./reveal";
import TiltCard from "./tilt-card";
import { GithubIcon } from "./site-header";

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

export default function Projects({ projects }: { projects: EnrichedProject[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project, index) => (
        <Reveal key={project.id} delay={(index % 2) * 90}>
          <TiltCard className="h-full">
            <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-indigo-400/40 hover:bg-white/[0.05]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500/20 to-violet-600/20 text-lg">
                    {project.title.charAt(0)}
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-zinc-100">
                    {project.title}
                  </h3>
                </div>
                <div className="flex shrink-0 items-center gap-2 text-zinc-500">
                  {project.stars > 0 && (
                    <span className="flex items-center gap-1 text-xs" title="Stars">
                      <StarIcon className="h-3.5 w-3.5" />
                      {project.stars}
                    </span>
                  )}
                  {project.forks > 0 && (
                    <span className="flex items-center gap-1 text-xs" title="Forks">
                      <ForkIcon className="h-3.5 w-3.5" />
                      {project.forks}
                    </span>
                  )}
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-400">{project.description}</p>

              <ul className="mt-4 space-y-1.5">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-xs text-zinc-400">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-indigo-400" />
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-zinc-900 px-2 py-0.5 font-mono text-[11px] text-zinc-300 transition-colors group-hover:border-indigo-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/5 pt-4 text-xs font-medium">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-100"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  Source
                </a>
                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-indigo-300 transition-colors hover:text-indigo-200"
                  >
                    <ExternalIcon className="h-3.5 w-3.5" />
                    Live demo
                  </a>
                )}
                {project.relatedLinks?.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-100"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    {link.label}
                  </a>
                ))}
                <span className="ml-auto text-zinc-600">{project.lastUpdated}</span>
              </div>
            </article>
          </TiltCard>
        </Reveal>
      ))}
    </div>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2l2.9 6.26L21.5 9.3l-4.75 4.62 1.12 6.58L12 17.5l-5.87 3-1.12-6.58L2.5 9.3l6.6-1.04L12 2Z" />
    </svg>
  );
}

function ForkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6 2a3 3 0 0 0-3 3c0 1.3.82 2.4 2 2.83V16.2A3 3 0 1 0 7 16.2V9.4a3.5 3.5 0 0 0 5 0v3.37a3 3 0 1 0 2 0V8.2a3 3 0 0 0 2-2.83A3 3 0 0 0 13 2a3 3 0 0 0-4 2.83c0 .11.01.22.03.32a3.5 3.5 0 0 0-2.06 0A3 3 0 0 0 6 2Zm0 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-7 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
    </svg>
  );
}
