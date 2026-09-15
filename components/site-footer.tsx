import type { NavItem } from "@/lib/data";

type SiteFooterProps = {
  navItems: NavItem[];
  socialLinks: Array<{ label: string; href: string; icon: React.ComponentType<{ className?: string }>; external: boolean }>;
};

export function SiteFooter({ navItems, socialLinks }: SiteFooterProps) {
  return (
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
  );
}
