import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  UsersRound,
  Users,
  Newspaper,
  HelpCircle,
  Info,
  Compass,
} from "lucide-react";
import { Hero } from "@/components/site/Hero";
import {
  Fundraising,
  Testimonials,
  CTA,
  SectionDivider,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chiropractic India — Building a Healthier India, One Spine at a Time" },
      {
        name: "description",
        content:
          "Chiropractic India is the national voice for chiropractic awareness, education, and advocacy — promoting drug-free, holistic spinal care.",
      },
      { property: "og:title", content: "Chiropractic India — Premium Chiropractic Care" },
      {
        property: "og:description",
        content:
          "Advancing spinal health and wellbeing across India through awareness, education, and expert chiropractic care.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: Info,
    title: "About",
    desc: "Who we are — a non-profit education and research foundation for chiropractic in India.",
    to: "/about",
  },
  {
    icon: Compass,
    title: "Mission",
    desc: "Our purpose, principles and the standards we're setting for chiropractic care.",
    to: "/mission",
  },
  {
    icon: BookOpen,
    title: "Education",
    desc: "Academic pathways, foundation programmes and curriculum architecture.",
    to: "/education",
  },
  {
    icon: GraduationCap,
    title: "The College",
    desc: "India's own Chiropractic College — 6-year Masters Fellowship launching August 2026.",
    to: "/college",
    featured: true,
  },
  {
    icon: UsersRound,
    title: "Faculty",
    desc: "Open positions to join the founding cohort of educators in India.",
    to: "/faculty",
  },
  {
    icon: Users,
    title: "Experts",
    desc: "The clinicians and academics driving the profession forward.",
    to: "/experts",
  },
  {
    icon: Newspaper,
    title: "Blog",
    desc: "Stories, insights and updates from the team.",
    to: "/blog",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    desc: "Quick answers to common questions about chiropractic care.",
    to: "/faq",
  },
];

function PillarPreviews() {
  return (
    <section id="explore" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Explore the Foundation
          </span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Everything we're <em className="italic font-light">building</em>
          </h2>
          <p className="mt-4 text-muted-foreground">
            One foundation, many initiatives — from academic infrastructure to community programmes.
            Open any pillar to dive deeper.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative ${p.featured ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
            >
              <Link
                to={p.to}
                className={`group flex h-full flex-col rounded-[1.75rem] border border-border p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant ${
                  p.featured ? "gradient-cta text-primary-foreground" : "bg-card"
                }`}
              >
                <span
                  className={`grid h-12 w-12 place-items-center rounded-2xl ${
                    p.featured
                      ? "bg-white/15 text-primary-foreground ring-1 ring-white/20"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-serif text-2xl leading-tight">{p.title}</h3>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    p.featured ? "text-primary-foreground/85" : "text-muted-foreground"
                  }`}
                >
                  {p.desc}
                </p>
                <span
                  className={`mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-medium transition-transform group-hover:translate-x-1 ${
                    p.featured ? "text-primary-foreground" : "text-primary"
                  }`}
                >
                  Explore <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <SectionDivider />
      <PillarPreviews />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <Fundraising />
      <SectionDivider />
      <CTA />
    </main>
  );
}
