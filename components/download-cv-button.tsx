"use client";

import { Download } from "lucide-react";

const CV_PATH = "/cv/Abbas-Taofeeq-CV.pdf";
const CV_FILENAME = "Abbas-Taofeeq-CV.pdf";

type Props = { className?: string };

export function DownloadCvButton({ className }: Props) {
  return (
    <a
      href={CV_PATH}
      download={CV_FILENAME}
      className={
        className ??
        "inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-white px-4 py-2.5 text-[13.5px] font-medium text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition shadow-sm"
      }
    >
      Download CV
      <Download className="h-4 w-4" />
    </a>
  );
}
