import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Layers3,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  Radio,
  Sparkles,
  X,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const CONTACT_EMAIL = "contact@trizenventures.com";

export const services = [
  {
    number: "01",
    title: "Marketing strategy & brand development",
    description: "A clearer story, sharper positioning, and a smarter route to market.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Media planning & media buying",
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

  return (
    <header className="relative z-20 border-b border-border bg-background">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link to="/" aria-label="Trizen Marketing home" onClick={() => setMenuOpen(false)} className="group flex items-center gap-2.5">
          <img
            src="/lovable-uploads/trizen-logo.png"
            alt="Trizen"
            width={1713}
            height={393}
            className="h-8 w-auto"
          />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to} className="text-sm font-semibold text-foreground transition-colors hover:text-trizen-blue">
              {item.label}
            </Link>
          ))}
          <Button asChild size="default" className="h-11 rounded-md px-5">
            <Link to="/contact">Let’s talk <ArrowUpRight aria-hidden="true" /></Link>
          </Button>
        </nav>
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="md:hidden"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </div>
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full border-b border-border bg-background px-5 pb-5 pt-2 shadow-lg md:hidden">
          {navigation.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className="flex min-h-12 items-center border-b border-border text-base font-semibold text-foreground">
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-5 h-11 w-full">
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight aria-hidden="true" /></Link>
          </Button>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-[1440px] px-5 pb-7 pt-14 sm:px-8 lg:px-12 lg:pt-16">
        <div className="grid gap-10 border-b border-background/20 pb-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-background/60">Have a brand to grow?</p>
            <h2 className="max-w-xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">Let’s put your next big idea out there.</h2>
          </div>
          <Button asChild variant="secondary" className="h-12 justify-self-start md:justify-self-end">
            <a href={`mailto:${CONTACT_EMAIL}`}>Start a conversation <ArrowUpRight aria-hidden="true" /></a>
          </Button>
        </div>
        <div className="flex flex-col gap-5 pt-6 text-sm text-background/70 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" aria-label="Trizen Marketing home" className="inline-flex">
            <img
              src="/lovable-uploads/trizen-logo.png"
              alt="Trizen"
              width={1713}
              height={393}
              className="h-7 w-auto brightness-0 invert"
            />
          </Link>
          <a className="inline-flex items-center gap-2 hover:text-background" href={`mailto:${CONTACT_EMAIL}`}>
            <Mail aria-hidden="true" className="size-4" /> {CONTACT_EMAIL}
          </a>
          <span>© {new Date().getFullYear()} Trizen Marketing</span>
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