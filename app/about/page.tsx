import type { Metadata } from "next";
import Link from "next/link";
import {
  Container,
  Eyebrow,
  SectionHeading,
  Timeline,
  TimelineItem,
  Divider,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Clinical career, education, publications and prizes — Dr Peter Woods.",
};

const experience = [
  {
    when: "2026 – present",
    role: "Internal Medicine Trainee",
    org: "Manchester",
    detail:
      "Internal Medicine Training in Manchester, building on acute and general medicine experience across the UK and New Zealand.",
  },
  {
    when: "Jun 2025 – Mar 2026",
    role: "Relief Medical Officer",
    org: "Te Whatu Ora · Health New Zealand",
    detail:
      "Multiple specialities at Christchurch Hospital, and sole on-site doctor overnight at Greymouth Hospital — managing ED admissions, the acute take, and inpatient caseloads in a rural setting.",
  },
  {
    when: "Mar 2024 – Mar 2025",
    role: "Locum Doctor",
    org: "SWFT · SWBH",
    detail:
      "Locum work across Warwick and Birmingham: Stroke, Emergency Medicine, Acute Medicine and General Medicine.",
  },
  {
    when: "Jan 2023 – May 2024",
    role: "Physiology Tutor",
    org: "St Catherine's College · University of Oxford",
    detail:
      "Designing and delivering physiology tutorials to undergraduate students alongside the clinical research fellow role.",
  },
  {
    when: "Aug 2022 – May 2024",
    role: "Clinical Research Fellow",
    org: "Central England Rehabilitation Unit · SWFT",
    detail:
      "Research fellow at the largest Level 1 neurorehabilitation unit in the country, with a national focus on neurorehabilitation.",
  },
  {
    when: "Aug 2020 – Aug 2022",
    role: "Junior Doctor · Foundation Programme",
    org: "UHCW · SWFT · CWPT",
    detail:
      "Six rotations: Respiratory Medicine, General Surgery, Haematology, Emergency Medicine, Neurosurgery, Psychiatry.",
  },
];

const education = [
  {
    year: "2023",
    qual: "MRCP",
    inst: "Royal College of Physicians (UK)",
    note: "Part 1, Part 2 Written and PACES — all first attempt",
  },
  {
    year: "2016 – 2020",
    qual: "MBChB · Distinction",
    inst: "University of Warwick",
    note: "Distinction in Phase III Finals, Phase II MCQ & SAQ",
  },
  {
    year: "2013 – 2016",
    qual: "BA Human Sciences · 2:1 (69%)",
    inst: "University of Oxford",
  },
  {
    year: "2024",
    qual: "PGCert Medical Education · Pass",
    inst: "University of Warwick",
  },
  {
    year: "2023",
    qual: "PGCert Genomic Medicine · Merit",
    inst: "University of Warwick",
  },
];

const publications = [
  {
    title: "Enhancing Parenting Using AI: Exploratory Hackathon",
    meta: "Woods P, Donohoe S, Turtle L, et al. · JMIR Formative Research · 2025",
    doi: "10.2196/68780",
  },
  {
    title:
      "Augmenting Parenting Programs with the Pause Mobile App: Mixed Methods Evaluation",
    meta: "Hodson N, Woods PI, Donohoe S, et al. · JMIR Pediatrics and Parenting · 2025",
    doi: "10.2196/68807",
  },
  {
    title:
      "Evaluating a Mobile App Supporting Evidence-Based Parenting Skills: Thematic Analysis",
    meta: "Hodson N, Woods P, et al. · JMIR Pediatrics and Parenting · 2024",
    doi: "10.2196/53907",
  },
  {
    title: "Guillain-Barré Syndrome",
    meta: "Shedd N, Woods P & Hoad D · Evolution, Medicine, and Public Health · 2024",
    doi: "10.1093/emph/eoae013",
  },
  {
    title: "Disparities in Access to Group Parenting Training Programmes",
    meta: "Gorringe R, Woods P, et al. · BJPsych Open · 2024",
    doi: "10.1192/bjo.2024.153",
  },
  {
    title:
      "A Digital Microintervention Supporting Evidence-Based Parenting Skills: Development Study",
    meta: "Hodson N, Woods P, et al. · JMIR Formative Research · 2024",
    doi: "10.2196/54892",
  },
  {
    title:
      "Digital micro interventions to support parenting: Evaluating time out apps",
    meta: "Abdelhameed F, Hodson N & Woods P · Child and Adolescent Mental Health · 2023",
    doi: "10.1111/camh.12632",
  },
  {
    title:
      "Benefits of index telephone consultations on the two-week wait colorectal cancer pathway",
    meta: "Wanigasooriya K, Sarma DR, Woods P, et al. · Annals of the Royal College of Surgeons · 2022",
    doi: "10.1308/rcsann.2021.0364",
  },
  {
    title: "High-altitude pulmonary edema",
    meta: "Woods P & Alcock J · Evolution, Medicine, and Public Health · 2021",
    doi: "10.1093/emph/eoaa046",
  },
];

const prizes = [
  {
    title: "National Poster Prize — Automatism as a Criminal Defence",
    meta: "Royal Society of Medicine · Clinical Forensic & Legal Medicine · 2022",
  },
  {
    title: "Movement Disorders Essay Prize",
    meta: "British Geriatrics Society · 2022",
  },
];

export default function About() {
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
            <Eyebrow>BA(Oxon) · MBChB · MRCP</Eyebrow>
            <h1 className="mt-5 font-serif text-title text-ink text-balance">
              Physician, researcher &amp; builder
            </h1>
            <p className="mt-6 text-lead text-ink-soft text-pretty">
              A physician with a background spanning acute and general medicine,
              clinical research and digital health across the UK and New
              Zealand, currently an Internal Medicine Trainee in Manchester. I
              hold MRCP and PGCerts in Medical Education and Genomic Medicine,
              and I build tools that make clinical life a little easier.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-20">
          <SectionHeading index="01" label="Experience" title="Clinical career." />
          <div className="mt-12 sm:pl-[calc(8rem+2.5rem)]">
            <Timeline>
              {experience.map((e) => (
                <TimelineItem
                  key={e.role + e.when}
                  marker={e.when}
                  title={e.role}
                  meta={e.org}
                >
                  {e.detail}
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="py-16 sm:py-20">
          <SectionHeading index="02" label="Education" title="Qualifications." />
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {education.map((q) => (
              <li
                key={q.qual}
                className="grid gap-1 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
              >
                <div>
                  <div className="font-serif text-lg text-ink">{q.qual}</div>
                  <div className="text-sm text-muted">{q.inst}</div>
                  {q.note ? (
                    <div className="mt-1 text-sm text-accent">{q.note}</div>
                  ) : null}
                </div>
                <div className="font-mono text-xs uppercase tracking-[var(--tracking-label)] text-faint sm:text-right">
                  {q.year}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="py-16 sm:py-20">
          <SectionHeading index="03" label="Research" title="Publications." />
          <ol className="mt-12 border-t border-line">
            {publications.map((p) => (
              <li key={p.doi} className="border-b border-line py-6">
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
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="border-t border-line">
        <Container className="py-16 sm:py-20">
          <SectionHeading index="04" label="Recognition" title="Prizes & awards." />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {prizes.map((pr) => (
              <li
                key={pr.title}
                className="rounded-xl border border-line bg-paper-raised p-6"
              >
                <h3 className="font-serif text-lg text-ink text-pretty">
                  {pr.title}
                </h3>
                <div className="mt-2 text-sm text-muted">{pr.meta}</div>
              </li>
            ))}
          </ul>
          <Divider className="mt-16" />
          <div className="flex flex-col gap-6 pt-16 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md font-serif text-heading text-ink text-balance">
              For collaboration, research or clinical work — get in touch.
            </p>
            <a
              href="mailto:peter.woods@me.com"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-line px-6 py-3 font-mono text-xs uppercase tracking-[var(--tracking-label)] text-ink transition-colors hover:border-ink"
            >
              Email me →
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
