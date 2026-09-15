"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import type { NavItem } from "@/lib/data";
import { DURATION, EASE_OUT } from "@/lib/motion";

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
  socialLinks: Array<{ label: string; href: string }>;
};

export function MenuOverlay({ open, onClose, navItems, socialLinks }: MenuOverlayProps) {
  const shouldReduceMotion = useReducedMotion();
  const reduced = !!shouldReduceMotion;

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            key="menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? DURATION.fast : DURATION.base, ease: EASE_OUT }}
            className="fixed inset-0 z-[55] bg-[var(--foreground)]/30 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            key="menu-overlay"
            initial={reduced ? { opacity: 0 } : { x: "-100%" }}
            animate={reduced ? { opacity: 1 } : { x: "0%" }}
            exit={reduced ? { opacity: 0 } : { x: "-100%" }}
            transition={{ duration: reduced ? DURATION.fast : DURATION.hero, ease: EASE_OUT }}
            className="fixed inset-y-0 left-0 z-[60] flex w-full max-w-[560px] flex-col justify-between bg-[var(--surface-soft)] px-6 py-6 shadow-[0_12px_40px_rgba(27,29,25,0.12)] sm:px-10"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div>
              <button
                type="button"
                onClick={onClose}
                className="font-caps mb-10 inline-flex items-center gap-2 text-[11px] text-[var(--clay)] hover:text-[var(--foreground)] transition"
                aria-label="Close menu"
              >
                Close <span aria-hidden="true">✕</span>
              </button>

              <nav aria-label="Primary">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 28 }}
                      animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
                      transition={{ duration: reduced ? DURATION.fast : DURATION.base, delay: reduced ? 0 : 0.12 + index * 0.06, ease: EASE_OUT }}
                    >
                      <a
                        href={item.href}
                        onClick={onClose}
                        className="group flex items-baseline gap-3 py-2"
                      >
                        <span className="font-display text-[clamp(2.6rem,7vw,3.6rem)] font-semibold leading-[1.02] tracking-tight text-[var(--foreground)] transition-transform duration-300 group-hover:translate-x-2">
                          {item.label}
                        </span>
                        <sup className="font-[family-name:var(--font-mono)] text-[13px] text-[var(--clay)]">
                          {String(index + 1).padStart(2, "0")}
                        </sup>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>

            <motion.div
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ duration: reduced ? DURATION.fast : DURATION.base, delay: reduced ? 0 : 0.4, ease: EASE_OUT }}
            >
              <p className="font-caps mb-3 text-[11px] text-[var(--clay)]">Socials</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="link-draw text-[15px] font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
