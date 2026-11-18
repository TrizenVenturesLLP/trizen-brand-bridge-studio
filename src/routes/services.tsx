import { ArrowUpRight } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import {
  ContactButton,
  Eyebrow,
  PageFrame,
  services,
} from "@/components/marketing-site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Marketing Services | Trizen Marketing" },
      { name: "description", content: "Explore Trizen Marketing’s expertise in brand strategy, media buying, outdoor advertising, digital marketing, creators, events, and campaign management." },
      { property: "og:title", content: "Marketing Services | Trizen Marketing" },
      { property: "og:description", content: "An integrated mix of brand, media, digital, outdoor, creator, and campaign-management services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ServicesPage() {
  return (
    <PageFrame>
      <section className="border-b border-border bg-secondary">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <Eyebrow>What we do</Eyebrow>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[1.08] sm:text-6xl">One connected plan.<br /><span className="text-trizen-blue">More ways to be seen.</span></h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">Strategy, channels, and campaign delivery—brought together around what your business wants to achieve.</p>
        </div>
      </section>
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>Areas of expertise</Eyebrow>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Built around the whole picture.</h2>
          </div>
          <span className="pb-1 text-sm font-semibold text-muted-foreground">Eight ways to move your brand forward</span>
        </div>
        <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.number} className="group flex min-h-[230px] flex-col justify-between border-b border-r border-border p-5 transition-colors hover:bg-secondary sm:p-6">
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-extrabold text-trizen-red">{service.number}</span>
                <service.icon aria-hidden="true" className="size-5 text-trizen-blue transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <div className="mt-10">
                <h3 className="font-display text-lg font-extrabold leading-snug">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-foreground text-background">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-12 lg:py-16">
          <div><p className="mb-3 text-xs font-bold uppercase tracking-widest text-background/60">Have an objective in mind?</p><h2 className="font-display text-3xl font-extrabold">Let’s shape the right mix for your brand.</h2></div>
          <ContactButton>Build your campaign</ContactButton>
        </div>
      </section>
    </PageFrame>
  );
}