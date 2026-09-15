type IllustrationType = "ai-sorting";

const ILLUSTRATIONS: Record<IllustrationType, { src: string; alt: string; pillLabel: string }> = {
  "ai-sorting": {
    src: "/images/projects/ai_recruitment_workflow.jpg",
    alt: "Conceptual illustration of CVs being sorted and matched to a role",
    pillLabel: "Internal • Conceptual Visualization",
  },
};

export function InternalProjectIllustration({ type }: { type: IllustrationType }) {
  const illustration = ILLUSTRATIONS[type];

  return (
    <div className="relative flex h-full w-full items-center justify-center" style={{ background: "#F9F8F6" }}>
      <span className="absolute right-3 top-3 rounded-[var(--radius-chip)] border border-[var(--border)] bg-white/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.06em] text-[var(--muted)] backdrop-blur-sm">
        {illustration.pillLabel}
      </span>
      <img src={illustration.src} alt={illustration.alt} className="w-[80%]" />
    </div>
  );
}
