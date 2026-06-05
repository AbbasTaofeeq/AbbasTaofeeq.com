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
      className={`rounded-full px-3 py-2 text-sm transition ${
        active === item.href
          ? "bg-white text-[#07080c]"
          : "text-white/62 hover:bg-white/8 hover:text-white"
      }`}
    >
      {item.label}
    </a>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07080c]/78 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3" aria-label="Home">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-teal-300/30 bg-teal-300/10 font-display font-semibold text-teal-100">
            AT
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-display font-semibold">
              Abbas Taofeeq
            </span>
            <span className="block text-xs text-white/45">
              Frontend + AI Integration
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 md:flex"
          aria-label="Primary"
        >
          {navItems.map(renderLink)}
        </nav>

        <a className="btn-secondary hidden min-h-11 px-4 md:inline-flex" href="#contact">
          Contact
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-white md:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav
          className="mx-auto mt-4 grid max-w-7xl gap-2 rounded-2xl border border-white/10 bg-[#0d1017] p-3 md:hidden"
          aria-label="Mobile"
        >
          {navItems.map(renderLink)}
        </nav>
      ) : null}
    </header>
  );
}
