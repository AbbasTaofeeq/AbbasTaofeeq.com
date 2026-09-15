import { ArrowUpRight, MessageSquare } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MagneticButton } from "@/components/magnetic-button";
import { ProjectHero } from "@/components/project-hero";
import { ProjectStory } from "@/components/project-story";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getProjectBySlug, projects } from "@/content/projects";
import { navItems, socialLinks } from "@/lib/data";

const SITE_URL = "https://abbastaofeeq.com";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const url = `${SITE_URL}/projects/${project.slug}`;

  return {
    title: `${project.seoTitle} | Abbas Taofeeq`,
    description: project.heroTldr,
    alternates: { canonical: url },
    openGraph: {
      title: project.seoTitle,
      description: project.heroTldr,
      type: "article",
      url,
      siteName: "Abbas Taofeeq Portfolio",
      ...(project.image ? { images: [{ url: project.image }] } : {})
    },
    twitter: {
      card: "summary_large_image",
      title: project.seoTitle,
      description: project.heroTldr
    }
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const url = `${SITE_URL}/projects/${project.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.heroTldr,
    url,
    ...(project.image ? { image: `${SITE_URL}${project.image}` } : {}),
    author: { "@type": "Person", name: "Abbas Taofeeq" },
    keywords: project.stack.join(", "),
    datePublished: project.year
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader navItems={navItems} socialLinks={socialLinks.map(({ label, href }) => ({ label, href }))} />

      <nav aria-label="Breadcrumb" className="border-b border-[var(--border)] px-6 pb-4 pt-28 sm:px-10">
        <div className="mx-auto flex w-full max-w-[1280px] items-center gap-2 [font-family:var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-[var(--muted-2)]">
          <a href="/" className="hover:text-[var(--accent)] transition">Home</a>
          <span aria-hidden="true">/</span>
          <a href="/#projects" className="hover:text-[var(--accent)] transition">Projects</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page" className="text-[var(--foreground)]">{project.title}</span>
        </div>
      </nav>

      <ProjectHero project={project} />
      <ProjectStory project={project} />

      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto flex w-full max-w-[760px] flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-h3 font-semibold text-[var(--foreground)]">
            Have a similar problem to solve?
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl ? (
              <MagneticButton className="btn-secondary" href={project.liveUrl} target="_blank" rel="noreferrer">
                View live site
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            ) : null}
            <MagneticButton className="btn-primary" href="/#contact">
              Discuss a similar project
              <MessageSquare className="h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </section>

      <SiteFooter navItems={navItems} socialLinks={socialLinks} />
    </main>
  );
}
