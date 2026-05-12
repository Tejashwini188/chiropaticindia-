import { motion } from "framer-motion";
import { ArrowRight, Info, UsersRound, Handshake } from "lucide-react";
import { SpineVisual } from "./SpineVisual";



const infoItems = [
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

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* ambient backgrounds */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,_oklch(0.85_0.12_150_/_0.45),_transparent)]" />
        <div className="absolute -bottom-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(closest-side,_oklch(0.78_0.1_180_/_0.35),_transparent)]" />
        <div className="absolute inset-0 noise opacity-60" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 px-6 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[55%]"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Advancing Spinal Health & Wellbeing
          </span>

          <h1 className="mt-6 font-serif text-6xl leading-[1.05] tracking-tight md:text-7xl lg:text-[5.5rem]">
            Welcome To <br />
            <em className="italic font-light">Chiropractic</em> <span className="text-gradient">India</span>
          </h1>

          <p className="mt-8 max-w-xl text-xl font-medium leading-relaxed text-muted-foreground md:text-2xl">
            India’s Leading Platform for Chiropractic Education, Research, Spinal Health Awareness, and Professional Clinical Development.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full gradient-cta px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition-all hover:scale-[1.03] hover:shadow-glow"
            >
              Learn About Chiropractic
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#mission"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Join Our Mission
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Spine visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mt-16 w-full lg:mt-0 lg:w-[42%]"
        >
          <div className="relative mx-auto w-full max-w-[440px]">
            <SpineVisual />
          </div>
        </motion.div>
      </div>

      {/* 3 Informational Buttons - now part of Hero section */}
      <div className="mx-auto mt-12 grid max-w-7xl gap-12 px-6 md:grid-cols-3">
        {infoItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center text-center text-black"
          >
            <div className="relative mb-8">
              <div className="flex h-32 w-32 items-center justify-center rounded-full gradient-primary transition-transform hover:scale-105">
                <item.icon className="h-12 w-12 text-primary-foreground" strokeWidth={1.5} />
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

      {/* Decorative jagged bottom border */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block h-[12px] w-full rotate-180"
          fill="#53141F"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
}
