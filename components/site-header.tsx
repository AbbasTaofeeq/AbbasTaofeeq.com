"use client";

import { useState } from "react";
import { MenuOverlay } from "@/components/menu-overlay";
import type { NavItem } from "@/lib/data";

type SiteHeaderProps = {
  navItems: NavItem[];
  socialLinks: Array<{ label: string; href: string }>;
};

export function SiteHeader({ navItems, socialLinks }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 px-5 py-4 backdrop-blur-md sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3" aria-label="Home">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--accent)] text-white font-display font-bold text-[14px]">
              AT
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-display font-semibold text-[15px] text-[var(--foreground)]">
                Abbas Taofeeq
              </span>
              <span className="font-caps block text-[10px] text-[var(--muted-2)]">
                Frontend + AI
              </span>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group inline-flex items-center gap-2 rounded-[var(--radius-chip)] border border-[var(--border)] bg-white/85 py-2.5 pl-4 pr-3 text-[13px] font-medium text-[var(--foreground)] shadow-sm backdrop-blur-md transition hover:border-[var(--foreground)]"
            aria-label="Open navigation"
            aria-expanded={open}
          >
            Menu
            <span aria-hidden="true" className="text-[15px] leading-none transition-transform duration-300 group-hover:rotate-45">
              +
            </span>
          </button>
        </div>
      </header>

      <MenuOverlay
        open={open}
        onClose={() => setOpen(false)}
        navItems={navItems}
        socialLinks={socialLinks}
      />
    </>
  );
}
