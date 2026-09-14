import {
  ArrowUpRight,
  Award,
  Mail,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { DownloadCvButton } from "@/components/download-cv-button";
import { HeroHeadline } from "@/components/hero-headline";
import { MagneticButton } from "@/components/magnetic-button";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import {
  certifications,
  contactLinks,
  experience,
  expertise,
  navItems,
  projects,
  socialLinks,
  stats
} from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader
        navItems={navItems}
        socialLinks={socialLinks.map(({ label, href }) => ({ label, href }))}
      />

      {/* HERO - editorial masthead */}
      <section id="home" className="relative border-b border-[var(--border)] px-6 pt-32 pb-14 sm:px-10 lg:px-10">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
            <p className="[font-family:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              Frontend Engineer <span className="text-[var(--border-strong)]">—</span> Building Intelligent Web Apps
            </p>
            <p className="flex items-center gap-2 [font-family:var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-[var(--accent)]" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              </span>
              Abuja, NG · Available for work
            </p>
          </div>

          <div className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-6 lg:py-20">
            <div className="lg:col-span-7">
              <HeroHeadline />
            </div>

            <AnimatedSection delay={0.55} className="lg:col-span-5 lg:col-start-8 lg:mt-8">
              <p className="font-display text-[24px] italic leading-snug text-[var(--foreground)] sm:text-[27px]">
                for <span className="not-italic text-[var(--clay)]">intelligent</span>, AI-powered web applications.
              </p>
              <p className="mt-5 max-w-[440px] text-[16px] leading-7 text-[var(--muted)]">
                I don&apos;t just ship functional websites — I build frontend systems with AI integrated in, so the products I deliver for organizations and clients can automate, personalize, and adapt, not just display information.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <MagneticButton className="btn-primary" href="#projects">
                  View work
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton className="btn-secondary" href="#contact">
                  Let&apos;s talk
                  <Mail className="h-4 w-4" />
                </MagneticButton>
              </div>
              <DownloadCvButton className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--muted)] hover:text-[var(--accent)] transition" />
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 divide-x divide-[var(--border)] border-t border-[var(--border)] pt-8 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={0.05 * index} className="px-4 first:pl-0 sm:px-6">
                <p className="font-display text-stat font-semibold text-[var(--foreground)]">{stat.value}</p>
                <p className="mt-1 text-[12.5px] leading-5 text-[var(--muted)]">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-[var(--border)] px-6 py-24 sm:px-10">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedSection>
            <SectionHeading index="01" label="About">
              Frontend engineering, with AI built in — not bolted on.
            </SectionHeading>
          </AnimatedSection>
          <AnimatedSection delay={0.08} className="space-y-6 lg:pt-6">
            <p className="text-[18px] leading-8 text-[var(--foreground)]">
              I&apos;m a Frontend Engineer with 3+ years building production web applications in React, Next.js, and TypeScript. My focus isn&apos;t just shipping functional interfaces — it&apos;s building frontend systems with AI integrated from the start, so the products I deliver do more: automate decisions, personalize experiences, and adapt to the people using them.
            </p>
            <p className="text-[16px] leading-7 text-[var(--muted)]">
              Across consulting, education, and housing sector products, I have delivered responsive interfaces, accessible user journeys, and conversion-focused websites. That same AI-first approach cut manual workflow effort by 30% for HR and operations teams through Azure AI integration.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded-[var(--radius-chip)] border border-[var(--border)] bg-white px-3 py-1.5 text-[12px] font-medium text-[var(--muted)]">Open to remote roles</span>
              <span className="rounded-[var(--radius-chip)] border border-[var(--border)] bg-white px-3 py-1.5 text-[12px] font-medium text-[var(--muted)]">Frontend + AI integration</span>
              <span className="rounded-[var(--radius-chip)] border border-[var(--border)] bg-white px-3 py-1.5 text-[12px] font-medium text-[var(--muted)]">Public & private sector delivery</span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="skills" className="border-b border-[var(--border)] bg-white px-6 py-24 sm:px-10">
        <div className="mx-auto w-full max-w-[1280px]">
          <AnimatedSection className="max-w-3xl">
            <SectionHeading index="02" label="Skills">
              The frontend craft, sharpened for AI-enabled products.
            </SectionHeading>
          </AnimatedSection>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {expertise.map((group, index) => (
              <AnimatedSection
                delay={index * 0.04}
                key={group.category}
                className="rounded-[var(--radius-tab)] border border-[var(--border)] bg-[var(--background)] p-5 shadow-[var(--shadow-tab)]"
              >
                <group.icon className="h-5 w-5 text-[var(--accent)]" />
                <h3 className="mt-4 font-display text-h3 font-semibold text-[var(--foreground)]">
                  {group.category}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-[var(--radius-chip)] border border-[var(--border)] bg-white px-2.5 py-1 text-[11.5px] [font-family:var(--font-mono)] text-[var(--muted)]">
                      {item}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-b border-[var(--border)] px-6 py-24 sm:px-10">
        <div className="mx-auto w-full max-w-[1280px]">
          <AnimatedSection className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <SectionHeading index="03" label="Selected Work">
                Real products, real users, real impact.
              </SectionHeading>
              <p className="mt-3 text-[15px] leading-6 text-[var(--muted)]">Corporate sites, learning platforms, and AI-driven tools — each built to do more than just look good.</p>
            </div>
            <a className="inline-flex w-fit items-center gap-2 rounded-[var(--radius-chip)] border border-[var(--border)] bg-white px-4 py-2 text-[13px] font-medium text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white transition" href="#contact">
              Discuss a Project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </AnimatedSection>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                delay={index * 0.04}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-b border-[var(--border)] bg-white px-6 py-24 sm:px-10">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedSection>
            <SectionHeading index="04" label="Experience">
              Product delivery across frontend, automation, and support.
            </SectionHeading>
          </AnimatedSection>
          <div className="space-y-4 lg:pt-6">
            {experience.map((role, index) => (
              <AnimatedSection
                delay={index * 0.05}
                key={`${role.title}-${role.company}`}
                className="rounded-[var(--radius-tab)] border border-[var(--border)] bg-[var(--background)] p-5 shadow-[var(--shadow-tab)]"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-h3 font-semibold text-[var(--foreground)]">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-[13px] font-medium text-[var(--accent)]">{role.company}</p>
                  </div>
                  <span className="w-fit rounded-[var(--radius-chip)] border border-[var(--border)] bg-white px-3 py-1 text-[11px] [font-family:var(--font-mono)] text-[var(--muted-2)]">
                    {role.period}
                  </span>
                </div>
                <p className="mt-3 text-[14px] leading-6 text-[var(--muted)]">{role.summary}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="border-b border-[var(--border)] px-6 py-24 sm:px-10">
        <div className="mx-auto w-full max-w-[1280px]">
          <AnimatedSection className="max-w-3xl">
            <SectionHeading index="05" label="Certifications">
              Verified learning across AI and frontend engineering.
            </SectionHeading>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <AnimatedSection
                delay={index * 0.05}
                key={cert}
                className="flex items-center gap-3 rounded-[var(--radius-tab)] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-tab)]"
              >
                <Award className="h-5 w-5 text-[var(--accent)]" />
                <p className="font-display text-[15px] font-semibold text-[var(--foreground)]">{cert}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 sm:px-10 bg-[var(--background)]">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <AnimatedSection>
            <SectionHeading index="06" label="Contact">
              Hiring for frontend, AI-focused roles, or product growth?
            </SectionHeading>
            <p className="mt-4 text-[16px] leading-7 text-[var(--muted)]">
              I am available for remote opportunities, AI-focused frontend roles, and freelance work for organizations that want their web products to be intelligent, not just functional.
            </p>
            <div className="mt-8 grid gap-2.5">
              {contactLinks.map((link) => (
                <a
                  className="flex items-center gap-3 rounded-[var(--radius-tab)] border border-[var(--border)] bg-white p-3.5 text-[14px] text-[var(--muted)] shadow-[var(--shadow-tab)] transition hover:border-[var(--accent)] hover:bg-[var(--surface-soft)] hover:text-[var(--foreground)] hover:shadow-[var(--shadow-tab-hover)]"
                  href={link.href}
                  key={link.label}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  <link.icon className="h-4 w-4" />
                  <span>{link.label}</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 opacity-40" />
                </a>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>

      <footer className="border-t border-[var(--border)] bg-white px-6 py-8 sm:px-10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 text-[13px] text-[var(--muted-2)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Abbas Taofeeq. All rights reserved.</p>
          <nav className="flex flex-wrap gap-4" aria-label="Footer">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="link-draw text-[var(--muted-2)] hover:text-[var(--foreground)]">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-2.5">
            {socialLinks.map((link) => (
              <a
                className="grid h-8 w-8 place-items-center rounded-[var(--radius-chip)] border border-[var(--border)] bg-white text-[var(--muted-2)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition"
                href={link.href}
                key={link.label}
                aria-label={link.label}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
