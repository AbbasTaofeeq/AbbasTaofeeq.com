// Shared framer-motion constants, mirroring app/globals.css's --ease-out.
// Keep the two in sync manually if either changes.
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
export const EASE_ENTER = [0.16, 1, 0.3, 1] as const;
export const EASE_DRAW = [0.65, 0, 0.35, 1] as const;

export const DURATION = {
  fast: 0.2,
  base: 0.32,
  section: 0.55,
  hero: 0.9,
} as const;

export const SPRING = {
  snappy: { type: "spring", stiffness: 260, damping: 24 } as const,
  magnetic: { type: "spring", stiffness: 150, damping: 15 } as const,
};
