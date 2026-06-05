"use client";

import {
  ArrowUpRight,
  BriefcaseBusiness,
  ExternalLink,
  GraduationCap,
  Landmark,
  Rocket,
  Sparkles,
  X
} from "lucide-react";
import { useEffect, useId, useState } from "react";
import { AnimatedSection } from "@/components/animated-section";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
  delay?: number;
};

const caseStudySections = [
  ["Overview", "overview"],
  ["The Goal", "goal"],
  ["My Contribution", "contribution"],
  ["Outcome / Impact", "outcome"]
] as const;

const projectIcons = {
  ai: Sparkles,
  education: GraduationCap,
  housing: Landmark,
  startup: Rocket,
  corporate: BriefcaseBusiness
};

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const isExternal = project.link.startsWith("http");
  const Icon = projectIcons[project.icon];

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <AnimatedSection delay={delay} className="project-card group">
        <div className={`h-1.5 ${project.accent}`} />
        <div className="flex h-full flex-col p-6">
          <div className="flex items-start justify-between gap-4">
            <span className="project-badge">{project.type}</span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-white/58 transition group-hover:border-teal-300/30 group-hover:text-teal-200">
              <Icon className="h-5 w-5" />
            </span>
          </div>

          <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-white">
            {project.name}
          </h3>
          <p className="mt-4 line-clamp-3 leading-7 text-white/64">
            {project.description}
          </p>

          <div className="impact-strip mt-6">
            <p className="text-xs font-bold uppercase text-teal-200">Impact</p>
            <p className="mt-2 leading-7 text-white/72">{project.impact}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span className="skill-chip" key={item}>
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:mt-auto sm:flex-row sm:pt-7">
            <a
              className="btn-primary min-h-11 px-4"
              href={project.link}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
            >
              {isExternal ? "Live Site" : "Discuss AI Work"}
              <ExternalLink className="h-4 w-4" />
            </a>
            <button
              className="btn-secondary min-h-11 px-4"
              type="button"
              onClick={() => setOpen(true)}
            >
              View Case Study
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </AnimatedSection>

      {open ? (
        <div
          aria-labelledby={titleId}
          aria-modal="true"
          className="fixed inset-0 z-[80] bg-black/72 p-4 backdrop-blur-md sm:p-6"
          role="dialog"
        >
          <button
            className="absolute inset-0 h-full w-full cursor-default"
            type="button"
            aria-label="Close case study"
            onClick={() => setOpen(false)}
          />
          <div className="case-study-panel relative ml-auto flex h-full w-full max-w-3xl flex-col overflow-hidden">
            <div className={`h-1.5 ${project.accent}`} />
            <div className="flex items-start justify-between gap-5 border-b border-white/10 p-6 sm:p-8">
              <div>
                <span className="project-badge">{project.type}</span>
                <h3
                  id={titleId}
                  className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-5xl"
                >
                  {project.name}
                </h3>
                <p className="mt-4 max-w-2xl leading-8 text-white/64">
                  {project.description}
                </p>
                <a
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-200 hover:text-white"
                  href={project.link}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  {isExternal ? "Open live project" : "Start a conversation"}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <button
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white/70 transition hover:border-teal-300/30 hover:text-white"
                type="button"
                aria-label="Close case study"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="overflow-y-auto p-6 sm:p-8">
              <div className="grid gap-4">
                {caseStudySections.map(([label, key]) => (
                  <section className="case-study-section" key={key}>
                    <h4 className="font-display text-xl font-semibold text-white">
                      {label}
                    </h4>
                    <p className="mt-3 leading-8 text-white/64">
                      {project.caseStudy[key]}
                    </p>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
