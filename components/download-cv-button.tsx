"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, MessageCircle, X } from "lucide-react";

const CV_PATH = "/cv/Abbas-Taofeeq-CV.pdf";
const CV_FILENAME = "Abbas-Taofeeq-CV.pdf";

function triggerDownload() {
  const link = document.createElement("a");
  link.href = CV_PATH;
  link.download = CV_FILENAME;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

type DownloadCvButtonProps = {
  className?: string;
};

export function DownloadCvButton({ className }: DownloadCvButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMessageInstead = () => {
    setIsOpen(false);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    window.setTimeout(() => {
      document.getElementById("message")?.focus();
    }, 500);
  };

  const handleDownload = () => {
    triggerDownload();
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className={className ?? "btn-secondary"}
        onClick={() => setIsOpen(true)}
      >
        Download CV
        <Download className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              onClick={() => setIsOpen(false)}
            />

            <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center px-4">
              <motion.div
                className="pointer-events-auto relative w-full max-w-sm"
                initial={{ scale: 0.3, opacity: 0, y: 100 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring" as const,
                    stiffness: 300,
                    damping: 30,
                    duration: 0.6
                  }
                }}
                exit={{
                  scale: 0.3,
                  opacity: 0,
                  y: 100,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-500/20 via-blue-500/10 to-purple-500/20 opacity-40 blur-2xl" />

                <div className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/90 p-8 shadow-2xl">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="absolute right-5 top-5 rounded-lg p-1.5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                    type="button"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="space-y-5">
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-teal-400" />
                        <span className="text-xs font-semibold uppercase tracking-wide text-teal-300">
                          Before you download
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        Want to talk instead?
                      </h3>
                    </div>

                    <p className="leading-relaxed text-white/75">
                      You can message me directly and I&apos;ll reply
                      personally, or grab the PDF now &mdash; either works.
                    </p>

                    <div className="space-y-3 pt-2">
                      <button
                        onClick={handleMessageInstead}
                        className="group flex w-full items-center gap-3 rounded-lg border border-teal-500/40 bg-teal-500/10 p-3 text-left transition-all hover:bg-teal-500/20"
                        type="button"
                      >
                        <MessageCircle className="h-5 w-5 flex-shrink-0 text-teal-400" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white group-hover:text-teal-200">
                            Message me instead
                          </p>
                          <p className="text-xs text-white/50">
                            Jump to the contact form below
                          </p>
                        </div>
                      </button>

                      <button
                        onClick={handleDownload}
                        className="group flex w-full items-center gap-3 rounded-lg border border-white/15 bg-white/[0.04] p-3 text-left transition-all hover:bg-white/[0.08]"
                        type="button"
                      >
                        <Download className="h-5 w-5 flex-shrink-0 text-white/70" />
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white">
                            Continue to download
                          </p>
                          <p className="text-xs text-white/50">
                            Get the PDF now
                          </p>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
