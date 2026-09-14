"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";
import { SPRING } from "@/lib/motion";

const MAX_OFFSET = 10;
const PULL = 0.35;

type MagneticButtonProps = {
  as?: "a" | "button";
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement> & ButtonHTMLAttributes<HTMLButtonElement>, "as">;

export function MagneticButton({ as = "a", children, className, ...props }: MagneticButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const reduced = !!shouldReduceMotion;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING.magnetic);
  const springY = useSpring(y, SPRING.magnetic);

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const relX = event.clientX - (bounds.left + bounds.width / 2);
    const relY = event.clientY - (bounds.top + bounds.height / 2);
    x.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relX * PULL)));
    y.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relY * PULL)));
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = reduced ? (
    <span className="inline-flex items-center gap-2">{children}</span>
  ) : (
    <motion.span style={{ x: springX, y: springY }} className="inline-flex items-center gap-2">
      {children}
    </motion.span>
  );

  if (as === "button") {
    return (
      <button
        type="button"
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        className={className}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {inner}
      </button>
    );
  }

  return (
    <a
      {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {inner}
    </a>
  );
}
