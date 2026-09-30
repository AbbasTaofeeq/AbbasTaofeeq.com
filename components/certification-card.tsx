import { ArrowUpRight, Award } from "lucide-react";
import type { Certification } from "@/lib/data";

const cardBase =
  "flex h-full items-start gap-3 rounded-[var(--radius-tab)] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-tab)]";

function CardBody({ cert, linked }: { cert: Certification; linked: boolean }) {
  return (
    <>
      <Award className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
      <div className="min-w-0 flex-1">
        <p className="font-display text-[15px] font-semibold leading-snug text-[var(--foreground)]">{cert.title}</p>
        <p className="mt-1 text-[12.5px] text-[var(--muted-2)]">{cert.issuer}</p>
        {linked ? (
          <p className="mt-2.5 inline-flex items-center gap-1 text-[12.5px] font-semibold text-[var(--accent)]">
            Verify on Microsoft Learn
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </p>
        ) : null}
      </div>
    </>
  );
}

export function CertificationCard({ cert }: { cert: Certification }) {
  if (!cert.href) {
    return (
      <div className={cardBase}>
        <CardBody cert={cert} linked={false} />
      </div>
    );
  }

  return (
    <a
      href={cert.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${cert.title}: verify on Microsoft Learn (opens in a new tab)`}
      className={`${cardBase} group relative transition-[border-color,box-shadow] duration-200 hover:border-[var(--accent)] hover:shadow-[var(--shadow-tab-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]`}
    >
      <CardBody cert={cert} linked />

      {cert.image ? (
        <>
          {/* Touch screens have no hover, so show the certificate inline as a thumbnail. */}
          <img
            src={cert.image}
            alt=""
            width={1082}
            height={767}
            loading="lazy"
            className="hidden w-24 shrink-0 self-center rounded-[3px] border border-[var(--border)] [@media(hover:none)]:block"
          />

          {/* Pointer and keyboard users get a floating preview above the card. */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[calc(100%+12px)] left-0 z-30 hidden w-[min(22rem,calc(100vw-3rem))] origin-bottom-left translate-y-2 scale-95 rounded-[var(--radius-tab)] border border-[var(--border-strong)] bg-white p-2 opacity-0 shadow-[var(--shadow-tab-hover)] transition-[opacity,transform] duration-200 ease-[var(--ease-out)] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:scale-100 group-focus-visible:opacity-100 [@media(hover:hover)]:block"
          >
            <img
              src={cert.image}
              alt=""
              width={1082}
              height={767}
              loading="lazy"
              className="block h-auto w-full rounded-[2px]"
            />
          </span>
        </>
      ) : null}
    </a>
  );
}
