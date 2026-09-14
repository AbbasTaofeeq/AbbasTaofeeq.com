"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { NavItem } from "@/lib/data";

type SiteHeaderProps = {
  navItems: NavItem[];
};

export function SiteHeader({ navItems }: SiteHeaderProps) {
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section instanceof Element);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(`#${visible.target.id}`);
        }
      },
      { rootMargin: "-24% 0px -58% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [navItems]);

  const renderLink = (item: NavItem) => (
    <a
      key={item.href}
      href={item.href}
      onClick={() => setOpen(false)}
      className={`font-caps rounded-full px-4 py-2 text-[11.5px] transition ${
        active === item.href
          ? "bg-[var(--accent)] text-white"
          : "text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-soft)]"
      }`}
    >
      {item.label}
    </a>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-white/80 px-5 py-3.5 backdrop-blur-xl sm:px-8 lg:px-10">
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

        <nav
          className="hidden items-center gap-1 rounded-full border border-[var(--border)] bg-[var(--background)] p-1 md:flex"
          aria-label="Primary"
        >
          {navItems.map(renderLink)}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className="hidden md:inline-flex min-h-9 rounded-full bg-[var(--accent)] px-4 py-2 text-[13.5px] font-medium text-white hover:bg-[var(--accent-hover)] transition shadow-sm"
            href="#contact"
          >
            Contact
          </a>

          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-[var(--border)] bg-white text-[var(--foreground)] md:hidden"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="mx-auto mt-3 grid max-w-[1280px] gap-1 rounded-2xl border border-[var(--border)] bg-white p-2 md:hidden shadow-sm"
          aria-label="Mobile"
        >
          {navItems.map(renderLink)}
        </nav>
      ) : null}
    </header>
  );
}
