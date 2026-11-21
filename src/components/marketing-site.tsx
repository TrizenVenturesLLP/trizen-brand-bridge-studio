import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Facebook,
  Instagram,
  Linkedin,
  Layers3,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Radio,
  Sparkles,
  X,
} from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const CONTACT_EMAIL = "contact@trizenventures.com";

export const services = [
  {
    number: "01",
    title: "Brand strategy & positioning",
    description: "A clearer story, sharper positioning, and a practical route to market.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Media planning & buying",
    description: "The right channels, the right placements, and a budget built to work harder.",
    icon: Radio,
  },
  {
    number: "03",
    title: "Outdoor & transit advertising",
    description: "Take your message out into the real world where your audience already is.",
    icon: MapPin,
  },
  {
    number: "04",
    title: "Digital & performance marketing",
    description: "Connected digital campaigns designed to turn attention into action.",
    icon: ArrowUpRight,
  },
  {
    number: "05",
    title: "Influencer & creator collaborations",
    description: "Meaningful partnerships with voices your audience already trusts.",
    icon: Megaphone,
  },
  {
    number: "06",
    title: "Apartment & community advertising",
    description: "Reach people in the places they live, meet, and spend their time.",
    icon: Layers3,
  },
  {
    number: "07",
    title: "Events & brand activations",
    description: "Create moments that bring your brand to life, face to face.",
    icon: Sparkles,
  },
  {
    number: "08",
    title: "Advertising campaign management",
    description: "From first brief to final placement, keep every moving part moving.",
    icon: ArrowRight,
  },
];

const navigation = [
  { to: "/services" as const, label: "What we do" },
  { to: "/about" as const, label: "Who we are" },
  { to: "/contact" as const, label: "Get in touch" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="relative z-50 w-full border-b border-zinc-200/90 bg-background">
      <div className="mx-auto grid h-[72px] w-full max-w-[1400px] grid-cols-[1fr_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
        <Link to="/" aria-label="Trizen Marketing home" onClick={() => setMenuOpen(false)} className="group flex items-center gap-2.5">
          <img
            src="/lovable-uploads/trizen-logo.png"
            alt="Trizen"
            width={1713}
            height={393}
            className="h-7 w-auto sm:h-8"
          />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center justify-self-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = location.pathname === item.to || location.pathname.startsWith(`${item.to}/`);
            return (
            <Link key={`${item.to}-${item.label}`} to={item.to} className={`group relative inline-flex min-h-10 items-center rounded-lg px-3 text-sm font-medium transition-colors duration-200 ${active ? "text-indigo-700" : "text-zinc-600 hover:text-indigo-700"}`}>
              {item.label}
              <span aria-hidden="true" className={`absolute inset-x-3 bottom-1 h-px origin-left bg-indigo-600 transition-transform duration-300 ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
            </Link>
            );
          })}
        </nav>
        <div className="flex shrink-0 items-center justify-self-end gap-2">
          <Link to="/contact" className="btn-book hidden h-10 items-center gap-2 rounded-lg px-4 text-sm font-semibold shadow-md shadow-indigo-600/15 transition-transform hover:-translate-y-0.5 lg:inline-flex">
            Book a Consultation <CalendarDays aria-hidden="true" className="size-4" />
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl text-zinc-700 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full border-b border-zinc-200 bg-white px-5 pb-5 pt-2 shadow-xl lg:hidden">
          {navigation.map((item) => {
            const active = location.pathname === item.to;
            return (
              <Link key={`${item.to}-${item.label}`} to={item.to} onClick={() => setMenuOpen(false)} className={`flex min-h-12 items-center rounded-lg px-4 text-base font-medium ${active ? "text-indigo-700" : "text-zinc-700"}`}>
                {item.label}
              </Link>
            );
          })}
          <Button asChild className="mt-5 h-11 w-full">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Book a Consultation <CalendarDays aria-hidden="true" /></Link>
          </Button>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-200 bg-[linear-gradient(180deg,#fff_0%,rgba(238,242,255,.8)_100%)] text-zinc-900">
      <div className="mx-auto px-5 py-10 sm:px-8 lg:px-12 lg:py-12" style={{ maxWidth: "1400px" }}>
        <div className="grid gap-10 border-b border-zinc-200 pb-8 md:grid-cols-[1.25fr_1fr_1fr]">
          <div>
            <Link to="/" aria-label="Trizen Marketing home" className="inline-flex">
              <img src="/lovable-uploads/trizen-logo.png" alt="Trizen" width={1713} height={393} className="h-7 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-sm font-semibold leading-6">Connected marketing for brands ready to grow.</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-600">Strategy, media, outdoor, digital, creator, event, and campaign solutions built around real business goals.</p>
          </div>
          <nav aria-label="Marketing navigation">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-700">Explore</h2>
            <ul className="space-y-2">
              <li><Link className="text-sm text-zinc-600 transition-colors hover:text-indigo-700" to="/">Home</Link></li>
              <li><Link className="text-sm text-zinc-600 transition-colors hover:text-indigo-700" to="/services">What we do</Link></li>
              <li><Link className="text-sm text-zinc-600 transition-colors hover:text-indigo-700" to="/about">Who we are</Link></li>
              <li><Link className="text-sm text-zinc-600 transition-colors hover:text-indigo-700" to="/contact">Get in touch</Link></li>
            </ul>
          </nav>
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-indigo-700">Contact</h2>
            <a className="flex items-center gap-2 text-sm text-zinc-600 transition-colors hover:text-indigo-700" href={`mailto:${CONTACT_EMAIL}`}>
              <Mail aria-hidden="true" className="size-4" /> {CONTACT_EMAIL}
            </a>
            <div className="mt-5 flex items-center gap-2">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/company/trizenventuresllp/", icon: Linkedin },
                { label: "Instagram", href: "https://www.instagram.com/trizenventures", icon: Instagram },
                { label: "Facebook", href: "https://www.facebook.com/trizenventures/", icon: Facebook },
              ].map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex size-9 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-600 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
                  <Icon aria-hidden="true" className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-3 pt-5 sm:flex-row sm:items-center">
          <p className="text-sm text-zinc-500">© {new Date().getFullYear()} Trizen Ventures LLP. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 text-sm text-zinc-500">
            <Link to="/contact" className="transition-colors hover:text-indigo-600">Contact</Link>
            <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-indigo-600">{CONTACT_EMAIL}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${light ? "text-background/75" : "text-trizen-blue"}`}>
      <span className={`size-2 rounded-full ${light ? "bg-trizen-lime" : "bg-trizen-red"}`} />
      {children}
    </p>
  );
}

export function ContactButton({ children = "Talk to our team" }: { children?: React.ReactNode }) {
  return (
    <Button asChild size="lg" className="h-12 rounded-md px-6">
      <Link to="/contact">{children} <ArrowRight aria-hidden="true" /></Link>
    </Button>
  );
}