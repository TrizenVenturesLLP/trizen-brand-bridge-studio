import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import {
  ContactButton,
  Eyebrow,
  PageFrame,
  services,
} from "@/components/marketing-site";
import campaignImage from "@/assets/trizen-city-campaign.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Trizen Marketing | Connecting Brands with Markets" },
      {
        name: "description",
        content: "Marketing, media, and advertising that help ambitious brands reach new markets and the right audiences.",
      },
      { property: "og:title", content: "Trizen Marketing | Connecting Brands with Markets" },
      {
        property: "og:description",
        content: "Marketing, media, and advertising that help ambitious brands reach new markets and the right audiences.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function HomePage() {
  return (
    <PageFrame>
      <section className="relative isolate flex min-h-[670px] items-center overflow-hidden bg-foreground sm:min-h-[730px] lg:min-h-[760px]">
        <img
          src={campaignImage}
          alt="A bright city street with a transit shelter advertising campaign and pedestrians"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-foreground/65" />
        <div className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-[760px]">
            <Eyebrow light>Marketing with a wider view</Eyebrow>
            <h1 className="font-display text-5xl font-extrabold leading-[1.07] tracking-normal text-background sm:text-6xl lg:text-7xl">
              Your brand belongs <span className="text-trizen-lime">out there.</span>
            </h1>
            <p className="mt-7 max-w-[530px] text-lg leading-8 text-background/90 sm:text-xl">
              We connect brands with the right markets, media, and people—turning smart marketing into real-world momentum.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <ContactButton>Let’s make a connection</ContactButton>
              <Link to="/services" className="inline-flex h-12 items-center gap-2 text-sm font-bold text-background transition-colors hover:text-trizen-lime">
                Explore our services <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>
          <div className="mt-14 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-background/70 sm:mt-20">
            <span className="flex size-9 items-center justify-center rounded-full border border-background/50"><ArrowDown aria-hidden="true" className="size-4" /></span>
            From a local moment to a bigger market
          </div>
        </div>
        <p className="absolute bottom-8 right-8 hidden text-xs font-semibold uppercase tracking-widest text-background/75 lg:block">
          Connecting brands with audiences
        </p>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-[1440px] gap-5 px-5 py-8 sm:grid-cols-3 sm:px-8 lg:px-12">
          {[
            "Built around your business objectives",
            "Connected across channels and communities",
            "Managed from first idea to final placement",
          ].map((point, index) => (
            <div key={point} className="flex items-center gap-4">
              <span className="font-display text-sm font-extrabold text-trizen-red">0{index + 1}</span>
              <span className="text-sm font-semibold leading-6 text-foreground">{point}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Eyebrow>What we bring together</Eyebrow>
            <h2 className="max-w-lg font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Good marketing doesn’t stop at one channel.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
              Trizen brings strategy, media, creative partners, and campaign delivery under one roof—so your brand can show up with intention wherever your audience is.
            </p>
            <div className="mt-8">
              <ContactButton>Make your next move</ContactButton>
            </div>
          </div>
          <div className="grid content-start sm:grid-cols-2">
            {services.slice(0, 4).map((service) => (
              <article key={service.number} className="border-t border-border px-1 py-5 sm:px-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-bold text-trizen-red">{service.number}</span>
                  <service.icon aria-hidden="true" className="size-5 text-trizen-blue" />
                </div>
                <h3 className="max-w-[240px] font-display text-lg font-bold leading-snug">{service.title}</h3>
              </article>
            ))}
            <Link to="/services" className="group flex min-h-28 items-center justify-between border-t border-border px-1 sm:col-span-2 sm:px-5">
              <span className="font-display text-base font-bold">Explore all our services</span>
              <span className="flex size-10 items-center justify-center rounded-full bg-trizen-blue text-primary-foreground transition-transform group-hover:translate-x-1"><ArrowUpRight aria-hidden="true" /></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-trizen-blue text-primary-foreground">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-12 lg:py-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-foreground/75">Big ideas welcome. Budgets considered.</p>
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">Local market or bigger campaign—let’s make it matter.</h2>
          </div>
          <Link to="/contact" className="inline-flex h-12 items-center gap-2 text-sm font-bold text-primary-foreground transition-colors hover:text-trizen-lime">
            Tell us what you’re planning <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}