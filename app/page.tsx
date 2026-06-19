import Image from "next/image";
import { ContactCard } from "../components/contact-card";
import { getProfile } from "../data/profile";
import { Reveal } from "../components/reveal";
import { Section } from "../components/section";
import { StatGrid } from "../components/stat-grid";

const copy = getProfile("en");

export default function Home() {
  return (
    <main className="relative" id="top">
      <div className="noise absolute inset-0 -z-10 opacity-[0.22]" />

      {/* Sticky navbar with Apple-style glassmorphism */}
      <div className="sticky top-0 z-30 border-b border-line/60 bg-background/[0.88] backdrop-blur-xl backdrop-saturate-[180%] transition-shadow duration-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="font-display text-sm tracking-tight text-foreground sm:text-base">
            Ramazan Akhmet
          </a>
          <nav className="flex items-center gap-4 overflow-x-auto text-[11px] uppercase tracking-[0.22em] text-muted sm:gap-6">
            <a href="#about" className="transition-colors duration-200 hover:text-foreground">
              About
            </a>
            <a href="#now" className="transition-colors duration-200 hover:text-foreground">
              Now
            </a>
            <a href="#experience" className="transition-colors duration-200 hover:text-foreground">
              Work
            </a>
            <a href="#projects" className="transition-colors duration-200 hover:text-foreground">
              Projects
            </a>
            <a href="#awards" className="transition-colors duration-200 hover:text-foreground">
              Awards
            </a>
            <a href="#contact" className="transition-colors duration-200 hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
        <section className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="max-w-3xl">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                {copy.hero.eyebrow} / {copy.hero.positioning}
              </p>
            </Reveal>
            <Reveal delay={0.04}>
              <h1 className="mt-4 font-display text-5xl leading-[0.9] tracking-[-0.02em] text-foreground text-balance sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                {copy.hero.headline}
              </h1>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-2xl text-lg leading-[1.6] text-muted text-balance sm:text-xl">
                {copy.hero.subheadline}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground/90"
                >
                  Get in touch
                </a>
                <a
                  href={copy.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-line bg-white px-5 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/30"
                >
                  View LinkedIn
                </a>
                <a
                  href={copy.contact.resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-line bg-white px-5 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/30"
                >
                  Download resume
                </a>
              </div>
              <p className="mt-4 text-sm text-muted">
                {copy.contact.email} · {copy.hero.location}
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {copy.metrics.slice(0, 4).map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card hover:border-foreground/15"
                  >
                    <p className="font-display text-[1.75rem] tracking-tight text-foreground sm:text-[2rem]">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-muted">{metric.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="space-y-4">
              <figure className="overflow-hidden rounded-2xl border border-line bg-white">
                <div className="relative aspect-[4/5] bg-background">
                  <Image
                    src="/images/ramazan-portrait.jpg"
                    alt="Ramazan Akhmet portrait placeholder"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="border-t border-line px-4 py-4 sm:px-5">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                    Ramazan Akhmet
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    16-year-old founder from Kazakhstan building AI products and startup ecosystems.
                  </p>
                </figcaption>
              </figure>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-line bg-white p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                    Location
                  </p>
                  <p className="mt-2 text-sm text-foreground">{copy.hero.location}</p>
                </div>
                <div className="rounded-2xl border border-line bg-white p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                    Age
                  </p>
                  <p className="mt-2 text-sm text-foreground">16</p>
                </div>
                <div className="rounded-2xl border border-line bg-white p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                    Education
                  </p>
                  <p className="mt-2 text-sm text-foreground">
                    {copy.education.school}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <Section
          id="about"
          eyebrow="About"
          title={copy.about.title}
          description="A founder profile, not a student CV."
          className="border-t border-line"
        >
          <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr]">
            <div className="space-y-4">
              {copy.about.description.map((paragraph) => (
                <p key={paragraph} className="max-w-3xl text-sm leading-7 text-muted sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:shadow-soft hover:border-foreground/20">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                Positioning
              </p>
              <p className="mt-3 font-display text-2xl leading-tight tracking-tight text-foreground">
                {copy.hero.positioning}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {copy.primaryLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="rounded-full border border-line bg-background px-3 py-2 text-xs uppercase tracking-[0.18em] text-foreground transition-all duration-200 hover:border-foreground/30"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="now"
          eyebrow="Now"
          title={copy.now.title}
          description={copy.now.description}
          className="border-t border-line"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
              <ul className="space-y-3">
                {copy.now.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-white p-5 sm:p-6 transition-all duration-300 hover:shadow-soft hover:border-foreground/20">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                Current focus
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">
                {copy.now.description}
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="experience"
          eyebrow="Experience"
          title="Work that shows execution"
          description="Compact, high-signal history with enough detail to understand the actual operating range."
          className="border-t border-line"
        >
          <div className="space-y-3">
            {copy.experience.map((item) => (
              <details
                key={item.org}
                className="group rounded-2xl border border-line bg-white transition-all duration-200 hover:border-foreground/20 hover:shadow-soft"
              >
                <summary className="flex cursor-pointer list-none items-start gap-4 px-5 py-4 marker:hidden">
                  <span className="mt-1 w-24 shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    {item.date}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-lg tracking-tight text-foreground sm:text-xl">
                      {item.role}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-muted">
                      {item.org} · {item.location}
                    </span>
                    <span className="mt-2 block max-w-3xl text-sm leading-6 text-muted">
                      {item.summary}
                    </span>
                  </span>
                  <span className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="border-t border-line px-5 py-4">
                  <ul className="space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-6 text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-white p-5 sm:p-6">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              Society event system
            </p>
            <div className="mt-4 grid gap-3 lg:grid-cols-2">
              {copy.events.map((event) => (
                <div key={event.title} className="rounded-2xl border border-line bg-background p-4">
                  <p className="font-display text-lg tracking-tight text-foreground">{event.title}</p>
                  <p className="mt-1 text-sm text-muted">{event.details}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {event.stats.map((stat) => (
                      <span
                        key={stat}
                        className="rounded-full border border-line bg-white px-3 py-1.5 text-xs text-foreground"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="Selected projects"
          description="The work is presented as real products and systems, not as portfolio tiles."
          className="border-t border-line"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {copy.projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card hover:border-foreground/10"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-xl tracking-tight text-foreground">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-background px-3 py-2 text-xs text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                {project.links?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-line bg-white px-3 py-2 text-xs uppercase tracking-[0.18em] text-foreground transition-all duration-200 hover:border-foreground/30"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="traction"
          eyebrow="Traction & metrics"
          title={copy.traction.title}
          description={copy.traction.description}
          className="border-t border-line"
        >
          <StatGrid items={copy.traction.metrics.slice(0, 4)} />
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {copy.traction.metrics.slice(4).map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card hover:border-foreground/15"
              >
                <p className="font-display text-2xl tracking-tight text-foreground">{metric.value}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="awards"
          eyebrow="Awards & recognition"
          title="Recognition"
          description="A concise scan of the most relevant placements and recognition."
          className="border-t border-line"
        >
          <div className="grid gap-4 lg:grid-cols-3">
            {copy.awards.map((group) => (
              <article
                key={group.category}
                className="rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:shadow-soft hover:border-foreground/15"
              >
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                  {group.category}
                </p>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm leading-6 text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white">
            <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-3">
              <article className="rounded-xl border border-line bg-background p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  Event visual
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground">GenerativeX 2026</p>
              </article>
              <article className="rounded-xl border border-line bg-background p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  Event visual
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground">World Space Olympiad</p>
              </article>
              <article className="rounded-xl border border-line bg-background p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  Education recognition
                </p>
                <p className="mt-2 text-sm leading-6 text-foreground">
                  {copy.education.school} · {copy.education.date}
                </p>
              </article>
            </div>
          </div>
        </Section>

        <Section
          id="skills"
          eyebrow="Skills"
          title="Core skills"
          description="The practical stack behind the profile."
          className="border-t border-line"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            {copy.skills.map((group) => (
              <article
                key={group.category}
                className="rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:shadow-soft hover:border-foreground/15"
              >
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
                  {group.category}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-background px-3 py-2 text-sm text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="ecosystem"
          eyebrow="Ecosystem / partners"
          title="Ecosystem built through Society"
          description="The partner network and event systems that show how the community scales."
          className="border-t border-line"
        >
          <div className="mb-6 rounded-2xl border border-line bg-white p-5">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              Social links
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {copy.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line bg-background px-3 py-2 text-sm text-foreground transition-all duration-200 hover:border-foreground/30"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.events.map((event) => (
              <article key={event.title} className="rounded-2xl border border-line bg-white p-5">
                <p className="font-display text-lg tracking-tight text-foreground">{event.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{event.details}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {event.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full border border-line bg-background px-3 py-2 text-xs text-foreground"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-line bg-white p-5">
            <div className="flex flex-wrap gap-2">
              {copy.partners.map((partner) => (
                <span
                  key={partner}
                  className="rounded-full border border-line bg-background px-3 py-2 text-sm text-foreground"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <section id="contact" className="scroll-mt-24 border-t border-line py-14 sm:py-16">
          <ContactCard
            title={copy.contact.title}
            description={copy.contact.description}
            email={copy.contact.email}
            resumeHref={copy.contact.resumeHref}
            links={[
              { label: "View LinkedIn", href: copy.contact.linkedin },
            ]}
          />
        </section>
      </div>
    </main>
  );
}
