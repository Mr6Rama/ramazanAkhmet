import type { ProjectCardItem } from "../data/profile";
import { MediaSlot } from "./media-slot";
import { Tilt } from "./tilt";

// One reusable card pattern for every project — no special cases. Header
// (title / role / period) → one-liner → achievement badges → big metrics →
// 2-3 bullets → media slots → optional related sub-project → links.
export function ProjectCard({ project }: { project: ProjectCardItem }) {
  return (
    <Tilt className="h-full">
      <article className="glass flex h-full flex-col p-6 sm:p-7">
        <div className="relative z-10 flex h-full flex-col">
          <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-display text-2xl tracking-tight text-foreground">
              {project.title}
            </h3>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              {project.period}
            </p>
          </header>
          <p className="mt-1 text-sm font-medium text-foreground/80">{project.role}</p>

          <p className="mt-4 max-w-prose text-sm leading-7 text-muted">{project.oneLiner}</p>

          {project.achievements.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {project.achievements.map((achievement) => (
                <span
                  key={`${achievement.label}-${achievement.detail}`}
                  className="glass-chip inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-foreground"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                    {achievement.label}
                  </span>
                  <span className="text-muted">{achievement.detail}</span>
                </span>
              ))}
            </div>
          ) : null}

          {project.metrics.length ? (
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="glass-chip rounded-2xl px-4 py-3"
                >
                  <p className="font-display text-2xl tracking-tight text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted">{metric.label}</p>
                </div>
              ))}
            </div>
          ) : null}

          {project.bullets.length ? (
            <ul className="mt-5 space-y-2.5">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {project.media.length ? (
            <div
              className={`mt-6 grid gap-3 ${
                project.media.length >= 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
              }`}
            >
              {project.media.map((media) => (
                <MediaSlot key={media.src ?? media.alt} {...media} />
              ))}
            </div>
          ) : null}

          {project.related ? (
            <div className="mt-6 rounded-2xl border border-line/70 bg-white/60 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                Related — within {project.title}
              </p>
              <p className="mt-2 font-display text-lg tracking-tight text-foreground">
                {project.related.title}
              </p>
              <p className="mt-1 text-sm leading-6 text-muted">{project.related.oneLiner}</p>
              {project.related.bullets.length ? (
                <ul className="mt-3 space-y-2">
                  {project.related.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
              {project.related.media.length ? (
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {project.related.media.map((media) => (
                    <MediaSlot key={media.src ?? media.alt} {...media} />
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}

          {project.links.length ? (
            <div className="mt-6 flex flex-wrap gap-2 pt-2">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-chip rounded-full px-3 py-2 text-xs uppercase tracking-[0.18em] text-foreground transition-all duration-200 hover:-translate-y-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </Tilt>
  );
}
