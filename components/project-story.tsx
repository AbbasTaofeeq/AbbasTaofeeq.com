import { AnimatedSection } from "@/components/animated-section";
import type { Project } from "@/content/projects";

export function ProjectStory({ project }: { project: Project }) {
  const fixHeading = project.outcomeType === "team" ? "What We Did To Fix It" : "What I Did To Fix It";

  const sections = [
    { heading: "The Problem", body: project.story.problem },
    { heading: "What Was At Stake", body: project.story.stake },
    { heading: fixHeading, body: project.story.fix },
    { heading: "What Changed After", body: project.story.result },
  ];

  return (
    <section className="border-b border-[var(--border)] px-6 py-16 sm:px-10">
      <div className="mx-auto w-full max-w-[760px]">
        <div className="space-y-10">
          {sections.map((section) => (
            <AnimatedSection key={section.heading}>
              <h2 className="font-display text-h3 font-semibold tracking-tight text-[var(--foreground)]">
                {section.heading}
              </h2>
              <p className="mt-3 text-[16px] leading-8 text-[var(--muted)]">{section.body}</p>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-12 border-t border-[var(--divider)] pt-6">
          <p className="font-caps text-[11px] text-[var(--muted-2)]">Stack</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-[var(--radius-chip)] border border-[var(--border)] bg-white px-2.5 py-1 text-[11.5px] [font-family:var(--font-mono)] text-[var(--muted)]"
              >
                {item}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
