import { Reveal } from "./reveal";
import type { Link } from "../data/profile";

export function ContactCard({
  title,
  description,
  email,
  resumeHref,
  links,
}: {
  title: string;
  description: string;
  email: string;
  resumeHref: string;
  links: Link[];
}) {
  return (
    <Reveal>
      <div className="rounded-2xl border border-foreground bg-foreground p-6 text-white sm:p-8">
        <div className="max-w-2xl">
          <h3 className="font-display text-2xl tracking-tight sm:text-3xl">{title}</h3>
          <p className="mt-3 max-w-xl text-sm leading-6 text-white/75 sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-foreground transition duration-200 hover:bg-white/90 hover:-translate-y-0.5"
          >
            {email}
          </a>
          <a
            href={resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition duration-200 hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5"
          >
            Download resume
          </a>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition duration-200 hover:border-white/40 hover:bg-white/10 hover:-translate-y-0.5"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
