import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work by Dr Peter Woods — clinical software, applied AI, data and interactive media.",
};

const groups = [
  {
    label: "Clinical software",
    items: [
      {
        name: "Portfol.io",
        status: "Live · iOS",
        href: "/projects/portfolio",
        blurb:
          "On-device-anonymised dictation portfolio for UK doctors and trainees — structured ePortfolio entries mapped to CiPs and GPCs.",
      },
      {
        name: "MedPrep",
        status: "Live · iOS",
        href: "/projects/medprep",
        blurb:
          "High-fidelity mock interview tool with instant AI feedback, for IMT, ST and specialty applicants.",
      },
      {
        name: "Pause",
        status: "Spun out · advisory",
        href: "/about#publications",
        blurb:
          "Co-founded and led from idea through a UKRI-funded Innovate UK accelerator to university spin-out — an evidence-based parenting app, now published across JMIR and BJPsych Open.",
      },
    ],
  },
  {
    label: "Data & experiments",
    items: [
      {
        name: "Match Model",
        status: "World Cup 2026",
        href: "/projects/football",
        blurb:
          "A Poisson prediction model for the 2026 World Cup, benchmarked week by week against bookmaker odds.",
      },
      {
        name: "WHOOP → WhatsApp",
        status: "Personal build",
        href: "/projects/whoop",
        blurb:
          "An automated bridge that refreshes WHOOP tokens daily, parses physiological webhooks and broadcasts a clean morning briefing.",
      },
      {
        name: "Annwn",
        status: "Hundred Heads",
        href: "/projects/annwn",
        blurb:
          "Interactive LED clouds that read the crowd below and answer in light — Fadecandy, a Raspberry Pi and a Kinect.",
      },
    ],
  },
];

export default function Work() {
  return (
    <div>
      <section className="border-b border-line">
        <Container className="py-20 sm:py-24">
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-muted transition-colors hover:text-ink"
          >
            ← Index
          </Link>
          <Reveal as="h1" className="mt-8 max-w-3xl font-serif text-title text-ink text-balance">
            Work
          </Reveal>
          <Reveal as="p" delay={80} className="mt-6 max-w-2xl text-lead text-ink-soft text-pretty">
            Clinical software I ship for doctors, alongside data projects and
            interactive media made out of curiosity.
          </Reveal>
        </Container>
      </section>

      {groups.map((g) => (
        <section key={g.label} className="border-b border-line last:border-0">
          <Container className="py-16 sm:py-20">
            <div className="grid gap-10 sm:grid-cols-[8rem_1fr] sm:gap-16">
              <div className="sm:sticky sm:top-24 sm:self-start">
                <Eyebrow>{g.label}</Eyebrow>
              </div>
              <ul className="border-t border-line">
                {g.items.map((it, i) => (
                  <Reveal as="li" key={it.name} delay={i * 70}>
                    <Link
                      href={it.href}
                      className="group grid gap-y-2 border-b border-line py-6 transition-colors hover:bg-paper-raised sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-x-8"
                    >
                      <div>
                        <h3 className="font-serif text-xl text-ink">
                          {it.name}
                          <span className="ml-3 align-middle font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
                            {it.status}
                          </span>
                        </h3>
                        <p className="mt-2 max-w-xl text-pretty text-ink-soft">
                          {it.blurb}
                        </p>
                      </div>
                      <span className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-muted transition-transform group-hover:translate-x-1 sm:justify-self-end">
                        →
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      ))}
    </div>
  );
}
