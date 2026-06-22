import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, Card, SystemFlow, Stat } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Portfol.io — Dictation ePortfolio",
  description:
    "On-device-anonymised dictation portfolio for UK doctors — structured ePortfolio entries mapped to CiPs and GPCs.",
};

const flow = [
  { label: "Dictate", detail: "Speak a few lines after a case" },
  { label: "Anonymise", detail: "On-device — names never leave the phone" },
  { label: "Structure", detail: "A clean ePortfolio entry is drafted" },
  { label: "Map", detail: "Linked to the right CiPs / GPCs" },
];

const features = [
  {
    title: "Speak, don't type",
    body: "Reflection is the first thing to slip on a busy take. Portfol.io lets you capture a case in a sentence or two of speech, the moment it is fresh.",
  },
  {
    title: "Anonymised on device",
    body: "Identifiable detail is stripped on the phone itself before anything is processed, so patient information never leaves the device in the clear.",
  },
  {
    title: "Mapped to the curriculum",
    body: "Each entry is drafted in the expected ePortfolio shape and mapped to the relevant Capabilities in Practice or Generic Professional Capabilities.",
  },
];

export default function Portfolio() {
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
            <Reveal as="div">
              <Eyebrow>Clinical software · Live on iOS</Eyebrow>
            </Reveal>
            <Reveal as="h1" delay={80} className="mt-5 font-serif text-title text-ink text-balance">
              Portfol.io
            </Reveal>
            <Reveal as="p" delay={160} className="mt-6 text-lead text-ink-soft text-pretty">
              An on-device-anonymised dictation portfolio for UK doctors and
              trainees. Speak after a case and a structured ePortfolio entry is
              generated for you — already mapped to the curriculum.
            </Reveal>
            <Reveal delay={240} className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="https://apps.apple.com/gb/app/portfol-io/id6773316100"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-ink px-6 py-3 font-mono text-xs uppercase tracking-[var(--tracking-label)] text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Download on the App Store ↗
              </a>
              <a
                href="https://petrewoods.github.io/portfol-io-policies"
                className="link-underline font-mono text-xs uppercase tracking-[var(--tracking-label)] text-ink"
              >
                View site ↗
              </a>
            </Reveal>
          </div>
          <Reveal delay={120} className="mt-12 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-3">
            <Stat value="On-device" label="Anonymisation" />
            <Stat value="CiPs · GPCs" label="Mapped to" />
            <Stat value="iOS" label="Platform" />
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-line bg-paper-raised">
        <Container className="py-16">
          <Reveal as="div">
            <Eyebrow>How it works</Eyebrow>
          </Reveal>
          <Reveal className="mt-8">
            <SystemFlow stages={flow} />
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <Reveal as="div">
            <Eyebrow>Why it helps</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <Card>
                  <h3 className="font-serif text-xl text-ink">{f.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft text-pretty">
                    {f.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
