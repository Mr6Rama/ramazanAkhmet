import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-14 sm:py-16 ${className}`}>
      <div className="mb-8 max-w-2xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.04}>
          <h2 className="mt-3 font-display text-2xl tracking-tight text-foreground sm:text-3xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-3 text-sm leading-6 text-muted sm:text-base">{description}</p>
        </Reveal>
      </div>
      {children}
    </section>
  );
}
