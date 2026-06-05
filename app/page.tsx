import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Mail,
  Rocket,
  Sparkles
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { ProjectCard } from "@/components/project-card";
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
    <main className="min-h-screen overflow-hidden bg-[#07080c] text-white">
      <SiteHeader navItems={navItems} />

      <section
        id="home"
        className="relative flex min-h-[92vh] items-center border-b border-white/10 px-5 pt-28 sm:px-8 lg:px-10"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(20,184,166,0.2),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(96,165,250,0.18),transparent_30%),linear-gradient(180deg,#07080c_0%,#0d1017_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:64px_64px]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <AnimatedSection className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-teal-100">
              <Sparkles className="h-4 w-4 text-teal-300" />
              Frontend engineering with AI-aware product thinking
            </p>
            <h1 className="font-display text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.88] tracking-normal">
              Abbas
              <span className="block text-white/55">Taofeeq</span>
            </h1>
            <h2 className="mt-7 max-w-3xl text-balance text-2xl font-medium leading-tight text-white sm:text-3xl">
              Frontend Engineer specializing in AI-powered, high-conversion web
              applications.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
              I help teams build fast, intelligent, user-focused digital
              products that improve engagement, simplify workflows, and support
              measurable business outcomes.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="btn-primary" href="#projects">
                View Projects
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a className="btn-secondary" href="#contact">
                Let&apos;s Work Together
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.12} className="relative">
            <div className="absolute -inset-5 rounded-[2rem] border border-teal-300/10 bg-teal-300/[0.03] blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-[#10131b]/88 p-5 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-white/52">Portfolio signal</p>
                  <p className="mt-1 font-display text-2xl font-semibold">
                    Remote-ready product engineer
                  </p>
                </div>
                <div className="rounded-full border border-teal-300/25 bg-teal-300/10 p-3 text-teal-200">
                  <Rocket className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="font-display text-3xl font-semibold">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/58">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-[#080a10] p-4">
                <div className="mb-4 flex items-center gap-2 text-sm text-white/58">
                  <span className="h-2.5 w-2.5 rounded-full bg-teal-300" />
                  Product stack snapshot
                </div>
                <div className="space-y-3">
                  {[
                    ["Next.js / React", "94%"],
                    ["AI integration", "86%"],
                    ["Conversion-focused UI", "90%"]
                  ].map(([label, width]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="text-white/76">{label}</span>
                        <span className="text-white/42">{width}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/8">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-teal-300 to-sky-300"
                          style={{ width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="about" className="section-band">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedSection>
            <p className="section-kicker">About</p>
            <h2 className="section-title">Engineering for product outcomes.</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.08} className="space-y-6">
            <p className="text-xl leading-9 text-white/72">
              I am a Frontend Engineer with 4+ years of experience building
              result-driven web products with Next.js, React.js, JavaScript, and
              modern frontend tooling. My work sits where clean interfaces,
              performance, and business goals meet.
            </p>
            <p className="text-lg leading-8 text-white/60">
              Across public and private sector products, I have delivered
              responsive interfaces, accessible user journeys, and conversion
              focused websites. I also integrate AI solutions into products to
              improve automation, optimization, engagement, and decision flow.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Open to remote roles",
                "Frontend + AI integration",
                "Public and private sector delivery"
              ].map((item) => (
                <span key={item} className="pill">
                  <CheckCircle2 className="h-4 w-4 text-teal-300" />
                  {item}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section id="skills" className="section-band bg-[#0b0e14]">
        <div className="section-inner">
          <AnimatedSection className="max-w-3xl">
            <p className="section-kicker">Skills / Expertise</p>
            <h2 className="section-title">
              The frontend craft, sharpened for AI-enabled products.
            </h2>
          </AnimatedSection>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {expertise.map((group, index) => (
              <AnimatedSection
                delay={index * 0.04}
                key={group.category}
                className="expertise-card"
              >
                <group.icon className="h-5 w-5 text-teal-200" />
                <h3 className="mt-5 font-display text-xl font-semibold">
                  {group.category}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="skill-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-band">
        <div className="section-inner">
          <AnimatedSection className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="section-kicker">Featured Projects</p>
              <h2 className="section-title">
                Selected products I&apos;ve built across education, consulting,
                housing, and AI-enhanced digital experiences.
              </h2>
            </div>
            <a className="btn-secondary w-fit" href="#contact">
              Discuss a Project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </AnimatedSection>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
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

      <section id="experience" className="section-band bg-[#0b0e14]">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <AnimatedSection>
            <p className="section-kicker">Experience Snapshot</p>
            <h2 className="section-title">
              Product delivery across frontend, automation, and support.
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {experience.map((role, index) => (
              <AnimatedSection
                delay={index * 0.05}
                key={`${role.title}-${role.company}`}
                className="timeline-card"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-teal-200">{role.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/52">
                    {role.period}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-white/62">{role.summary}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="section-band">
        <div className="section-inner">
          <AnimatedSection className="max-w-3xl">
            <p className="section-kicker">Certifications</p>
            <h2 className="section-title">
              Verified learning across AI and frontend engineering.
            </h2>
          </AnimatedSection>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {certifications.map((cert, index) => (
              <AnimatedSection
                delay={index * 0.05}
                key={cert}
                className="cert-card"
              >
                <Award className="h-6 w-6 text-teal-200" />
                <p className="font-display text-xl font-semibold">{cert}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-band bg-[#0b0e14]">
        <div className="section-inner grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <AnimatedSection>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">
              Hiring for frontend, AI-focused roles, or product growth?
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/64">
              I am available for remote opportunities, AI-focused frontend
              roles, and freelance or contract work for businesses that need
              polished, high-conversion digital products.
            </p>
            <div className="mt-8 grid gap-3">
              {contactLinks.map((link) => (
                <a
                  className="contact-link"
                  href={link.href}
                  key={link.label}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-white/36" />
                </a>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.08}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/52 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Abbas Taofeeq. All rights reserved.</p>
          <nav className="flex flex-wrap gap-4" aria-label="Footer">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                className="icon-link"
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
