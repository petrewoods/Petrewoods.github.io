import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, Card, Stat, Timeline, TimelineItem } from "@/components/ui";

export const metadata: Metadata = {
  title: "MedPrep — Clinical Simulation & Education",
  description:
    "A high-fidelity mock interview tool with instant AI feedback, document-evaluating security rules, and a peer-reviewed manuscript.",
};

const showcase = [
  {
    title: "Scenario engine",
    body: "Structured, station-style prompts mirroring real interview formats — ethics, prioritisation and clinical reasoning — timed and delivered one at a time.",
  },
  {
    title: "Instant AI feedback",
    body: "Each answer is scored against a rubric within seconds, with specific, actionable notes rather than a bare mark — the kind of feedback a tutor gives between stations.",
  },
  {
    title: "Progress tracking",
    body: "Performance is tracked across attempts so candidates can see where reasoning is strong and where it wanders, station by station.",
  },
];

export default function MedPrep() {
  return (
    <div>
      <section className="border-b border-line">
        <Container className="py-20 sm:py-24">
          <Link
            href="/work"
            className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-muted transition-colors hover:text-ink"
          >
            ← Work
          </Link>
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Clinical Simulation &amp; Education · Live on iOS</Eyebrow>
            <h1 className="mt-5 font-serif text-title text-ink text-balance">
              MedPrep
            </h1>
            <p className="mt-6 text-lead text-ink-soft text-pretty">
              A high-fidelity mock interview tool with instant, AI-powered
              feedback. I built it to prepare for competitive training
              programmes — and, using it, scored full marks on my own entry.
              It&rsquo;s now live for applicants everywhere.
            </p>
            <div className="mt-8">
              <a
                href="https://apps.apple.com/gb/app/medprep/id6748531069"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-[var(--tracking-label)] text-ink transition-colors hover:border-ink"
              >
                Download on the App Store ↗
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-3">
            <Stat value="Live" label="Now available" />
            <Stat value="IMT · ST" label="Built for" />
            <Stat value="Instant" label="AI feedback" />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <Eyebrow>Product</Eyebrow>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {showcase.map((s) => (
              <Card key={s.title}>
                <h3 className="font-serif text-xl text-ink">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft text-pretty">
                  {s.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-paper-raised">
        <Container className="grid gap-10 py-16 sm:grid-cols-[8rem_1fr] sm:gap-16">
          <Eyebrow>Backend &amp; security</Eyebrow>
          <div className="max-w-2xl space-y-6">
            <p className="text-lead leading-relaxed text-ink-soft text-pretty">
              Candidate data is sensitive, so access is decided at the data
              layer rather than trusted to the client.
            </p>
            <p className="leading-relaxed text-ink-soft text-pretty">
              Security rules evaluate the user&rsquo;s own profile document
              natively on each request — reading the stored role and entitlement
              fields — rather than relying on a basic bearer token that could be
              stale or over-scoped. A request only resolves if the live profile
              document grants it.
            </p>
            <pre className="overflow-x-auto rounded-xl border border-line bg-night p-5 font-mono text-xs leading-relaxed text-zinc-300">
              <code>{`match /attempts/{userId}/{doc} {
  // Evaluate the caller's profile document, not just the token
  allow read, write: if request.auth != null
    && request.auth.uid == userId
    && get(/databases/$(db)/documents/profiles/$(userId)).data.active == true;
}`}</code>
            </pre>
          </div>
        </Container>
      </section>

      <section>
        <Container className="grid gap-10 py-16 sm:grid-cols-[8rem_1fr] sm:gap-16 sm:py-20">
          <Eyebrow>Research</Eyebrow>
          <div className="max-w-2xl">
            <p className="text-lead leading-relaxed text-ink-soft text-pretty">
              MedPrep is being studied, not just shipped.
            </p>
            <div className="mt-10">
              <Timeline>
                <TimelineItem
                  marker="Manuscript"
                  title="Submitted to a peer-reviewed medical-education journal"
                  meta="Under review"
                >
                  A manuscript evaluating the tool&rsquo;s approach to
                  high-fidelity interview simulation and automated feedback has
                  been submitted for peer review, situating the product within
                  the medical-education evidence base.
                </TimelineItem>
                <TimelineItem
                  marker="Method"
                  title="Rubric-aligned evaluation"
                >
                  Feedback quality is assessed against the same structured
                  rubrics used by human assessors, the basis of the study&rsquo;s
                  validity argument.
                </TimelineItem>
                <TimelineItem
                  marker="Context"
                  title="Part of a wider body of work"
                >
                  It joins published research across JMIR and BJPsych Open from
                  earlier digital-health work, including the Pause parenting
                  platform.
                </TimelineItem>
              </Timeline>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md font-serif text-heading text-ink text-balance">
            Preparing for IMT, ST or specialty applications?
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://apps.apple.com/gb/app/medprep/id6748531069"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[var(--tracking-label)] text-paper transition-opacity hover:opacity-80"
            >
              Download on the App Store ↗
            </a>
            <a
              href="mailto:peter.woods@me.com"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-[var(--tracking-label)] text-ink transition-colors hover:border-ink"
            >
              Get in touch →
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
