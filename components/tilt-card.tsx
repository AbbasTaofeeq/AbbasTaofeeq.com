"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { SPRING } from "@/lib/motion";

const MAX_TILT = 4; // degrees

export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const reduced = !!shouldReduceMotion;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const springX = useSpring(px, SPRING.magnetic);
  const springY = useSpring(py, SPRING.magnetic);
  const rotateX = useTransform(springY, [0, 1], [MAX_TILT, -MAX_TILT]);
  const rotateY = useTransform(springX, [0, 1], [-MAX_TILT, MAX_TILT]);

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - bounds.left) / bounds.width);
    py.set((event.clientY - bounds.top) / bounds.height);
  };

  const onMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={className} style={{ perspective: 1000 }}>
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
