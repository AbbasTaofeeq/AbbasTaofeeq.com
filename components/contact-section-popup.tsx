"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Mail } from "lucide-react";

export function ContactSectionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasShown) {
          setIsOpen(true);
          setHasShown(true);
        }
      },
      { threshold: 0.3 }
    );

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => {
      if (contactSection) {
        observer.unobserve(contactSection);
      }
    };
  }, [hasShown]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.3 } }
  };

  const modalVariants = {
    hidden: {
      scale: 0.3,
      opacity: 0,
      y: 100
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6
      }
    },
    exit: {
      scale: 0.3,
      opacity: 0,
      y: 100,
      transition: { duration: 0.3 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <motion.div
              className="pointer-events-auto relative w-full max-w-sm mx-4"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Gradient glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 via-blue-500/10 to-purple-500/20 rounded-2xl blur-2xl opacity-40" />

              {/* Modal Card */}
              <div className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90 p-8 shadow-2xl">
                {/* Close button */}
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-5 right-5 p-1.5 rounded-lg hover:bg-white/10 transition-colors text-white/60 hover:text-white"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>

                <motion.div
                  className="space-y-5"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Header */}
                  <motion.div variants={itemVariants}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-teal-400" />
                      <span className="text-xs font-semibold text-teal-300 uppercase tracking-wide">
                        Quick Note
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Let&apos;s connect! 👋
                    </h3>
                  </motion.div>

                  {/* Message */}
                  <motion.p
                    variants={itemVariants}
                    className="text-white/75 leading-relaxed"
                  >
                    I&apos;m here to chat about opportunities, collaborations, or
                    projects. You can either fill out the contact form below or
                    reach me directly on social media.
                  </motion.p>

                  {/* Response time highlight */}
                  <motion.div
                    variants={itemVariants}
                    className="rounded-lg border border-teal-500/30 bg-teal-500/10 p-4"
                  >
                    <p className="text-sm text-teal-100 font-medium">
                      ⚡ I&apos;ll reply within{" "}
                      <span className="font-bold text-teal-300">2 hours</span>
                    </p>
                  </motion.div>

                  {/* Options */}
                  <motion.div variants={itemVariants} className="space-y-3 pt-2">
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-wide">
                      Your options
                    </p>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          document.getElementById("message")?.focus();
                        }}
                        className="group flex items-center gap-3 rounded-lg border border-teal-500/40 bg-teal-500/10 hover:bg-teal-500/20 transition-all p-3 text-left"
                      >
                        <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white group-hover:text-teal-200">
                            Use Contact Form
                          </p>
                          <p className="text-xs text-white/50">
                            Fill the form below
                          </p>
                        </div>
                      </button>

                      <button
                        onClick={() => {
                          window.open("https://x.com/AbbasTaofeeq", "_blank");
                          setIsOpen(false);
                        }}
                        className="group flex items-center gap-3 rounded-lg border border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/20 transition-all p-3 text-left"
                      >
                        <MessageCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white group-hover:text-blue-200">
                            Message on Social
                          </p>
                          <p className="text-xs text-white/50">
                            X / Twitter, LinkedIn, etc.
                          </p>
                        </div>
                      </button>
                    </div>
                  </motion.div>

                  {/* Footer text */}
                  <motion.p
                    variants={itemVariants}
                    className="text-xs text-white/40 text-center pt-2"
                  >
                  
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
