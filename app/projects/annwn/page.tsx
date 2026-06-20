import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, SystemFlow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Annwn — Interactive AV Installation",
  description:
    "An interactive LED cloud installation for the Hundred Heads festival — built with Fadecandy, a Raspberry Pi and LED strips, made interactive with a Kinect.",
};

const pipeline = [
  { label: "Kinect", detail: "Depth + skeletal tracking" },
  { label: "Host", detail: "Crowd movement → light cues" },
  { label: "Fadecandy", detail: "Open Pixel Control, Raspberry Pi" },
  { label: "LED clouds", detail: "Addressable strips, diffused" },
];

const history = [
  {
    year: "First year",
    title: "DIY synthesisers",
    body: "Built and played by hand from maker hardware — Arduino, Fadecandy and similar devices — the first outing.",
  },
  {
    year: "Later years",
    title: "Interactive LED clouds",
    body: "Suspended clouds of addressable LED strips driven by Fadecandy and a Raspberry Pi, made interactive with a Kinect so they respond to the people beneath them. The LED build is documented on Instructables.",
  },
];

export default function Annwn() {
  return (
    <div className="bg-night text-zinc-300">
      {/* Full-bleed hero — works without photography, which is sparse for now. */}
      <section className="relative isolate flex min-h-[88vh] items-end overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-950 via-[#0c0a14] to-black" />
        <div className="absolute inset-0 -z-10 opacity-50 [background:radial-gradient(120%_80%_at_70%_10%,rgba(138,90,140,0.35),transparent_60%),radial-gradient(90%_60%_at_10%_90%,rgba(40,80,160,0.3),transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-px bg-white/10" />
        <Container className="pb-16 pt-32">
          <Link
            href="/work"
            className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-zinc-500 transition-colors hover:text-zinc-200"
          >
            ← Work
          </Link>
          <div className="mt-8">
            <span className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-zinc-500">
              Interactive AV Installation · Hundred Heads
            </span>
            <h1 className="mt-5 max-w-4xl font-serif text-display text-zinc-50 text-balance">
              Annwn
            </h1>
            <p className="mt-6 max-w-2xl text-lead text-zinc-400 text-pretty">
              An interactive LED cloud installation that reads the people
              beneath it and answers in light — part of a multi-year run at the
              Hundred Heads festival.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-night-line">
        <Container className="grid gap-10 py-20 sm:grid-cols-[8rem_1fr] sm:gap-16">
          <Eyebrow className="text-zinc-500">Overview</Eyebrow>
          <div className="max-w-2xl space-y-6 text-zinc-300">
            <p className="text-lead leading-relaxed text-pretty">
              Annwn grew out of a long relationship with the Hundred Heads
              festival — three appearances, spread across several years, each
              more responsive than the last.
            </p>
            <p className="leading-relaxed text-pretty">
              The first outing was a set of DIY synthesisers that visitors built
              and played by hand, made from maker hardware — Arduino, Fadecandy
              and the like. Later years moved overhead, into suspended LED
              clouds built with Fadecandy, a Raspberry Pi and addressable LED
              strips. The LED build was published as an open-source guide on
              Instructables; the interactive layer — a Kinect that lets the
              clouds respond to the crowd below — was added separately and never
              written up.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-night-line">
        <Container className="grid gap-10 py-20 sm:grid-cols-[8rem_1fr] sm:gap-16">
          <Eyebrow className="text-zinc-500">At Hundred Heads</Eyebrow>
          <ol className="space-y-8">
            {history.map((h) => (
              <li key={h.title}>
                <div className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-zinc-500">
                  {h.year}
                </div>
                <h3 className="mt-2 font-serif text-xl text-zinc-100">
                  {h.title}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-zinc-400 text-pretty">
                  {h.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-night-line">
        <Container className="py-20">
          <div className="grid gap-10 sm:grid-cols-[8rem_1fr] sm:gap-16">
            <Eyebrow className="text-zinc-500">Signal path</Eyebrow>
            <div className="w-full">
              <p className="mb-8 max-w-2xl text-zinc-400 text-pretty">
                A Kinect reads depth and movement in the crowd below; a host
                translates that into light cues, driven through Fadecandy (with a
                Raspberry Pi) out to the addressable LED strips inside each cloud
                — the interactive layer that sits on top of the documented build.
              </p>
              <SystemFlow stages={pipeline} dark />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-night-line">
        <Container className="flex flex-col gap-6 py-20 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md font-serif text-heading text-zinc-100 text-balance">
            Photography from the installations is being gathered — more to come.
          </p>
          <a
            href="mailto:peter.woods@me.com"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 font-mono text-xs uppercase tracking-[var(--tracking-label)] text-zinc-200 transition-colors hover:border-zinc-400 hover:text-white"
          >
            Get in touch →
          </a>
        </Container>
      </section>
    </div>
  );
}
