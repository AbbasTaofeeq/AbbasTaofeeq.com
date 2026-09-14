"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function MaskLine({ children, reduced, delay }: { children: string; reduced: boolean; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={reduced ? { opacity: 0 } : { y: "110%" }}
        animate={reduced ? { opacity: 1 } : { y: "0%" }}
        transition={{ duration: reduced ? 0.4 : 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function UnderlineStroke({ reduced }: { reduced: boolean }) {
  return (
    <svg
      viewBox="0 0 320 16"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-1 left-0 h-[0.32em] w-full text-[var(--clay)] sm:-bottom-2"
    >
      <motion.path
        d="M2 10.5C58 3 130 2 178 7C226 12 268 6 318 8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        initial={reduced ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: reduced ? 0 : 0.95, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}

export function HeroHeadline() {
  const shouldReduceMotion = useReducedMotion();
  const reduced = !!shouldReduceMotion;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["-0.02em", "-0.06em"]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <div ref={ref}>
      <motion.h1
        style={reduced ? undefined : { letterSpacing, y, opacity }}
        className="font-display text-[clamp(3.4rem,9vw,6.4rem)] font-semibold leading-[0.88] tracking-tight text-[var(--foreground)]"
      >
        <MaskLine reduced={reduced} delay={0.15}>
          Abbas
        </MaskLine>
        <span className="relative inline-block">
          <MaskLine reduced={reduced} delay={0.3}>
            Taofeeq
          </MaskLine>
          <UnderlineStroke reduced={reduced} />
        </span>
      </motion.h1>
    </div>
  );
}
