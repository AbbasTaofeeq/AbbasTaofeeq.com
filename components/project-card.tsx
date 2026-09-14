"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import { TiltCard } from "@/components/tilt-card";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const isExternal = project.link.startsWith("http");
  const [imgError, setImgError] = useState(false);

  return (
    <AnimatedSection delay={delay} className="h-full">
      <TiltCard className="h-full">
        <div className="project-card group flex h-full flex-col">
          {/* Image */}
          <div className="project-image-wrap">
            {!imgError ? (
              <img
                src={project.image}
                alt={project.name}
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full grid place-items-center bg-[var(--surface-soft)] text-[var(--muted-2)]">
                <div className="text-center p-6">
                  <div className="mx-auto mb-2 h-8 w-8 rounded-[var(--radius-chip)] bg-white border border-[var(--border)] grid place-items-center">
                    <ExternalLink className="h-4 w-4" />
                  </div>
                  <p className="text-xs font-medium">{project.name}</p>
                </div>
              </div>
            )}
            {/* Subtle top fade for polish */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Content */}
          <div className="project-content">
            <div className="flex items-start justify-between gap-3 mb-3">
              <span className="project-badge">{project.type}</span>
              <span className="text-[11px] font-medium text-[var(--muted-2)] tracking-wide">{project.year}</span>
            </div>

            <h3 className="font-display text-h3 font-semibold leading-[1.15] tracking-tight text-[var(--foreground)]">
              {project.name}
            </h3>
            <p className="mt-2.5 text-[14px] leading-6 text-[var(--muted)] line-clamp-2">
              {project.description}
            </p>

            <div className="mt-4 flex items-center gap-2 text-[12px]">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <span className="font-medium text-[var(--foreground)]">{project.metric}</span>
              <span className="text-[var(--muted-2)]">•</span>
              <span className="text-[var(--muted-2)]">{project.role}</span>
            </div>

            <div className="mt-auto pt-5 flex items-center justify-between border-t border-[var(--divider)]">
              <span className="text-[12px] text-[var(--muted-2)] hidden sm:block">
                {project.stack.slice(0, 2).join(" • ")}
              </span>
              <a
                href={project.link}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition group/link"
              >
                {isExternal ? "View live" : "Discuss work"}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </TiltCard>
    </AnimatedSection>
  );
}