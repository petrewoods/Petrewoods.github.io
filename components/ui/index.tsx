import Link from "next/link";
import type { ReactNode } from "react";

// Layout primitives, editorial labels, cards, timelines and a system-flow diagram.
// Kept presentational and theme-agnostic via Tailwind utilities.

type Div = { children: ReactNode; className?: string };

export function Container({ children, className = "" }: Div) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, className = "" }: Div) {
  return (
    <span
      className={`font-mono text-xs uppercase tracking-[var(--tracking-label)] text-muted ${className}`}
    >
      {children}
    </span>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return <hr className={`border-0 border-t border-line ${className}`} />;
}

// Inline icons (stroke = currentColor), kept tiny for meta chips.
const iconBase = {
  width: 15,
  height: 15,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PinIcon() {
  return (
    <svg {...iconBase} aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function CapIcon() {
  return (
    <svg {...iconBase} aria-hidden="true">
      <path d="M22 9 12 5 2 9l10 4 10-4Z" />
      <path d="M6 11v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
    </svg>
  );
}

export function BadgeIcon() {
  return (
    <svg {...iconBase} aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 7h6M9 11h6M9 15h3" />
    </svg>
  );
}

// Icon + labelled value, used for the hero credential row.
export function MetaItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label?: string;
  value: string;
}) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-faint">{icon}</span>
      <span className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-muted">
        {label ? <span className="text-faint">{label} </span> : null}
        {value}
      </span>
    </span>
  );
}

export function SectionHeading({
  index,
  label,
  title,
  className = "",
}: {
  index?: string;
  label?: string;
  title: ReactNode;
  className?: string;
}) {
  return (
    <header className={`grid gap-4 sm:grid-cols-[8rem_1fr] sm:gap-10 ${className}`}>
      <div className="flex items-baseline gap-3 pt-2">
        {index ? (
          <span className="font-mono text-xs text-faint">{index}</span>
        ) : null}
        {label ? <Eyebrow>{label}</Eyebrow> : null}
      </div>
      <h2 className="font-serif text-heading text-ink text-balance">{title}</h2>
    </header>
  );
}

export function Card({ children, className = "" }: Div) {
  return (
    <div
      className={`rounded-xl border border-line bg-paper-raised p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function Stat({
  value,
  label,
  className = "",
}: {
  value: ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="font-serif text-3xl text-ink sm:text-4xl">{value}</div>
      <div className="mt-1 font-mono text-xs uppercase tracking-[var(--tracking-label)] text-muted">
        {label}
      </div>
    </div>
  );
}

export function Timeline({ children }: { children: ReactNode }) {
  return <ol className="relative ml-px border-l border-line">{children}</ol>;
}

export function TimelineItem({
  marker,
  title,
  meta,
  children,
}: {
  marker: string;
  title: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <li className="relative pb-10 pl-8 last:pb-0">
      <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-ink bg-paper" />
      <div className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-muted">
        {marker}
      </div>
      <h3 className="mt-2 font-serif text-lg text-ink">{title}</h3>
      {meta ? <div className="mt-0.5 text-sm text-muted">{meta}</div> : null}
      {children ? (
        <div className="mt-2 text-sm leading-relaxed text-ink-soft">{children}</div>
      ) : null}
    </li>
  );
}

// Horizontal pipeline diagram: stages flow left → right, wrapping on small screens.
export function SystemFlow({
  stages,
  dark = false,
}: {
  stages: { label: string; detail?: string }[];
  dark?: boolean;
}) {
  const box = dark
    ? "border-night-line bg-night-raised text-zinc-100"
    : "border-line bg-paper-raised text-ink";
  const arrow = dark ? "text-zinc-600" : "text-faint";
  return (
    <div className="flex flex-wrap items-stretch gap-3">
      {stages.map((s, i) => (
        <div key={s.label} className="flex items-stretch gap-3">
          <div className={`min-w-[9rem] flex-1 rounded-lg border p-4 ${box}`}>
            <div className="font-mono text-xs uppercase tracking-[var(--tracking-label)] opacity-60">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="mt-1.5 font-serif text-base leading-tight">{s.label}</div>
            {s.detail ? (
              <div className="mt-1 text-xs leading-relaxed opacity-70">{s.detail}</div>
            ) : null}
          </div>
          {i < stages.length - 1 ? (
            <div className={`flex items-center font-mono text-lg ${arrow}`}>→</div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/80 backdrop-blur">
      <Container className="flex h-14 items-center justify-between">
        <Link
          href="/"
          className="font-serif text-base text-ink transition-opacity hover:opacity-60"
        >
          Dr Peter Woods
        </Link>
        <nav className="flex items-center gap-5 font-mono text-xs uppercase tracking-[var(--tracking-label)] text-muted">
          <Link href="/work" className="transition-colors hover:text-ink">
            Work
          </Link>
          <Link href="/about" className="transition-colors hover:text-ink">
            About
          </Link>
          <a
            href="mailto:peter.woods@me.com"
            className="transition-colors hover:text-ink"
          >
            Contact
          </a>
        </nav>
      </Container>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-28 border-t border-line">
      <Container className="flex flex-col gap-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>Dr Peter Woods · Physician, researcher &amp; builder</span>
        <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[var(--tracking-label)]">
          <a
            href="mailto:peter.woods@me.com"
            className="transition-colors hover:text-ink"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/DrPWoods/"
            className="transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/petrewoods"
            className="transition-colors hover:text-ink"
          >
            GitHub
          </a>
          <a
            href="https://orcid.org/0000-0002-0910-8291"
            className="transition-colors hover:text-ink"
          >
            ORCID
          </a>
          <a
            href="/Dr-Peter-Woods-CV.pdf"
            className="transition-colors hover:text-ink"
          >
            CV
          </a>
        </div>
      </Container>
    </footer>
  );
}
