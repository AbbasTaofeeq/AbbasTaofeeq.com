import { ArrowUpRight, MessageSquare, Users2 } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { InternalProjectIllustration } from "@/components/internal-project-illustration";
import { MagneticButton } from "@/components/magnetic-button";
import type { Project } from "@/content/projects";

export function ProjectHero({ project }: { project: Project }) {
  const hasVisual = Boolean(project.image) || Boolean(project.illustrationType);

  return (
    <section className="border-b border-[var(--border)] px-6 pb-16 pt-8 sm:px-10">
      <div
        className={
          hasVisual
            ? "mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-2 lg:items-center lg:gap-14"
            : "mx-auto w-full max-w-[640px]"
        }
      >
        {hasVisual ? (
          <AnimatedSection>
            <div className="project-image-wrap rounded-[var(--radius-tab)] border border-[var(--border)] shadow-[var(--shadow-tab)]">
              {project.image ? (
                <img src={project.image} alt={project.imageAlt} />
              ) : project.illustrationType ? (
                <InternalProjectIllustration type={project.illustrationType} />
              ) : null}
            </div>
          </AnimatedSection>
        ) : null}

        <AnimatedSection delay={0.08}>
          <p className="font-caps text-[11px] text-[var(--muted-2)]">
            {project.category} <span className="text-[var(--border-strong)]">·</span> {project.year}
          </p>

          <h1 className="mt-3 font-display text-h2 font-semibold leading-[1.04] tracking-tight text-[var(--foreground)]">
            {project.title}
          </h1>

          <p className="mt-5 max-w-xl text-[17px] leading-8 text-[var(--foreground)]">
            {project.heroTldr}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <span className="inline-flex w-fit items-center rounded-[var(--radius-chip)] bg-[var(--accent-soft)] px-3 py-1.5 text-[12.5px] font-medium text-[var(--accent-hover)]">
              {project.metricPill}
            </span>
            {project.outcomeType === "team" ? (
              <span className="inline-flex w-fit items-center gap-1.5 rounded-[var(--radius-chip)] border border-[var(--border)] bg-white px-3 py-1.5 text-[12px] font-medium text-[var(--muted)]">
                <Users2 className="h-3.5 w-3.5" />
                Team project
              </span>
            ) : null}
          </div>

          <div className="mt-6 border-t border-[var(--divider)] pt-5">
            <p className="text-[13px] font-semibold text-[var(--foreground)]">{project.role}</p>
            {project.teamNote ? (
              <p className="mt-1.5 text-[13px] leading-6 text-[var(--muted)]">{project.teamNote}</p>
            ) : null}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.liveUrl ? (
              <MagneticButton className="btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                View live site
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            ) : null}
            <MagneticButton className="btn-secondary" href="/#contact">
              Discuss a similar project
              <MessageSquare className="h-4 w-4" />
            </MagneticButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
