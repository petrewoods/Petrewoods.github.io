import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, Card, SystemFlow, Divider } from "@/components/ui";

export const metadata: Metadata = {
  title: "WHOOP → WhatsApp — API Integration",
  description:
    "An automated bridge: OAuth 2.0 auth, daily token refresh, webhook parsing of HRV, strain and sleep, broadcast to WhatsApp.",
};

const flow = [
  { label: "WHOOP API", detail: "OAuth 2.0 · scoped read access" },
  { label: "Token service", detail: "Daily refresh, encrypted at rest" },
  { label: "Webhook parser", detail: "HRV · strain · sleep filters" },
  { label: "Messaging gateway", detail: "Formatted broadcast to WhatsApp" },
];

const layers = [
  {
    tag: "AUTH",
    title: "OAuth 2.0 authentication",
    body: "Authorisation-code grant against the WHOOP OAuth server, exchanging a one-time code for a scoped access and refresh token pair. Scopes are limited to the recovery, cycle and sleep read endpoints — nothing writeable.",
  },
  {
    tag: "REFRESH",
    title: "Automated token rotation",
    body: "A scheduled job rotates the access token each morning before the first read, using the long-lived refresh token. Tokens are encrypted at rest; a failed refresh raises an alert rather than silently dropping the day's update.",
  },
  {
    tag: "PARSE",
    title: "Webhook parsing & filters",
    body: "Incoming webhooks are validated, de-duplicated and filtered down to the physiological metrics that matter — heart-rate variability, day strain, resting heart rate and sleep performance — discarding partial or in-progress records.",
  },
  {
    tag: "GATEWAY",
    title: "Messaging gateway layer",
    body: "Clean metrics are rendered into a single, readable briefing and pushed through the messaging gateway to a WhatsApp group, so the morning summary lands in the same place everyone already talks.",
  },
];

export default function Whoop() {
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
            <Eyebrow>API Integration · 2025</Eyebrow>
            <h1 className="mt-5 font-serif text-title text-ink text-balance">
              WHOOP → WhatsApp
            </h1>
            <p className="mt-6 text-lead text-ink-soft text-pretty">
              A small, dependable bridge between a wearable API and the place
              conversation already happens. Each morning it authenticates,
              pulls the latest recovery data and posts a tidy briefing to a
              WhatsApp group — no app to open, no dashboard to check.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-paper-raised">
        <Container className="py-16">
          <Eyebrow>Architecture</Eyebrow>
          <div className="mt-8">
            <SystemFlow stages={flow} />
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <Eyebrow>The layers</Eyebrow>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {layers.map((l) => (
              <Card key={l.tag}>
                <span className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
                  {l.tag}
                </span>
                <h3 className="mt-3 font-serif text-xl text-ink">{l.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft text-pretty">
                  {l.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="py-16">
          <div className="grid gap-10 sm:grid-cols-[8rem_1fr] sm:gap-16">
            <Eyebrow>Sample payload</Eyebrow>
            <div>
              <p className="mb-5 max-w-xl text-ink-soft text-pretty">
                The parser collapses a verbose webhook into a stable,
                presentation-ready shape before it ever reaches the gateway.
              </p>
              <pre className="overflow-x-auto rounded-xl border border-line bg-night p-5 font-mono text-xs leading-relaxed text-zinc-300">
                <code>{`{
  "date": "2025-06-18",
  "recovery": 71,        // %
  "hrv_ms": 64,
  "resting_hr": 48,      // bpm
  "sleep_performance": 88,
  "day_strain": 12.4
}`}</code>
              </pre>
            </div>
          </div>
          <Divider className="mt-16" />
          <div className="grid gap-10 pt-16 sm:grid-cols-[8rem_1fr] sm:gap-16">
            <Eyebrow>Notes</Eyebrow>
            <p className="max-w-xl text-ink-soft text-pretty">
              The integration is read-only and rate-limit aware: it backs off
              gracefully, never blocks on a single failed fetch, and degrades to
              a plain &ldquo;no data yet&rdquo; message rather than posting
              half-formed numbers.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
