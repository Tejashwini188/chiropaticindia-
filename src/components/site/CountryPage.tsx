import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  GraduationCap,
  Users,
  Globe2,
  CheckCircle2,
  Phone,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Building2,
  ChevronDown,
  Quote,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Country } from "@/data/college-countries";
import { COUNTRIES } from "@/data/college-countries";
import collegeHero from "@/assets/college-hero.jpg";
import collegeFaculty from "@/assets/college-faculty.jpg";

const PARTNERS = [
  "Sri Sri University",
  "Dr Spine®",
  "Far East Chiro Research®",
  "Asian Institute of Scoliosis®",
];

export function CountryPage({ country: c }: { country: Country }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const stats = [
    { icon: Calendar, t: "Aug 2026", l: "Inaugural intake" },
    { icon: Users, t: "~30", l: `Fellows incl. ${c.demonym}` },
    { icon: GraduationCap, t: "6-year", l: "Masters Fellowship" },
    { icon: Globe2, t: c.flag, l: `${c.name} cohort` },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      {/* Ambient backgrounds */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 -right-32 h-[480px] w-[480px] rounded-full bg-primary/5 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-10 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link to="/college" className="hover:text-primary">
                College
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-foreground">{c.name}</li>
          </ol>
        </nav>

        {/* === HERO === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid items-center gap-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/70 px-4 py-2 text-sm font-medium text-primary">
              <span className="text-base">{c.flag}</span>
              For students from {c.name}
            </span>

            {c.bilingualHero && (
              <p className="mt-5 font-serif text-2xl italic text-primary md:text-3xl">
                {c.bilingualHero}
              </p>
            )}

            <h1 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-[3.5rem]">
              {c.seo.h1.replace("Study Chiropractic in India", "")
                .trim()
                .replace(/^for /, "") ? (
                <>
                  Study Chiropractic in{" "}
                  <em className="italic font-light text-primary">India</em>
                  <br />
                  for {c.demonym} Students
                </>
              ) : (
                c.seo.h1
              )}
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {c.seo.heroLead}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#apply"
                className="group inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition-all hover:scale-[1.03] hover:shadow-glow"
              >
                Apply for the FTP
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
              >
                Talk to the Team
              </a>
            </div>

            {/* Trust pill row */}
            <div className="mt-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                Programme Partners
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {PARTNERS.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center gap-1.5 rounded-full bg-secondary/70 px-3 py-1.5 text-xs font-medium text-primary"
                  >
                    <ShieldCheck className="h-3 w-3" />
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative aspect-[5/6] overflow-hidden rounded-[2.5rem] shadow-elegant">
              <img
                src={collegeHero}
                alt={`Chiropractic clinical training at CI Bangalore for ${c.demonym} students`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/15 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/95 p-5 backdrop-blur">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Inaugural Cohort
                </p>
                <p className="mt-1 font-serif text-2xl leading-tight text-foreground">
                  August 2026 · CI® Bangalore
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* === STAT BAND === */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl glass p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <p className="mt-5 font-serif text-3xl font-semibold text-primary">{s.t}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
            </motion.div>
          ))}
        </div>

        {/* === WHY [COUNTRY] STUDENTS CHOOSE THIS === */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Why {c.demonym} Students Choose Chiropractic India®
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Built for <em className="italic font-light text-primary">{c.demonym}</em> applicants
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {c.reasons.map((r, i) => (
              <motion.div
                key={r.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(closest-side,_oklch(0.78_0.14_150_/_0.22),_transparent)] transition-transform group-hover:scale-125" />
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Sparkles className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-2xl leading-tight">{r.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* === ELIGIBILITY + FEES (side by side) === */}
        <div className="mt-24 grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] border border-border bg-card p-10 shadow-soft lg:col-span-6"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Eligibility
            </span>
            <h2 className="mt-3 font-serif text-3xl">
              Eligibility for Students from {c.name}
            </h2>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <GraduationCap className="h-4 w-4" />
              {c.eligibility.hook}
            </div>
            <p className="mt-5 leading-relaxed text-muted-foreground">{c.eligibility.detail}</p>
            <a
              href="#apply"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Check Your Eligibility in 2 Minutes
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] border border-border bg-card p-10 shadow-soft lg:col-span-6"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Fees &amp; Scholarships
            </span>
            <h2 className="mt-3 font-serif text-3xl">
              Fees &amp; Scholarships <span className="text-muted-foreground">(in {c.currency.code})</span>
            </h2>
            <p className="mt-6 font-serif text-4xl font-semibold text-primary md:text-5xl">
              {c.fees.display}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.fees.note}</p>
            <a
              href="#apply"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Download the International Brochure
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>

        {/* === STUDENT VISA STEPS === */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Student Visa Process
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Student Visa Process for <em className="italic font-light text-primary">{c.demonym}</em> Applicants
            </h2>
          </div>

          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {c.visaSteps.map((s, i) => (
              <motion.li
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full gradient-cta text-sm font-bold text-primary-foreground shadow-elegant">
                  {i + 1}
                </span>
                <p className="mt-5 font-serif text-lg leading-tight">{s.t}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* === CAREER & RECOGNITION PATHWAYS === */}
        <div className="mt-24 grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              After Graduation
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Career &amp; Recognition Pathways
            </h2>
            <ul className="mt-8 space-y-4">
              {c.pathways.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-2xl bg-secondary/40 p-5">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium leading-relaxed text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:col-span-5"
          >
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-elegant">
              <img
                src={collegeFaculty}
                alt={`Faculty collaboration · ${c.demonym} graduate pathway`}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-primary/10 to-transparent mix-blend-multiply" />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/95 p-5 backdrop-blur">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  Internship Hubs
                </p>
                <p className="mt-1 font-serif text-xl leading-tight">
                  Dr Spine® centres across India
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* === TESTIMONIALS === */}
        {c.testimonials.length > 0 && (
          <div className="mt-24">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                {c.demonym} Voices
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl">
                Hear from <em className="italic font-light text-primary">{c.demonym}</em> applicants
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
              {c.testimonials.map((t, i) => (
                <motion.figure
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-3xl glass p-8 shadow-soft"
                >
                  <Quote className="h-6 w-6 text-primary/60" />
                  <blockquote className="mt-4 font-serif text-lg leading-relaxed">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full gradient-primary text-sm font-semibold text-primary-foreground">
                      {t.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        )}

        {/* === FAQ === */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">FAQ</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">Frequently Asked Questions</h2>
          </div>

          <div className="mx-auto mt-12 max-w-4xl divide-y divide-border rounded-[2rem] border border-border bg-card shadow-soft">
            {c.seo.faq.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q} className="px-6 md:px-8">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-primary"
                  >
                    <span
                      className={`font-serif text-lg md:text-xl ${
                        isOpen ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all ${
                        isOpen
                          ? "bg-primary text-primary-foreground rotate-180"
                          : "bg-secondary text-primary"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {item.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* === FINAL CTA + LEAD FORM === */}
        <motion.div
          id="apply"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 grid gap-10 overflow-hidden rounded-[2.5rem] gradient-cta p-10 text-primary-foreground shadow-elegant md:p-14 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">Apply Now</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Limited seats for the <em className="italic font-light">August 2026</em> inaugural cohort.
            </h2>
            <p className="mt-4 max-w-md text-primary-foreground/80">
              Register your interest and our {c.name} admissions advisor will reach out — typically
              within one working day.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="https://wa.me/916364047575"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
              <a
                href="tel:+916364047575"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                +91 636 404 7575
              </a>
              <a
                href="mailto:admissions@chiropracticindia.com"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-white/20"
              >
                <Mail className="h-4 w-4" />
                admissions@chiropracticindia.com
              </a>
            </div>
          </div>

          {/* Lead form */}
          <form
            className="rounded-3xl bg-white/95 p-8 text-foreground shadow-elegant md:p-10 lg:col-span-7"
            onSubmit={(e) => e.preventDefault()}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              Check Eligibility · 2 Minutes
            </p>
            <h3 className="mt-2 font-serif text-2xl">Apply for the August 2026 Intake</h3>

            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  placeholder="Full name *"
                  className="rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm outline-none focus:border-primary/60"
                />
                <input
                  type="email"
                  required
                  placeholder="Email *"
                  className="rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm outline-none focus:border-primary/60"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp number *"
                  className="rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm outline-none focus:border-primary/60"
                />
                <input
                  type="text"
                  readOnly
                  value={`${c.flag} ${c.name}`}
                  className="rounded-xl border border-border bg-secondary px-4 py-3 text-sm font-semibold text-primary outline-none"
                />
              </div>
              <select className="rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm outline-none focus:border-primary/60">
                <option>I'm interested in the Masters Fellowship (6 years)</option>
                <option>I'm interested in the Faculty Training Program</option>
                <option>I'd like to speak to an advisor first</option>
              </select>
              <textarea
                rows={3}
                placeholder="Anything we should know about your qualification or timeline?"
                className="rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm outline-none focus:border-primary/60"
              />
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]"
              >
                Apply for August 2026 Intake
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">
                By submitting you agree to be contacted by the Chiropractic India® admissions team.
              </p>
            </div>
          </form>
        </motion.div>

        {/* === LINK BACK TO HUB === */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-6 rounded-[2rem] border border-border bg-card p-6 shadow-soft md:p-8">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Building2 className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Programme Hub
              </p>
              <p className="mt-1 font-serif text-xl">
                See the full College page — Programme, Faculty &amp; Accreditation
              </p>
            </div>
          </div>
          <Link
            to="/college"
            className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Back to the College Hub
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// Country switcher — horizontal flag strip linking to each country page.
// Renders above the College hero (or anywhere a country picker is useful).
// `activeSlug` optionally highlights the current country.
// ----------------------------------------------------------------------------

export function CountrySwitcher({ activeSlug }: { activeSlug?: string } = {}) {
  return (
    <section aria-label="Choose your country" className="border-b border-border bg-secondary/30 px-6 py-5">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
          International Students · Choose Your Country
        </p>
        <div className="flex flex-wrap gap-2">
          {COUNTRIES.map((c) => {
            const isActive = c.slug === activeSlug;
            return (
              <Link
                key={c.slug}
                to={`/college/${c.slug}` as string}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "gradient-cta text-primary-foreground shadow-elegant"
                    : "border border-border bg-card text-foreground hover:bg-secondary hover:-translate-y-0.5"
                }`}
              >
                <span aria-hidden className="text-base leading-none">
                  {c.flag}
                </span>
                {c.name}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// Schema builders — exported so each route can register them in <head>
// ----------------------------------------------------------------------------

export function buildFaqSchema(country: Country) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: country.seo.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function buildCourseSchema(country: Country) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Faculty Training Program — Chiropractic (6-Year Masters Fellowship)",
    description: `English-medium chiropractic education at CI Bangalore for ${country.demonym} students, in partnership with Sri Sri University. Inaugural August 2026 cohort.`,
    inLanguage: "en",
    provider: {
      "@type": "CollegeOrUniversity",
      name: "Chiropractic India",
      sameAs: "https://chiropracticindia.com",
    },
    courseMode: ["onsite", "blended"],
    offers: { "@type": "Offer", priceCurrency: country.currency.code.split(" ")[0] },
  };
}

export function buildBreadcrumbSchema(country: Country) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://chiropracticindia.com/" },
      { "@type": "ListItem", position: 2, name: "College", item: "https://chiropracticindia.com/college" },
      { "@type": "ListItem", position: 3, name: country.name, item: country.seo.canonical },
    ],
  };
}
