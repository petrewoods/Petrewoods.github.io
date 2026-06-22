import Link from "next/link";
import {
  Container,
  Eyebrow,
  MetaItem,
  PinIcon,
  CapIcon,
  BadgeIcon,
} from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const building = [
  {
    name: "Portfol.io",
    status: "Live · iOS",
    href: "/projects/portfolio",
    blurb:
      "On-device-anonymised dictation portfolio for UK doctors — speak after a case, get structured ePortfolio entries mapped to CiPs and GPCs.",
  },
  {
    name: "MedPrep",
    status: "Live · iOS",
    href: "/projects/medprep",
    blurb:
      "High-fidelity mock interview tool with instant AI feedback, for IMT, ST and specialty applicants.",
  },
];

const experience = [
  { when: "2026 – present", role: "Internal Medicine Trainee", org: "Manchester" },
  {
    when: "2025 – 2026",
    role: "Relief Medical Officer",
    org: "Te Whatu Ora · New Zealand",
  },
  {
    when: "2022 – 2024",
    role: "Clinical Research Fellow",
    org: "Central England Rehabilitation Unit",
  },
];

const writing = [
  {
    title: "Enhancing Parenting Using AI: Exploratory Hackathon",
    meta: "JMIR Formative Research · 2025",
    doi: "10.2196/68780",
  },
  {
    title: "Guillain-Barré Syndrome",
    meta: "Evolution, Medicine, and Public Health · 2024",
    doi: "10.1093/emph/eoae013",
  },
  {
    title: "Disparities in Access to Group Parenting Training Programmes",
    meta: "BJPsych Open · 2024",
    doi: "10.1192/bjo.2024.153",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-line">
        <div className="animate-drift absolute -right-32 -top-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl" />
        <Container className="py-24 sm:py-32">
          <Reveal as="div">
            <Eyebrow>BA(Oxon) · MBChB · MRCP</Eyebrow>
          </Reveal>
          <Reveal as="h1" delay={80} className="mt-6 max-w-3xl font-serif text-display text-ink text-balance">
            Dr Peter Woods
          </Reveal>
          <Reveal as="p" delay={160} className="mt-6 max-w-2xl text-lead text-ink-soft text-pretty">
            A physician, researcher and builder — currently an Internal Medicine
            Trainee in Manchester.
          </Reveal>
          <Reveal as="ul" delay={200} className="mt-6 flex flex-wrap gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[var(--tracking-label)] text-muted">
            {["Clinical medicine", "Research", "Technology"].map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <span className="text-accent">—</span>
                {item}
              </li>
            ))}
          </Reveal>
          <Reveal delay={240} className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <MetaItem icon={<PinIcon />} label="Based" value="Manchester" />
            <MetaItem icon={<CapIcon />} value="Oxford & Warwick" />
            <MetaItem icon={<BadgeIcon />} label="GMC" value="7751182" />
          </Reveal>
          <Reveal delay={320} className="mt-10">
            <a
              href="/Dr-Peter-Woods-CV.pdf"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-[var(--tracking-label)] text-ink transition-colors hover:border-ink"
            >
              Download CV ↓
            </a>
          </Reveal>
        </Container>
      </section>

      <section id="building" className="scroll-mt-20 border-b border-line">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 sm:grid-cols-[8rem_1fr] sm:gap-16">
            <div className="sm:sticky sm:top-24 sm:self-start">
              <Eyebrow>Building</Eyebrow>
            </div>
            <div>
              <Reveal as="p" className="max-w-xl text-lead text-ink-soft text-pretty">
                Clinical software I design and ship for doctors and trainees.
              </Reveal>
              <ul className="mt-10 border-t border-line">
                {building.map((b, i) => (
                  <Reveal as="li" key={b.name} delay={i * 70}>
                    <Link
                      href={b.href}
                      className="group grid gap-y-2 border-b border-line py-6 transition-colors hover:bg-paper-raised sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-x-8"
                    >
                      <div>
                        <h3 className="font-serif text-xl text-ink">
                          {b.name}
                          <span className="ml-3 align-middle font-mono text-xs uppercase tracking-[var(--tracking-label)] text-accent">
                            {b.status}
                          </span>
                        </h3>
                        <p className="mt-2 max-w-xl text-pretty text-ink-soft">
                          {b.blurb}
                        </p>
                      </div>
                      <span className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-muted transition-transform group-hover:translate-x-1 sm:justify-self-end">
                        →
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
              <Reveal className="mt-8">
                <Link
                  href="/work"
                  className="link-underline font-mono text-xs uppercase tracking-[var(--tracking-label)] text-ink"
                >
                  All work, including data &amp; experiments →
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 sm:grid-cols-[8rem_1fr] sm:gap-16">
            <div className="sm:sticky sm:top-24 sm:self-start">
              <Eyebrow>Experience</Eyebrow>
            </div>
            <div>
              <ul className="border-t border-line">
                {experience.map((e, i) => (
                  <Reveal as="li" key={e.role} delay={i * 70}>
                    <div className="grid gap-1 border-b border-line py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8">
                      <div>
                        <div className="font-serif text-lg text-ink">{e.role}</div>
                        <div className="text-sm text-muted">{e.org}</div>
                      </div>
                      <div className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-faint sm:text-right">
                        {e.when}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
              <Reveal className="mt-8">
                <Link
                  href="/about"
                  className="link-underline font-mono text-xs uppercase tracking-[var(--tracking-label)] text-ink"
                >
                  Full clinical history &amp; education →
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-line">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 sm:grid-cols-[8rem_1fr] sm:gap-16">
            <div className="sm:sticky sm:top-24 sm:self-start">
              <Eyebrow>Research</Eyebrow>
            </div>
            <div>
              <Reveal as="p" className="max-w-xl text-lead text-ink-soft text-pretty">
                Selected publications, from a body of work across digital health,
                medical education and acute medicine.
              </Reveal>
              <ol className="mt-10 border-t border-line">
                {writing.map((p, i) => (
                  <Reveal as="li" key={p.doi} delay={i * 70}>
                    <div className="border-b border-line py-6">
                      <h3 className="max-w-3xl font-serif text-lg text-ink text-pretty">
                        {p.title}
                      </h3>
                      <div className="mt-2 text-sm text-muted">
                        {p.meta} ·{" "}
                        <a
                          href={`https://doi.org/${p.doi}`}
                          className="font-mono text-xs text-accent underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                        >
                          {p.doi} ↗
                        </a>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
              <Reveal className="mt-8">
                <Link
                  href="/about#publications"
                  className="link-underline font-mono text-xs uppercase tracking-[var(--tracking-label)] text-ink"
                >
                  All publications →
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact">
        <Container className="py-20">
          <div className="grid gap-10 sm:grid-cols-[8rem_1fr] sm:gap-16">
            <div className="sm:sticky sm:top-24 sm:self-start">
              <Eyebrow>Contact</Eyebrow>
            </div>
            <Reveal>
              <p className="max-w-xl font-serif text-heading text-ink text-balance">
                Whether it&rsquo;s Portfol.io, MedPrep, research or clinical work
                — I&rsquo;m happy to hear from you.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[var(--tracking-label)]">
                <a href="mailto:peter.woods@me.com" className="link-underline text-ink">
                  peter.woods@me.com
                </a>
                <a href="https://www.linkedin.com/in/DrPWoods/" className="link-underline text-ink">
                  LinkedIn ↗
                </a>
                <a href="https://orcid.org/0000-0002-0910-8291" className="link-underline text-ink">
                  ORCID ↗
                </a>
                <a href="/Dr-Peter-Woods-CV.pdf" className="link-underline text-ink">
                  CV ↓
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
