export function Kicker({ index, label }: { index: string; label: string }) {
  return (
    <p className="kicker mb-4">
      <span className="kicker-index">{index}</span>
      <span className="kicker-sep">/</span>
      <span className="kicker-index">06</span>
      <span className="kicker-sep">·</span>
      {label}
    </p>
  );
}

export function SectionHeading({
  index,
  label,
  children,
  className,
}: {
  index: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Kicker index={index} label={label} />
      <h2
        className={`font-display text-h2 font-semibold leading-[1.04] tracking-tight text-[var(--foreground)]${className ? ` ${className}` : ""}`}
      >
        {children}
      </h2>
    </>
  );
}
