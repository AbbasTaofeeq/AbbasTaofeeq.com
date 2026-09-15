"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest("a[href*='#']") as HTMLAnchorElement | null;
      if (!anchor) return;
      // anchor.href (not getAttribute) so relative hrefs like "/#contact" resolve to a full URL.
      const url = new URL(anchor.href, window.location.href);
      if (url.pathname !== window.location.pathname) return; // different route — let normal navigation happen
      const id = url.hash.slice(1);
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target, { offset: -80 });
    };
    document.addEventListener("click", onAnchorClick);

    let frameId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
