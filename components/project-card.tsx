"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { InternalProjectIllustration } from "@/components/internal-project-illustration";
import { TiltCard } from "@/components/tilt-card";
import type { Project } from "@/content/projects";

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = Boolean(project.image) && !imgError;

  return (
    <AnimatedSection delay={delay} className="h-full">
      <TiltCard className="h-full">
        <div className="project-card group relative h-full">
          {/* Image */}
          <div className="project-image-wrap">
            {showImage ? (
              <>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  onError={() => setImgError(true)}
                />
                {/* Subtle top fade for polish */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </>
            ) : project.illustrationType ? (
              <InternalProjectIllustration type={project.illustrationType} />
            ) : null}

            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit the live site for ${project.title}`}
                className="absolute right-3 top-3 z-20 inline-flex items-center gap-1 rounded-[var(--radius-chip)] border border-[var(--border)] bg-white/90 py-1.5 pl-2.5 pr-2 text-[11.5px] font-medium text-[var(--foreground)] backdrop-blur-sm transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Visit site
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>

          {/* Content */}
          <div className="project-content">
            <p className="font-caps text-[11px] text-[var(--muted-2)]">
              {project.category} <span className="text-[var(--border-strong)]">·</span> {project.year}
            </p>

            <h3 className="mt-3 font-display text-h3 font-semibold leading-[1.15] tracking-tight text-[var(--foreground)]">
              {project.title}
            </h3>
            <p className="mt-2.5 text-[14px] leading-6 text-[var(--muted)] line-clamp-2">
              {project.cardOutcome}
            </p>

            <span className="mt-4 inline-flex w-fit items-center rounded-[var(--radius-chip)] bg-[var(--accent-soft)] px-2.5 py-1 text-[11.5px] font-medium text-[var(--accent-hover)]">
              {project.metricPill}
            </span>

            <div className="mt-auto pt-5 flex items-center justify-between border-t border-[var(--divider)]">
              <span className="text-[12px] text-[var(--muted-2)] hidden sm:block">
                {project.stack.slice(0, 2).join(" • ")}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] transition">
                Read full story
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </div>

          {/* Stretched link: click anywhere on the card (except the live-site button above) to read the story */}
          <Link
            href={`/projects/${project.slug}`}
            className="absolute inset-0 z-10"
            aria-label={`Read the full story: ${project.title}`}
          />
        </div>
      </TiltCard>
    </AnimatedSection>
  );
}
