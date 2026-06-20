import Link from "next/link";
import { Container, Eyebrow, Divider } from "@/components/ui";

const projects = [
  {
    no: "01",
    slug: "annwn",
    title: "Annwn",
    kind: "Interactive AV Installation",
    summary:
      "Interactive LED clouds for the Hundred Heads festival — Fadecandy, a Raspberry Pi and LED strips, made responsive to the crowd below with a Kinect.",
    year: "Hundred Heads",
  },
  {
    no: "02",
    slug: "whoop",
    title: "WHOOP → WhatsApp",
    kind: "API Integration",
    summary:
      "An automated bridge that refreshes WHOOP tokens daily, parses physiological webhooks, and broadcasts a clean morning briefing to a WhatsApp group.",
    year: "2025",
  },
  {
    no: "03",
    slug: "football",
    title: "Match Model",
    kind: "Prediction Matrix",
    summary:
      "A Poisson-based football prediction model benchmarked, week by week, against bookmaker odds — engineered from team-form vectors and a tidy data pipeline.",
    year: "2024",
  },
  {
    no: "04",
    slug: "medprep",
    title: "MedPrep",
    kind: "Clinical Simulation",
    summary:
      "A high-fidelity mock interview tool with instant AI feedback, built on document-evaluating security rules — and the subject of a peer-reviewed manuscript.",
    year: "2024",
  },
];

export default function Home() {
  return (
    <>
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <Eyebrow>BA(Oxon) · MBChB · MRCP</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-serif text-display text-ink text-balance">
            Dr Peter Woods
          </h1>
          <p className="mt-6 max-w-2xl text-lead text-ink-soft text-pretty">
            Physician, researcher and builder, currently an Internal Medicine
            Trainee in Manchester. I work across acute medicine, academic
            research and applied AI — and I build software that makes clinical
            life a little easier. This is a selection of things I have designed
            and shipped.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[var(--tracking-label)] text-muted">
            <span>Internal Medicine Trainee · Manchester</span>
            <span>Oxford &amp; Warwick</span>
            <span>GMC 7751182</span>
          </div>
        </Container>
      </section>

      <section id="work" className="scroll-mt-20">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-4 sm:grid-cols-[8rem_1fr] sm:gap-10">
            <Eyebrow className="pt-1">Selected work</Eyebrow>
            <p className="max-w-xl text-pretty text-ink-soft">
              Four case studies spanning interactive media, applied AI and
              clinical software — each documented end to end.
            </p>
          </div>

          <ol className="mt-12 border-t border-line">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="group grid items-baseline gap-y-3 border-b border-line py-8 transition-colors hover:bg-paper-raised sm:grid-cols-[8rem_1fr_auto] sm:gap-x-10"
                >
                  <span className="font-mono text-xs text-faint">{p.no}</span>
                  <div>
                    <h3 className="font-serif text-2xl text-ink sm:text-3xl">
                      {p.title}
                      <span className="ml-3 align-middle font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
                        {p.kind}
                      </span>
                    </h3>
                    <p className="mt-3 max-w-2xl text-pretty text-ink-soft">
                      {p.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[var(--tracking-label)] text-muted sm:justify-self-end">
                    <span>{p.year}</span>
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section>
        <Container>
          <Divider />
          <div className="grid gap-4 py-16 sm:grid-cols-[8rem_1fr] sm:gap-10">
            <Eyebrow className="pt-1">Elsewhere</Eyebrow>
            <p className="max-w-xl text-pretty text-ink-soft">
              For clinical history, publications and prizes, see{" "}
              <Link
                className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                href="/about"
              >
                about
              </Link>
              , or my profile on{" "}
              <a
                className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                href="https://www.linkedin.com/in/DrPWoods/"
              >
                LinkedIn
              </a>{" "}
              and{" "}
              <a
                className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-ink"
                href="https://orcid.org/0000-0002-0910-8291"
              >
                ORCID
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
