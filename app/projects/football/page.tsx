import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, Stat, SystemFlow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Match Model — Football Prediction Matrix",
  description:
    "A Poisson-based football prediction model benchmarked against bookmaker odds, built on team-form vectors and a tidy data pipeline.",
};

// Illustrative weekly tracking: model probability vs implied bookmaker probability.
const matrix = [
  { wk: "GW31", fixture: "Arsenal v Brighton", model: "1.62", book: "1.70", edge: "+0.08", hit: true },
  { wk: "GW31", fixture: "Spurs v Everton", model: "1.95", book: "1.88", edge: "−0.07", hit: false },
  { wk: "GW32", fixture: "Newcastle v Fulham", model: "1.74", book: "1.80", edge: "+0.06", hit: true },
  { wk: "GW32", fixture: "Villa v Palace", model: "2.10", book: "2.05", edge: "−0.05", hit: true },
  { wk: "GW33", fixture: "Brentford v Wolves", model: "2.34", book: "2.50", edge: "+0.16", hit: true },
  { wk: "GW33", fixture: "Chelsea v West Ham", model: "1.55", book: "1.61", edge: "+0.06", hit: false },
];

const pipeline = [
  { label: "Ingest", detail: "Fixtures, results, xG feeds" },
  { label: "Feature build", detail: "Form vectors · home/away splits" },
  { label: "Poisson core", detail: "Expected goals → scoreline grid" },
  { label: "Benchmark", detail: "Model vs implied book odds" },
];

const features = [
  {
    title: "Poisson goal model",
    body: "Each side's expected goals are modelled as independent Poisson processes; the outer product gives a full scoreline probability grid, from which 1X2, over/under and correct-score markets are derived.",
  },
  {
    title: "Team-form vectors",
    body: "Rolling attack and defence strengths are encoded as decayed form vectors, weighting recent matches more heavily and adjusting for opponent quality rather than raw results.",
  },
  {
    title: "Home / away splits",
    body: "Separate venue coefficients capture the persistent home advantage, fitted per team rather than as a single league-wide constant.",
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
            href="/"
            className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-muted transition-colors hover:text-ink"
          >
            ← Index
          </Link>
          <div className="mt-8 max-w-3xl">
            <Eyebrow>Prediction Matrix · 2024</Eyebrow>
            <h1 className="mt-5 font-serif text-title text-ink text-balance">
              Match Model
            </h1>
            <p className="mt-6 text-lead text-ink-soft text-pretty">
              A football prediction model that earns its keep only if it can
              out-read the market. Every gameweek, its probabilities are placed
              side by side with bookmaker odds — and the gap is tracked
              honestly, win or lose.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-line pt-10 sm:grid-cols-4">
            <Stat value="3 sns" label="Backtested" />
            <Stat value="Poisson" label="Core model" />
            <Stat value="1X2 · O/U" label="Markets" />
            <Stat value="Weekly" label="Benchmark" />
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-paper-raised">
        <Container className="py-16">
          <Eyebrow>Data pipeline</Eyebrow>
          <div className="mt-8">
            <SystemFlow stages={pipeline} />
          </div>
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

          <div className="mt-10 overflow-x-auto rounded-xl border border-line">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-line bg-paper-raised text-left font-mono text-xs uppercase tracking-[var(--tracking-label)] text-muted">
                  <th className="px-5 py-4 font-normal">GW</th>
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
                      {r.wk}
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
          </div>
          <p className="mt-4 font-mono text-xs text-faint">
            Illustrative sample · full season ledgers tracked offline.
          </p>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="py-16 sm:py-20">
          <Eyebrow>Feature engineering</Eyebrow>
          <div className="mt-8 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="border-t border-line pt-5">
                <h3 className="font-serif text-xl text-ink">{f.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft text-pretty">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
