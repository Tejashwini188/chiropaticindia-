import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Menu, Phone, Search, X } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import logo from "@/assets/logo.jpeg";

type NavLink = {
  label: string;
  to: string;
  hash?: string;
};

const links: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Mission", to: "/mission" },
  { label: "Education", to: "/education" },
  { label: "College", to: "/college" },
  { label: "Faculty", to: "/faculty" },
  { label: "Experts", to: "/experts" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (l: NavLink) => {
    if (l.hash) {
      return location.pathname === l.to && location.hash === l.hash;
    }
    return location.pathname === l.to && !location.hash;
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85 transition-shadow ${
        scrolled ? "shadow-soft" : ""
      }`}
    >
      {/* Tier 1 — Utility bar */}
      <div className="hidden border-b border-border/50 bg-secondary/40 md:block">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-5">
            <a
              href="tel:+916364047575"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              +91 636 404 7575
            </a>
            <span className="text-muted-foreground/40">·</span>
            <a
              href="mailto:info@chiropracticindia.com"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Mail className="h-3.5 w-3.5 text-primary" />
              info@chiropracticindia.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:admissions@chiropracticindia.com"
              className="font-medium transition-colors hover:text-primary"
            >
              Apply now
            </a>
            <span className="text-muted-foreground/40">·</span>
            <a href="#portal" className="font-medium transition-colors hover:text-primary">
              Student portal
            </a>
            <button
              aria-label="Search"
              className="grid h-7 w-7 place-items-center rounded-full transition-colors hover:bg-secondary"
            >
              <Search className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tier 2 — Brand + Nav (single row, no dead space) */}
      <div className="mx-auto flex max-w-[1400px] items-center gap-6 px-8 py-4">
        {/* Logo cluster */}
        <Link to="/" className="flex shrink-0 items-center gap-4">
          <span className="grid h-[108px] w-[108px] place-items-center rounded-full bg-white shadow-elegant ring-[3px] ring-primary/15">
            <img
              src={logo}
              alt="Chiropractic India logo"
              className="h-[96px] w-[96px] rounded-full object-cover"
            />
          </span>
          <div className="flex flex-col leading-none">
            <p className="font-serif text-[30px] font-semibold tracking-tight leading-none">
              Chiropractic <em className="italic font-light text-primary">India</em>
            </p>
            <p className="mt-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
              <span className="h-px w-5 bg-primary/60" />
              Setting Standards
              <span className="h-px w-5 bg-primary/60" />
            </p>
          </div>
        </Link>

        {/* Center nav — fills the middle */}
        <nav className="hidden flex-1 items-center justify-center gap-0.5 lg:flex">
          {links.map((l) => {
            const active = isActive(l);
            return (
              <Link
                key={l.label}
                to={l.to}
                hash={l.hash}
                className={`relative px-3 py-2 text-[11.5px] font-semibold uppercase tracking-[0.16em] transition-colors hover:text-foreground after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:-translate-x-1/2 after:bg-primary after:transition-all ${
                  active
                    ? "text-foreground after:w-[60%]"
                    : "text-muted-foreground after:w-0"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="ml-auto flex shrink-0 items-center gap-2 lg:ml-0">
          <a
            href="#donate"
            className="hidden items-center gap-2 rounded-full gradient-cta px-5 py-3 text-[13px] font-semibold text-primary-foreground shadow-elegant transition-transform hover:scale-[1.03] md:inline-flex"
          >
            Support the Foundation
            <ArrowRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-border bg-background lg:hidden"
        >
          <div className="mx-auto max-w-[1400px] px-4 py-4">
            <div className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="#donate"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full gradient-cta px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Support the Foundation
                <ArrowRight className="h-4 w-4" />
              </a>
              <div className="mt-4 flex flex-col gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
                <a href="tel:+916364047575" className="inline-flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                  +91 636 404 7575
                </a>
                <a
                  href="mailto:info@chiropracticindia.com"
                  className="inline-flex items-center gap-2"
                >
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  info@chiropracticindia.com
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
