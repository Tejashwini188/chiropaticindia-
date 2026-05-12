import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Activity,
  Bone,
  PersonStanding,
  Dumbbell,
  Brain,
  Hand,
  Zap,
  Target,
  GraduationCap,
  Megaphone,
  Accessibility,
  Quote,
  Calendar,
  MapPin,
  Plus,
  Minus,
  Mail,
  Instagram,
  Twitter,
  Linkedin,
  Heart,
  Info,
  UsersRound,
  Handshake,
  HelpingHand,
  Landmark,
  Coins,
  Sparkles,
  Check,
  ChevronDown,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import mission from "@/assets/mission.jpg";
import docjay from "@/assets/docjay.png";

function SectionHeader({
  eyebrow,
  title,
  desc,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  desc?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`mx-auto max-w-2xl ${align === "center" ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-serif text-4xl md:text-5xl">{title}</h2>
      {desc && <p className="mt-4 text-muted-foreground">{desc}</p>}
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Our Story</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Setting Standards for <em className="italic font-light">Chiropractic</em> in India
          </h2>
          <p className="mt-5 text-muted-foreground">
            Chiropractic India started in 2022 in response to the tragic decrease in
            GENUINE CHIROPRACTORS in India as a result of the global pandemic.
          </p>
          <p className="mt-3 text-muted-foreground">
            This pioneer revolution originally started in 2004 when Dr. Michel Tetrault and
            Dr. Gary Auerbach were invited to Bangalore to support the Bangalore Healthy City initiative.
            Today, we continue to push forward in setting standards of practice, education, and accreditation.
          </p>
          <p className="mt-3 text-muted-foreground">
            While early applications for government approval of Doctor of Chiropractic courses
            faced limited interest, current healthcare realities have prompted the CDC and
            Chiropractic India to accelerate our mission for official recognition and integration.
          </p>
          <a
            href="#mission"
            className="mt-8 inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
          >
            Explore Chiropractic <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { t: "The Pandemic Response", d: "Starting in 2022" },
            { t: "Global standards", d: "Chiropractic India" },
            { t: "Founder's Vision", d: "Michel & Gary" },
            { t: "Clinical Excellence", d: "Standard of care" },
          ].map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-square cursor-pointer overflow-hidden rounded-[2.5rem] bg-secondary/50 shadow-soft transition-all hover:shadow-elegant"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="grid h-14 w-14 place-items-center rounded-full glass-strong text-primary shadow-glow transition-transform group-hover:scale-110">
                  <PlayCircle className="h-7 w-7" strokeWidth={1.5} />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-left">
                <p className="font-serif text-lg leading-tight">{v.t}</p>
                <p className="text-xs text-muted-foreground">{v.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Mission() {
  const pillars = [
    { icon: Megaphone, t: "Awareness", d: "Educating communities" },
    { icon: GraduationCap, t: "Education", d: "Building knowledge" },
    { icon: Target, t: "Advocacy", d: "Policy & standards" },
    { icon: Accessibility, t: "Accessibility", d: "Care for all" },
  ];
  return (
    <section id="mission" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
            <img
              src={mission}
              alt="Chiropractor practitioner"
              loading="lazy"
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
            <button className="absolute inset-0 grid place-items-center text-primary-foreground transition-transform hover:scale-105">
              <span className="grid h-16 w-16 place-items-center rounded-full glass-strong shadow-glow">
                <PlayCircle className="h-8 w-8 text-primary" />
              </span>
            </button>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden h-36 w-36 rounded-full bg-[radial-gradient(closest-side,_oklch(0.78_0.14_150_/_0.5),_transparent)] md:block" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Mission & Vision</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Our <em className="italic font-light">Vision</em> for
            <br />
            Spinal Healthcare
          </h2>
          <p className="mt-5 text-muted-foreground">
            Chiropractic India has adopted the vision of the Chiropractic Diplomatic Corps to assure
            India's availability and equal access to chiropractic services. We strive to set
            standards of practice, education, accreditation, and legislation nationwide.
          </p>
          <p className="mt-3 text-sm text-muted-foreground italic">
            Working alongside organizations like CAMHADD and CTPHF, we are pushing forward
            the integration of Doctor of Chiropractic courses into mainstream Indian education.
          </p>
          <a
            href="#team"
            className="mt-7 inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03]"
          >
            About Our Journey <ArrowRight className="h-4 w-4" />
          </a>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.t} className="rounded-2xl glass p-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-primary">
                  <p.icon className="h-4 w-4" />
                </span>
                <p className="mt-3 text-sm font-semibold">{p.t}</p>
                <p className="text-xs text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}



function Counter({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl glass p-7 text-center transition-all hover:-translate-y-1 hover:shadow-elegant"
    >
      <p className="font-serif text-5xl text-gradient">{value}</p>
      <p className="mt-2 text-sm text-muted-foreground">{label}</p>
    </motion.div>
  );
}

export function Impact() {
  const items = [
    {
      icon: Info,
      title: "Chiropractic Information",
      desc: "Learn about the conditions treated with chiropractic",
      btn: "LEARN MORE",
      link: "#faq",
    },
    {
      icon: UsersRound,
      title: "Advocacy",
      desc: "Learn more about advocates that support Chiropractic India",
      btn: "KNOW OUR ADVOCATES",
      link: "#team",
    },
    {
      icon: Handshake,
      title: "Become A Supporter",
      desc: "Become an advocate to support the cause of Chiropractic in India.",
      btn: "SUPPORT US",
      link: "#donate",
    },
  ];

  return (
    <section className="relative bg-white px-6 py-28 text-black">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-3">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="relative mb-8">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-slate-50 transition-transform hover:scale-105">
                <item.icon className="h-12 w-12 text-slate-900" strokeWidth={1.5} />
              </div>
              <div className="absolute bottom-2 right-2 h-6 w-6 rounded-full bg-white shadow-sm" />
            </div>

            <h3 className="font-sans text-2xl font-bold tracking-tight">{item.title}</h3>
            <p className="mt-4 max-w-[280px] text-[15px] leading-relaxed text-slate-600">
              {item.desc}
            </p>

            <a
              href={item.link}
              className="group relative mt-8 inline-block px-1 text-xs font-bold tracking-[0.2em]"
            >
              <span className="relative z-10">{item.btn}</span>
              <span className="absolute bottom-0 left-0 -z-0 h-[7px] w-full bg-[#FFE100] transition-all group-hover:h-[10px]" />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Decorative jagged bottom border as seen in screenshot */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[12px] w-full rotate-180"
          fill="#53141F" // Using a dark maroon color that fits the brand's potential dark accents or the screenshot's base
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
}

export function Testimonials() {
  const items = [
    {
      q: "After years of chronic back pain, the holistic care I received gave me my mobility — and my life — back.",
      n: "Ananya Rao",
      r: "Patient, Bengaluru",
    },
    {
      q: "An organisation that's elevating chiropractic care in India to truly global standards.",
      n: "Dr. Vikram Sethi",
      r: "Sports Physician",
    },
    {
      q: "The awareness camps changed how our community thinks about posture and prevention.",
      n: "Meera Iyer",
      r: "School Educator",
    },
  ];
  return (
    <section className="relative px-6 py-28">
      <SectionHeader
        eyebrow="Voices"
        title={<>Stories of <em className="italic font-light">healing</em></>}
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">
        {items.map((t, i) => (
          <motion.figure
            key={t.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-3xl glass p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
          >
            <Quote className="h-6 w-6 text-primary/60" />
            <blockquote className="mt-4 font-serif text-lg leading-relaxed">"{t.q}"</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full gradient-primary text-sm font-semibold text-primary-foreground">
                {t.n[0]}
              </span>
              <div>
                <p className="text-sm font-semibold">{t.n}</p>
                <p className="text-xs text-muted-foreground">{t.r}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

export function Programs() {
  const items = [
    { t: "Spine Awareness Drives", d: "Free public screenings across Indian cities and towns.", tag: "Outreach" },
    { t: "School Posture Initiative", d: "Educating young students on lifelong spinal habits.", tag: "Youth" },
    { t: "Workplace Wellness", d: "Corporate sessions on ergonomics & sedentary care.", tag: "Corporate" },
  ];
  return (
    <section className="relative px-6 py-28">
      <SectionHeader
        eyebrow="Awareness"
        title={<>Programs that <em className="italic font-light">empower</em></>}
        desc="Initiatives designed to bring chiropractic education to every doorstep."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-5 md:grid-cols-3">
        {items.map((p, i) => (
          <motion.article
            key={p.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(closest-side,_oklch(0.78_0.14_150_/_0.25),_transparent)] transition-transform group-hover:scale-125" />
            <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">{p.tag}</span>
            <h3 className="mt-5 font-serif text-2xl">{p.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
            <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
              Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


export function Team() {
  const board = [
    { n: "docMike", r: "DOCTOR OF CHIROPRACTIC", c: "oklch(0.78 0.14 150)" },
    { n: "Prof. (Dr.) Tirthankar Ghosh", r: "ERGONOMICS EXPERT", c: "oklch(0.82 0.1 180)" },
    { n: "Dr. Prof. Phillip Ebrall", r: "B.APP.SC. (CHIROPRACTOR)", c: "oklch(0.85 0.12 130)" },
  ];

  const committee = [
    { n: "Vinutha M. R", r: "", c: "oklch(0.8 0.1 200)" },
    { n: "Ms Bia Sandhu", r: "", c: "oklch(0.78 0.14 150)" },
    { n: "Jedaver Opingo", r: "", c: "oklch(0.82 0.1 180)" },
  ];

  return (
    <section id="team" className="relative px-6 py-28">
      <SectionHeader
        eyebrow="Our Experts"
        title={<>Meet the <em className="italic font-light">Leaders</em></>}
      />

      <div className="mx-auto mt-14 max-w-7xl">
        {/* Founder Section */}
        <div className="mb-28 flex flex-col items-center gap-10 md:flex-row md:justify-around">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-sans text-2xl md:text-3xl lg:text-4xl leading-snug font-bold text-[#002b5c]">
              Dr Spine Care Pvt Ltd,<br />
              Asian Institute of Scoliosis,<br />
              Mr & Ms Posture India<br />
              (Pageant),<br />
              Far East Chiro Research (FECR)
            </h3>
            <p className="mt-8 text-xl text-muted-foreground">
              – Founder & Chief Architect,
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex w-full max-w-[320px] flex-col items-center text-center"
          >
            <img src={docjay} alt="Prof, Dr Jayul Doshi" className="aspect-square w-full overflow-hidden rounded-2xl md:aspect-[4/5] mb-6 object-cover" />
            <p className="font-sans text-xl font-bold text-[#002b5c]">Prof, Dr Jayul Doshi</p>
            <p className="font-sans font-bold text-[#002b5c] mt-1">docJay</p>
          </motion.div>
        </div>

        {/* Board Members */}
        <div className="mb-28 text-center">
          <h2 className="mb-14 font-sans text-4xl font-bold text-[#002b5c]">Members of Board</h2>
          <div className="grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
            {board.map((d, i) => (
              <motion.div
                key={d.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div
                  className="aspect-square w-full max-w-[260px] overflow-hidden rounded-2xl mb-6 transition-all group-hover:-translate-y-1 group-hover:shadow-elegant"
                  style={{ background: `radial-gradient(120% 120% at 30% 20%, ${d.c}, oklch(0.96 0.02 150) 70%)` }}
                />
                <p className="font-sans text-lg font-bold text-[#002b5c]">{d.n}</p>
                <p className="mt-2 text-xs font-bold tracking-widest uppercase text-[#002b5c]">{d.r}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Managing Committee */}
        <div className="text-center">
          <h2 className="mb-14 font-sans text-4xl font-bold text-[#002b5c]">Managing Committee</h2>
          <div className="grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
            {committee.map((d, i) => (
              <motion.div
                key={d.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div
                  className="aspect-square w-full max-w-[260px] overflow-hidden rounded-2xl mb-6 transition-all group-hover:-translate-y-1 group-hover:shadow-elegant"
                  style={{ background: `radial-gradient(120% 120% at 30% 20%, ${d.c}, oklch(0.96 0.02 150) 70%)` }}
                />
                <p className="font-sans text-lg font-bold text-[#002b5c]">{d.n}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  const qs = [
    { q: "Is chiropractic care safe?", a: "Yes — when performed by qualified chiropractors, it is a safe, non-invasive, drug-free approach to musculoskeletal care." },
    { q: "How many sessions will I need?", a: "It depends on your condition. Many patients see meaningful relief within 4–6 sessions; chronic cases may take longer." },
    { q: "Do you treat children and seniors?", a: "Absolutely. Care is gently adapted for every age group, including pediatric and geriatric patients." },
    { q: "Is it covered by insurance?", a: "An increasing number of providers cover chiropractic care. We can help guide you through the process." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative overflow-hidden px-6 py-28 bg-emerald-50/50">
      {/* Decorative Green Orbs */}
      <div className="absolute -left-20 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute -right-20 bottom-1/4 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative z-10">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Common <em className="italic font-light">questions</em></>}
        />
        
        <div className="mx-auto mt-14 max-w-5xl divide-y divide-emerald-100/50 rounded-[3rem] bg-white/60 backdrop-blur-2xl border border-emerald-100/30 shadow-elegant-large">
          {qs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="px-10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-10 text-left transition-all hover:text-primary group"
                >
                  <span className={`font-serif text-2xl md:text-3xl transition-colors ${isOpen ? 'text-primary' : 'text-slate-800'}`}>
                    {item.q}
                  </span>
                  <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full transition-all duration-500 ${
                    isOpen ? 'bg-primary text-white rotate-180' : 'bg-emerald-50 text-primary group-hover:bg-emerald-100'
                  }`}>
                    {isOpen ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-10 text-lg md:text-xl leading-relaxed text-slate-600 max-w-4xl">
                    {item.a}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="donate" className="px-6 py-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] gradient-cta p-10 text-primary-foreground shadow-elegant md:p-16">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-glow/30 blur-3xl" />
        <div className="absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl" />
        <div className="relative grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl">Support a healthier India.</h2>
            <p className="mt-4 max-w-md text-primary-foreground/80">
              Your contribution helps us deliver awareness camps, education, and accessible chiropractic care nationwide.
            </p>
          </div>
          <form className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <div className="flex w-full items-center gap-2 rounded-full bg-white/10 px-4 py-3 backdrop-blur">
              <Mail className="h-4 w-4 opacity-70" />
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent text-sm placeholder:text-primary-foreground/60 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-primary transition-transform hover:scale-[1.03]"
            >
              Donate <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full gradient-primary text-primary-foreground">
              <Heart className="h-4 w-4" />
            </span>
            <span className="font-serif text-lg font-semibold">Chiropractic India</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            The national voice for chiropractic awareness, education, and advocacy — building a healthier India, one spine at a time.
          </p>
          <div className="mt-5 flex gap-2">
            {[Instagram, Twitter, Linkedin].map((I, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:bg-secondary">
                <I className="h-4 w-4 text-foreground" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {["About", "Mission", "Experts", "FAQ"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-foreground">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold">Newsletter</p>
          <p className="mt-4 text-sm text-muted-foreground">Monthly insights on spinal wellbeing.</p>
          <form className="mt-3 flex items-center gap-2 rounded-full border border-border p-1.5">
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full bg-transparent px-3 text-sm placeholder:text-muted-foreground focus:outline-none"
            />
            <button className="rounded-full gradient-cta px-4 py-2 text-xs font-medium text-primary-foreground">Join</button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Chiropractic India. All rights reserved.</p>
        <p>Crafted with care for spinal wellbeing.</p>
      </div>
    </footer>
  );
}
export function Fundraising() {
  return (
    <section id="fundraising" className="relative overflow-hidden bg-slate-50/50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Centered Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">Contribute</span>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">
            Support <em className="italic font-light">Chiropractic</em> Education
          </h2>
          <p className="mt-6 text-lg font-bold text-primary">
            Registration Number: IV 301/22-23
          </p>
          <p className="mt-4 text-muted-foreground">
            We are dedicated to establishing formal chiropractic education in India. 
            Join our mission to graduate the next generation of Indian chiropractors through 
            university programs within our own country.
          </p>
        </motion.div>

        {/* Horizontal Layout for Details & Registration */}
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Banking Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 rounded-[2.5rem] bg-white p-8 shadow-elegant md:p-10"
          >
            <div className="flex items-center gap-4 border-b pb-6">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                <Landmark className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Banking Details</h3>
                <p className="text-xs text-muted-foreground">Direct Bank Transfer</p>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              {[
                { label: "Company Name", value: "CHIROPRACTIC INDIA" },
                { label: "Bank Name", value: "IDFC FIRST" },
                { label: "Branch", value: "BANGALORE RESIDENCY ROAD" },
                { label: "IFSC Code", value: "IDFB 0080 151" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-1 border-b border-slate-50 pb-3 last:border-0">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="font-mono text-base font-medium tracking-tight text-slate-900">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 rounded-[2.5rem] bg-white p-8 shadow-elegant md:p-10"
          >
            <h4 className="text-xl font-bold">Register Your Interest</h4>
            <p className="mt-1 text-sm text-muted-foreground">Join our mission to support Chiropractic education</p>

            <div className="mt-8 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Name" className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-primary/50" />
                <input type="email" placeholder="Email" className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-primary/50" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input type="text" placeholder="Mobile Number" className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-primary/50" />
                <input type="text" placeholder="Country" className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-primary/50" />
              </div>
              <textarea placeholder="How you would like to support..." rows={2} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-primary/50" />
              
              <button className="mt-2 w-full rounded-full gradient-cta py-4 text-sm font-bold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]">
                SUBMIT REGISTRATION
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Information() {
  const [activeTab, setActiveTab] = useState("chiropractic");

  const conditions = [
    "Abdominal Conditions Complaints",
    "Arthritis — Osteoarthritis",
    "Disc Rehydration — Spine Care",
    "Cervicogenic Headaches & Neck Pain",
    "Lower Back Pain (Lumbar)",
    "Sciatica — Non-invasive Treatment",
    "Scoliosis Management",
    "Shoulder Pain & Rotator Cuff",
    "Functional vs Structural Pain",
  ];

  const globalLinks = [
    "India Association of Chiropractic Doctors",
    "Association of Chiropractic Colleges",
    "Chiropractic Educational Institutions",
    "Federation of Chiropractic Licensing Boards",
    "World Federation of Chiropractic",
    "International Chiropractors Association",
    "Christian Chiropractors Association",
  ];

  return (
    <section id="information" className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Knowledge Hub"
          title={<>Chiropractic <em className="italic font-light">Information</em> & Advocacy</>}
          desc="Explore comprehensive data on chiropractic education, conditions treated, and our global professional network."
        />

        {/* Tabs */}
        <div className="mt-12 flex justify-center border-b border-slate-100">
          <div className="flex gap-8">
            {[
              { id: "chiropractic", label: "Chiropractic Information" },
              { id: "advocacy", label: "Advocacy" },
              { id: "supporter", label: "Supporter" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-4 text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === tab.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 h-1 w-full bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-16">
          {activeTab === "chiropractic" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid gap-12 lg:grid-cols-12"
            >
              {/* Left Column: Education Comparison */}
              <div className="lg:col-span-7">
                <div className="rounded-[2.5rem] bg-slate-50 p-8 md:p-12">
                  <h3 className="font-serif text-3xl font-bold">DC/MD Education Comparison</h3>
                  <p className="mt-4 text-muted-foreground">
                    Did You Know? Doctors of Chiropractic (DC) and Doctors of Medicine (MD) have similar
                    rigorous training to ensure the highest standard of patient care.
                  </p>

                  <div className="mt-10 grid gap-6 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white p-8 shadow-soft">
                      <p className="text-sm font-bold uppercase tracking-widest text-primary">Doctor of Chiropractic</p>
                      <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-slate-900">4,700</span>
                        <span className="text-sm text-muted-foreground">Total Hours</span>
                      </div>
                      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <p>3,065 Class Hours</p>
                        <p>Focus: Spine, Neurology, Musculoskeletal</p>
                      </div>
                    </div>
                    <div className="rounded-3xl bg-white p-8 shadow-soft">
                      <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Doctor of Medicine</p>
                      <div className="mt-4 flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-slate-900">4,550</span>
                        <span className="text-sm text-muted-foreground">Total Hours</span>
                      </div>
                      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                        <p>2,710 Class Hours</p>
                        <p>Focus: Pharmacology, Immunology, Surgery</p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-10 rounded-2xl bg-primary/5 p-6 text-sm italic text-slate-700">
                    "A PROFESSION CANNOT BE TAKEN SERIOUSLY UNTIL IT IS SUSTAINABLE."
                    <br />
                    <span className="mt-2 block font-bold not-italic">— Signature Objective</span>
                  </p>
                </div>

                <div className="mt-8 rounded-[2.5rem] bg-secondary/20 p-8 md:p-12">
                  <h3 className="font-serif text-2xl font-bold">Chiropractic Education in India</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    The founding of Chiropractic India, an education and research charity, represents
                    the full technical and logistical support needed to finally launch formal Chiropractic
                    Education and research in India. Through partnerships with Manila universities, we
                    now move forward to accredit the first diploma and degree programs for Indian students.
                  </p>
                </div>
              </div>

              {/* Right Column: Conditions & Links */}
              <div className="lg:col-span-5 space-y-8">
                <div className="rounded-3xl border border-slate-100 p-8">
                  <h4 className="flex items-center gap-2 font-bold">
                    <Activity className="h-5 w-5 text-primary" />
                    Conditions Treated
                  </h4>
                  <ul className="mt-6 grid gap-3">
                    {conditions.map((c, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl bg-slate-900 p-8 text-white">
                  <h4 className="flex items-center gap-2 font-bold">
                    <ExternalLink className="h-5 w-5 text-primary" />
                    Global Professional Links
                  </h4>
                  <ul className="mt-6 space-y-4">
                    {globalLinks.map((l, i) => (
                      <li key={i}>
                        <a href="#" className="group flex items-center justify-between text-sm text-slate-400 transition-colors hover:text-white">
                          {l}
                          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "advocacy" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-16"
            >
              <div className="rounded-[2.5rem] bg-secondary/20 p-8 text-center md:p-14">
                <h3 className="font-serif text-3xl font-bold text-primary">What is Advocacy?</h3>
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground italic">
                  "Advocacy is defined as any action that speaks in favor of, recommends,
                  argues for a cause, supports or defends, or pleads on behalf of others."
                </p>
                <div className="mt-10 flex flex-wrap justify-center gap-6">
                  {[
                    { t: "Practice Kindness", d: "Follow the golden rule" },
                    { t: "Serve Genuinely", d: "A servant's heart" },
                    { t: "Share Openly", d: "Transparency & Trust" },
                  ].map((v, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-2xl bg-white px-6 py-3 shadow-soft">
                      <Check className="h-4 w-4 text-primary" />
                      <div className="text-left">
                        <p className="text-sm font-bold">{v.t}</p>
                        <p className="text-[10px] text-muted-foreground">{v.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-center font-serif text-3xl font-bold">Presenting our Advocates</h4>
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    { n: "Dr. Prof. Phillip Ebrall", r: "B.APP.SC. (CHIROPRACTOR)" },
                    { n: "docMike", r: "DOCTOR OF CHIROPRACTIC" },
                    { n: "docJay", r: "ADVOCATE" },
                    { n: "Dr. Chetan Upadhyaya", r: "BEC, MBA, DC (HON)" },
                    { n: "Dr. John Bruce Clark", r: "CHIROPRACTIC SPECIALIST" },
                    { n: "Dr. Michael Wohlgemuth", r: "SCOLIOSIS SPECIALIST" },
                    { n: "Dr. Philip Jason Reed", r: "CHIROPRACTOR" },
                    { n: "Dr. James Michael Durdin D.C.", r: "CHIROPRACTIC SPECIALIST" },
                    { n: "Neeta Doshi", r: "BOARD MEMBER" },
                    { n: "Ms Bia Sandhu", r: "BOARD MEMBER" },
                    { n: "Vinutha M. R", r: "MANAGING COMMITTEE" },
                    { n: "Ms Jedaver Opingo", r: "MANAGING COMMITTEE" },
                  ].map((a, i) => (
                    <div key={i} className="group rounded-3xl border border-slate-100 p-6 transition-all hover:bg-slate-50">
                      <div className="aspect-square w-full rounded-2xl bg-slate-100 p-8 grid place-items-center grayscale transition-all group-hover:grayscale-0">
                        <span className="font-serif text-5xl text-slate-300">{a.n[0]}</span>
                      </div>
                      <p className="mt-4 font-bold">{a.n}</p>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-primary">{a.r}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "supporter" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-16"
            >
              <div className="grid gap-12 lg:grid-cols-2">
                <div className="rounded-[2.5rem] bg-slate-900 p-8 text-white md:p-14">
                  <h3 className="font-serif text-3xl font-bold">What is a Supporter?</h3>
                  <ul className="mt-8 space-y-4">
                    {[
                      "A follower, backer, or advocate.",
                      "A strong, loyal, staunch, and ardent supporter.",
                      "Someone who supports or champions something.",
                      "A person who contributes to the fulfillment of a need.",
                    ].map((text, i) => (
                      <li key={i} className="flex gap-4 text-slate-300">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-glow" />
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-[2.5rem] bg-primary p-8 text-white md:p-14">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">Historical Reference</span>
                  <h3 className="mt-4 font-serif text-2xl font-bold leading-tight">
                    "Mahatma Gandhi's Health Restored Through Chiropractic"
                  </h3>
                  <p className="mt-6 text-sm leading-relaxed opacity-90">
                    Documented in The National Chiropractic Journal, April 1942. Gandhi was under
                    the care of Dr. Peter Boike, head of the Chiropractic Health Institute of Calcutta.
                  </p>
                  <div className="mt-8 rounded-2xl bg-white/10 p-6 backdrop-blur">
                    <p className="text-xs italic leading-relaxed">
                      This historic connection underscores the deep roots of Chiropractic in India's wellness history.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2.5rem] border border-slate-100 p-8 md:p-14">
                <div className="mx-auto max-w-3xl text-center">
                  <h4 className="font-serif text-3xl font-bold">Join the Community</h4>
                  <p className="mt-4 text-muted-foreground">
                    Even though Chiropractic is new to India, millions globally experience its benefits annually.
                    Will you consider being an advocate to support the cause in India?
                  </p>

                  <div className="mt-12 grid gap-4 text-left">
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Name" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-primary/50" />
                      <input type="email" placeholder="Email" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-primary/50" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="Mobile Number" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-primary/50" />
                      <input type="text" placeholder="Country" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-primary/50" />
                    </div>
                    <input type="text" placeholder="Education, Degrees" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-primary/50" />
                    <textarea placeholder="Your areas of interest..." rows={4} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-primary/50" />

                    <button className="mt-4 w-full rounded-full gradient-cta py-4 text-sm font-bold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02]">
                      SUBMIT APPLICATION
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Blog() {
  const posts = [
    {
      title: "How chiropractors effectively manage tension headaches",
      date: "May 25, 2023",
      author: "docJay",
      category: "Chiropractic Education",
      desc: "Understanding the role of spinal alignment in reducing chronic tension and migraine frequency.",
    },
    {
      title: "Do I need a Chiropractor or a Physical Therapist?",
      date: "May 25, 2023",
      author: "docJay",
      category: "Chiropractic Education",
      desc: "Comparing treatment approaches for musculoskeletal health and long-term recovery.",
    },
    {
      title: "Abdominal Conditions & Chiropractic Care",
      date: "March 5, 2023",
      author: "docJay",
      category: "Chiropractic Condition",
      desc: "Exploring the neurological link between spinal health and digestive function.",
    },
    {
      title: "Chiropractor and the Orthopedic Surgeon",
      date: "March 5, 2023",
      author: "docJay",
      category: "Chiropractic Education",
      desc: "The collaborative relationship between surgical and non-surgical spinal care.",
    },
  ];

  const categories = ["Chiropractic Care", "Chiropractic Condition", "Chiropractic Education", "Uncategorized"];

  return (
    <section id="blog" className="relative bg-slate-50/30 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Blog Feed */}
          <div className="lg:col-span-8">
            <SectionHeader
              align="left"
              eyebrow="Insights"
              title={<>Our Latest <em className="italic font-light">Articles</em></>}
              desc="Deep dives into chiropractic science, education, and patient success stories."
            />

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {posts.map((post, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group overflow-hidden rounded-[2.5rem] bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
                >
                  <div className="aspect-[16/9] w-full bg-slate-100 p-8 grid place-items-center grayscale transition-all group-hover:grayscale-0">
                    <span className="font-serif text-3xl text-slate-300">Article</span>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      {post.category}
                    </span>
                    <h3 className="mt-2 font-serif text-xl leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {post.desc}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-slate-50 pt-4">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-secondary" />
                        <span className="text-[10px] font-bold">{post.author}</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">{post.date}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              {/* Search */}
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                <h4 className="text-xs font-bold uppercase tracking-widest">Search</h4>
                <div className="mt-4 flex gap-2">
                  <input type="text" placeholder="Search articles..." className="flex-1 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/30" />
                  <button className="rounded-xl gradient-primary px-4 py-2 text-white">
                    <Target className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                <h4 className="text-xs font-bold uppercase tracking-widest">Categories</h4>
                <ul className="mt-4 space-y-2">
                  {categories.map((cat, i) => (
                    <li key={i}>
                      <a href="#" className="flex items-center justify-between rounded-lg px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-slate-50 hover:text-primary">
                        {cat}
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Archives */}
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                <h4 className="text-xs font-bold uppercase tracking-widest">Archives</h4>
                <select className="mt-4 w-full rounded-xl border border-slate-100 bg-slate-50 px-4 py-2 text-sm outline-none">
                  <option>Select Month</option>
                  <option>May 2023</option>
                  <option>March 2023</option>
                </select>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function FacultyPositions() {
  return (
    <section id="faculty" className="relative overflow-hidden py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary"
          >
            India/Foreign Registry Service
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900"
          >
            Faculty <em className="italic font-light">Positions</em>
          </motion.h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight text-primary">
                Chiropractic & CBP Faculty Positions in Asia & Middle East
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                <p>
                  As a chiropractic & CBP faculty pioneer, unlike a stagnant environment in America or Canada, 
                  there is a wealth of opportunities to grow your knowledge base and teach as a pioneer. 
                  Chiropractic is still in the development stages in most eastern countries and you will 
                  be at the forefront of it all. <span className="font-bold text-slate-900">India, Philippines and Dubai need you.</span>
                </p>
                <p>
                  Chiropractic is booming in the Asia, Far East and the Middle East. While it is relatively 
                  young and still developing in Asia, it offers a challenging yet gratifying endeavor. 
                  The rewards go beyond earning—it's an opportunity to bring chiropractic care and wellness 
                  to a new culture as a faculty.
                </p>
                <p className="rounded-2xl bg-emerald-50/50 p-6 border-l-4 border-primary italic">
                  "Join the adventure, the challenge, and the opportunity of a lifetime. Become the forerunners 
                  to establish Chiropractic and CBP education as a faculty."
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {["India", "Philippines", "Dubai (UAE)"].map((city) => (
                <div key={city} className="flex items-center gap-2 rounded-full border border-emerald-100 bg-white px-5 py-2 text-sm font-medium text-slate-700 shadow-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  {city}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="rounded-[2.5rem] bg-slate-900 p-8 md:p-12 text-white shadow-elegant-large relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
              
              <div className="relative z-10">
                <h4 className="text-2xl font-bold">Register Here</h4>
                <p className="mt-2 text-sm text-slate-400">
                  Please provide the requested information below with as much detail as possible. 
                  Only completed forms will be considered.
                </p>

                <div className="mt-10 grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Name</label>
                      <input type="text" placeholder="Name*" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Email</label>
                      <input type="email" placeholder="Your email address*" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors" />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Mobile</label>
                      <input type="text" placeholder="Your Mobile Number*" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Country</label>
                      <input type="text" placeholder="Country you are from*" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Address</label>
                    <input type="text" placeholder="Address*" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors" />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Interests</label>
                    <textarea rows={3} placeholder="Your specific way to support Chiropractic Education and other means/ways" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-primary/50 transition-colors" />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Attach Resume</label>
                      <div className="relative group">
                        <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-400 group-hover:bg-white/10 transition-colors">
                          <Plus className="h-4 w-4" /> Choose File
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Attach Photograph</label>
                      <div className="relative group">
                        <input type="file" className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-400 group-hover:bg-white/10 transition-colors">
                          <Plus className="h-4 w-4" /> Choose File
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="mt-4 w-full rounded-full gradient-cta py-4 text-sm font-bold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.02] active:scale-[0.98]">
                    SUBMIT APPLICATION
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionDivider() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="h-px w-full bg-slate-200/40" />
    </div>
  );
}

