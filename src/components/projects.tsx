import type { Project } from "@/lib/projects";
import { ArrowUpRight } from "./icons";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  return (
    <article className="grid gap-x-8 gap-y-3 border-b border-line py-8 sm:grid-cols-[2.5rem_1fr]">
      <p className="label pt-2 tabular-nums">{String(index + 1).padStart(2, "0")}</p>

      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <h3 className="font-serif text-[22px] leading-tight tracking-[-0.015em] text-ink sm:text-[25px]">
            {project.title}
          </h3>
          <p className="text-[13px] text-muted">{project.kind}</p>
          <p className="label ml-auto tabular-nums">{project.year}</p>
        </div>

        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-4 max-w-2xl space-y-1.5">
          {project.highlights.map((highlight) => (
            <li
              key={highlight}
              className="relative pl-4 text-[13.5px] leading-relaxed text-muted before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-line"
            >
              {highlight}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] leading-relaxed tracking-wide text-muted">
            {project.stack.join("  ·  ")}
          </p>

          <div className="flex shrink-0 items-center gap-4">
            {project.homepage && (
              <a
                href={project.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[12.5px] font-medium text-accent transition-opacity hover:opacity-75"
              >
                Live site
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[12.5px] font-medium text-ink transition-colors hover:text-accent"
            >
              Source
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            {project.relatedLinks?.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[12.5px] font-medium text-ink transition-colors hover:text-accent"
              >
                {link.label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div className="border-t border-line">
      {projects.map((project, index) => (
        <ProjectRow key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
