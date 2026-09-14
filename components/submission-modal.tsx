"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";

interface SubmissionModalProps {
  isOpen: boolean;
  type: "success" | "error";
  message?: string;
}

export function SubmissionModal({ isOpen, type, message }: SubmissionModalProps) {
  const isSuccess = type === "success";
  const shouldReduceMotion = useReducedMotion();
  const tone = isSuccess ? "var(--accent)" : "var(--clay)";

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16, scale: shouldReduceMotion ? 1 : 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: shouldReduceMotion
        ? { duration: 0.2 }
        : { type: "spring" as const, stiffness: 260, damping: 24 }
    },
    exit: { opacity: 0, y: shouldReduceMotion ? 0 : 10, scale: shouldReduceMotion ? 1 : 0.98, transition: { duration: 0.2 } }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--foreground)]/40 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />

          <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center px-6">
            <motion.div
              role="status"
              aria-live="polite"
              className="pointer-events-auto w-full max-w-sm rounded-[16px] border border-[var(--border)] bg-[var(--card-bg)] p-7 text-center shadow-[0_24px_64px_rgba(0,0,0,0.18)]"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div
                className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full border-2"
                style={{ borderColor: tone, background: isSuccess ? "var(--accent-soft)" : "var(--clay-soft)" }}
              >
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
                  <motion.path
                    d={isSuccess ? "M6 13.5 11 18.5 20 8" : "M8 8 18 18 M18 8 8 18"}
                    stroke={tone}
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: shouldReduceMotion ? 1 : 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, delay: shouldReduceMotion ? 0 : 0.15, ease: [0.65, 0, 0.35, 1] }}
                  />
                </svg>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.3, duration: 0.4 }}
                className="font-display text-[20px] font-semibold text-[var(--foreground)]"
              >
                {isSuccess ? "Message sent" : "Something went wrong"}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.38, duration: 0.4 }}
                className="mt-2 text-[14px] leading-6 text-[var(--muted)]"
              >
                {isSuccess
                  ? "Thanks for reaching out — I'll reply within a day or two."
                  : message || "Your message wasn't sent. Please try again."}
              </motion.p>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
