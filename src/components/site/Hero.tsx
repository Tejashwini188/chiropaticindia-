import { motion } from "framer-motion";
import { ArrowRight, Sparkles, UsersRound } from "lucide-react";
import { SpineVisual } from "./SpineVisual";

const stats = [
  { t: "Est. 2022", d: "Founded in Bengaluru" },
  { t: "Non-Profit", d: "Education & research" },
  { t: "Global", d: "International scope" },
];

const chips = [
  { icon: Sparkles, t: "CDC partner foundation" },
  { icon: UsersRound, t: "Internationally-led board" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-20">
      {/* ambient backgrounds */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,_oklch(0.85_0.12_150_/_0.45),_transparent)]" />
        <div className="absolute -bottom-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,_oklch(0.78_0.1_180_/_0.35),_transparent)]" />
        <div className="absolute inset-0 noise opacity-60" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 px-6 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[62%]"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/70 px-4 py-2 text-sm font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Setting Standards for Chiropractic in India
          </span>

          <h1 className="mt-7 font-serif text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-[4.25rem]">
            Advancing Chiropractic{" "}
            <em className="italic font-light text-primary">Education, Research &amp;</em>{" "}
            Awareness Across India
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Chiropractic India is a{" "}
            <strong className="font-semibold text-foreground">
              non-profit education and research foundation
            </strong>{" "}
            working to advance the chiropractic profession in India — through academic
            development, evidence-based knowledge, public awareness, and advocacy for
            professional standards.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="rounded-2xl glass p-5 shadow-soft"
              >
                <p className="font-serif text-2xl font-semibold text-primary md:text-3xl">{s.t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#donate"
              className="group inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition-all hover:scale-[1.03] hover:shadow-glow"
            >
              Support the Foundation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Explore Our Work
            </a>
          </div>

          <a
            href="#mission"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Read Our Mission
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            {chips.map((c) => (
              <span key={c.t} className="inline-flex items-center gap-2">
                <c.icon className="h-4 w-4 text-primary" />
                {c.t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Spine visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mt-16 flex w-full justify-center lg:mt-0 lg:w-[35%]"
        >
          <SpineVisual />
        </motion.div>
      </div>
    </section>
  );
}
