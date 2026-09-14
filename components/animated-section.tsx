"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentProps } from "react";
import { DURATION, EASE_OUT } from "@/lib/motion";

type AnimatedSectionProps = ComponentProps<typeof motion.div> & {
  delay?: number;
};

export function AnimatedSection({
  children,
  delay = 0,
  ...props
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, transform: shouldReduceMotion ? "none" : "translateY(22px)" }}
      whileInView={{ opacity: 1, transform: "translateY(0)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: shouldReduceMotion ? DURATION.fast : DURATION.section, delay, ease: EASE_OUT }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
