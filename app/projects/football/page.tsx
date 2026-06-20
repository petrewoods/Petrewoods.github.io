import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, Stat, SystemFlow } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Match Model — World Cup 2026 Predictions",
  description:
    "A Poisson prediction model for the 2026 World Cup, benchmarked match by match against bookmaker odds and built on team-strength vectors.",
};

// Illustrative tracking: model probability vs implied bookmaker probability.
const matrix = [
  { stage: "Group A", fixture: "Mexico v Croatia", model: "2.05", book: "2.20", edge: "+0.15", hit: true },
  { stage: "Group D", fixture: "USA v Wales", model: "1.92", book: "1.85", edge: "−0.07", hit: false },
  { stage: "Group E", fixture: "Spain v Japan", model: "1.58", book: "1.66", edge: "+0.08", hit: true },
  { stage: "Group G", fixture: "Brazil v Serbia", model: "1.49", book: "1.55", edge: "+0.06", hit: true },
  { stage: "Round of 16", fixture: "England v Senegal", model: "1.74", book: "1.80", edge: "+0.06", hit: true },
  { stage: "Quarter-final", fixture: "France v Argentina", model: "2.38", book: "2.30", edge: "−0.08", hit: false },
];

const pipeline = [
  { label: "Ingest", detail: "Fixtures, results, xG feeds" },
  { label: "Feature build", detail: "Team-strength & form vectors" },
  { label: "Poisson core", detail: "Expected goals → scoreline grid" },
  { label: "Benchmark", detail: "Model vs implied book odds" },
];

const features = [
  {
    title: "Poisson goal model",
    body: "Each side's expected goals are modelled as independent Poisson processes; the outer product gives a full scoreline probability grid, from which 1X2, over/under and correct-score markets are derived.",
  },
  {
    title: "Team-strength vectors",
    body: "Rolling attack and defence strengths are encoded as decayed form vectors, weighting recent matches more heavily and adjusting for opponent quality rather than raw results.",
  },
  {
    title: "Tournament effects",
    body: "Group and knockout structure, rest days and host advantage are modelled explicitly — a neutral-venue tournament behaves differently from a league season.",
  },
  {
    title: "Calibration",
    body: "Predicted probabilities are calibrated against historical outcomes, so a stated 60% genuinely resolves true roughly 60% of the time.",
  },
];

export default function Football() {
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
              <Eyebrow>Prediction Matrix · World Cup 2026</Eyebrow>
            </Reveal>
            <Reveal as="h1" delay={80} className="mt-5 font-serif text-title text-ink text-balance">
              Match Model
            </Reveal>
            <Reveal as="p" delay={160} className="mt-6 text-lead text-ink-soft text-pretty">
              A prediction model for the 2026 World Cup that earns its keep only
              if it can out-read the market. Every match-day, its probabilities
              are placed side by side with bookmaker odds — and the gap is
              tracked honestly, win or lose.
            </Reveal>
          </div>
          <Reveal delay={120} className="mt-12 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-4">
            <Stat value="2026" label="World Cup" />
            <Stat value="Poisson" label="Core model" />
            <Stat value="1X2 · O/U" label="Markets" />
            <Stat value="Match-day" label="Benchmark" />
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-line bg-paper-raised">
        <Container className="py-16">
          <Reveal as="div">
            <Eyebrow>Data pipeline</Eyebrow>
          </Reveal>
          <Reveal className="mt-8">
            <SystemFlow stages={pipeline} />
          </Reveal>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-4 sm:grid-cols-[8rem_1fr] sm:gap-10">
            <Eyebrow className="pt-1">Model vs market</Eyebrow>
            <p className="max-w-xl text-pretty text-ink-soft">
              Decimal odds for the modelled outcome against the bookmaker line.
              A positive edge means the model rates the outcome more likely than
              the market implies.
            </p>
          </div>

          <Reveal className="mt-10 overflow-x-auto rounded-xl border border-line">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-line bg-paper-raised text-left font-mono text-xs uppercase tracking-[var(--tracking-label)] text-muted">
                  <th className="px-5 py-4 font-normal">Stage</th>
                  <th className="px-5 py-4 font-normal">Fixture</th>
                  <th className="px-5 py-4 text-right font-normal">Model</th>
                  <th className="px-5 py-4 text-right font-normal">Book</th>
                  <th className="px-5 py-4 text-right font-normal">Edge</th>
                  <th className="px-5 py-4 text-right font-normal">Result</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((r, i) => (
                  <tr
                    key={i}
                    className="border-b border-line-soft last:border-0 odd:bg-paper even:bg-paper-raised"
                  >
                    <td className="px-5 py-4 font-mono text-xs text-faint">
                      {r.stage}
                    </td>
                    <td className="px-5 py-4 text-ink">{r.fixture}</td>
                    <td className="px-5 py-4 text-right font-mono tabular-nums text-ink">
                      {r.model}
                    </td>
                    <td className="px-5 py-4 text-right font-mono tabular-nums text-muted">
                      {r.book}
                    </td>
                    <td
                      className={`px-5 py-4 text-right font-mono tabular-nums ${
                        r.edge.startsWith("+") ? "text-accent" : "text-faint"
                      }`}
                    >
                      {r.edge}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <span
                        className={`inline-block h-2 w-2 rounded-full ${
                          r.hit ? "bg-accent" : "bg-line"
                        }`}
                        aria-label={r.hit ? "Hit" : "Miss"}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <p className="mt-4 font-mono text-xs text-faint">
            Illustrative sample · full tournament ledger tracked live.
          </p>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="py-16 sm:py-20">
          <Reveal as="div">
            <Eyebrow>Feature engineering</Eyebrow>
          </Reveal>
          <div className="mt-8 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 70} className="border-t border-line pt-5">
                <h3 className="font-serif text-xl text-ink">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft text-pretty">
                  {f.body}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
