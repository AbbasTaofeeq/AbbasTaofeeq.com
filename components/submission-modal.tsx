"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";

interface SubmissionModalProps {
  isOpen: boolean;
  type: "success" | "error";
  message?: string;
}

export function SubmissionModal({ isOpen, type, message }: SubmissionModalProps) {
  const isSuccess = type === "success";

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const modalVariants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
      y: 50
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.6
      }
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      y: 50,
      transition: { duration: 0.3 }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.4, duration: 0.5 }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: { duration: 2, repeat: Infinity }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />

          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
            <motion.div
              className="pointer-events-auto relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Glow effect */}
              <div
                className={`absolute inset-0 blur-2xl opacity-30 rounded-2xl ${
                  isSuccess ? "bg-green-500" : "bg-red-500"
                }`}
                style={{ transform: "scale(1.1)" }}
              />

              {/* Modal Card */}
              <div
                className={`relative w-96 mx-auto p-8 rounded-2xl text-center ${
                  isSuccess
                    ? "bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/30"
                    : "bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30"
                }`}
              >
                {/* Icon */}
                <motion.div
                  variants={pulseVariants}
                  animate="animate"
                  className="mb-6"
                >
                  <motion.div
                    variants={iconVariants}
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${
                      isSuccess
                        ? "bg-green-500/20 border-2 border-green-500"
                        : "bg-red-500/20 border-2 border-red-500"
                    }`}
                  >
                    {isSuccess ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      >
                        <Check className={`w-10 h-10 ${isSuccess ? "text-green-400" : "text-red-400"}`} />
                      </motion.div>
                    ) : (
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        <span className="text-4xl">😢</span>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>

                {/* Text Content */}
                <motion.h2
                  variants={textVariants}
                  className={`text-2xl font-bold mb-2 ${
                    isSuccess ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {isSuccess ? "Message Sent! 🎉" : "Oops! Something went wrong"}
                </motion.h2>

                <motion.p
                  variants={textVariants}
                  className="text-white/70 text-sm leading-relaxed"
                >
                  {isSuccess
                    ? "Thank you for reaching out. I'll get back to you as soon as possible!"
                    : message || "Failed to send your message. Please try again."}
                </motion.p>

                {/* Animated line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className={`mt-6 h-1 ${isSuccess ? "bg-gradient-to-r from-transparent via-green-500 to-transparent" : "bg-gradient-to-r from-transparent via-red-500 to-transparent"}`}
                />

                {/* Sparkles for success */}
                {isSuccess && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                      className="absolute top-4 left-4 text-2xl"
                    >
                      ✨
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1, duration: 0.4 }}
                      className="absolute bottom-4 right-4 text-2xl"
                    >
                      ✨
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
