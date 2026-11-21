import { ArrowRight } from "lucide-react";
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
      <section className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_58%,#eef2ff_100%)]">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_18%,rgba(79,70,229,.12),transparent_28%),radial-gradient(circle_at_8%_85%,rgba(56,189,248,.10),transparent_24%)]" />
        <div className="mx-auto grid w-full max-w-[1400px] items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[680px] lg:grid-cols-[1.08fr_.92fr] lg:px-12 lg:py-24">
          <div className="max-w-[720px]">
            <Eyebrow>Trizen Marketing</Eyebrow>
            <h1 className="font-display text-[42px] font-extrabold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-6xl lg:text-[68px]">
              Make your brand
              <span className="block text-indigo-600">impossible to miss.</span>
            </h1>
            <p className="mt-6 max-w-[610px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Connected marketing across outdoor, digital, media, creators, events, and communities—planned as one campaign and delivered around real business outcomes.
            </p>
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <ContactButton>Book a marketing consultation</ContactButton>
              <Link to="/services" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition-colors hover:border-indigo-200 hover:text-indigo-700">
                Explore our services <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 border-t border-slate-200 pt-5">
              {[
                ["360°", "Connected reach"],
                ["One plan", "Clear strategy"],
                ["Full team", "Campaign delivery"],
              ].map(([value, label], index) => (
                <div key={value} className={`pr-3 ${index > 0 ? "border-l border-slate-200 pl-3 sm:pl-5" : ""}`}>
                  <p className="font-display text-base font-extrabold text-slate-900 sm:text-lg">{value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase leading-4 tracking-wider text-slate-500 sm:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[560px] lg:justify-self-end">
            <div className="absolute -inset-4 -z-10 rounded-[32px] bg-indigo-100/70 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_24px_70px_-28px_rgba(30,41,59,.38)]">
              <img
                src={campaignImage}
                alt="A large outdoor brand campaign in a busy city"
                className="h-[340px] w-full rounded-xl object-cover sm:h-[420px] lg:h-[500px]"
                fetchPriority="high"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/70 bg-white/95 p-4 shadow-lg backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:w-[270px]">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo-700">Campaign coverage</p>
                <p className="mt-2 font-display text-lg font-extrabold text-slate-950">From first impression to action</p>
                <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  Integrated, measurable, market-ready
                </div>
              </div>
            </div>
            <div className="absolute -right-3 top-8 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block lg:-right-6">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Channels</p>
              <p className="mt-1 font-display text-base font-extrabold text-slate-900">One connected system</p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-border bg-trizen-blue py-4 text-primary-foreground">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-7 gap-y-2 px-5 text-xs font-bold uppercase tracking-[0.16em] sm:justify-between sm:px-8 lg:px-12">
          {["Outdoor", "ATL / BTL", "Digital", "Influencers", "Media planning", "Events", "Communities"].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Eyebrow>Full-spectrum marketing</Eyebrow>
            <h2 className="max-w-xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Every channel.<br />One clear strategy.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">
              We unite brand strategy, media planning, creative execution, buying, and activation into a single campaign system—built around your audience and business objective.
            </p>
            <div className="mt-8">
              <ContactButton>Build your campaign</ContactButton>
            </div>
          </div>
          <div className="grid content-start sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.number} className="group border-t border-border px-1 py-5 transition-colors hover:border-trizen-blue sm:px-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-bold text-trizen-red">{service.number}</span>
                  <service.icon aria-hidden="true" className="size-5 text-trizen-blue transition-transform group-hover:-translate-y-1" />
                </div>
                <h3 className="max-w-[240px] font-display text-lg font-bold leading-snug">{service.title}</h3>
                <p className="mt-2 max-w-[280px] text-sm leading-6 text-muted-foreground">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Industries we serve</Eyebrow>
              <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">Built for different markets. Designed for real outcomes.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-muted-foreground">Category knowledge helps us find the right audience, the right context, and the right route to conversion.</p>
          </div>
          <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-5">
            {["Real estate", "Education", "Healthcare", "Automotive", "Retail", "FMCG", "Hospitality", "Technology", "Startups", "Community"].map((industry, index) => (
              <div key={industry} className="flex min-h-28 items-end justify-between border-b border-r border-border p-5">
                <h3 className="font-display text-base font-extrabold">{industry}</h3>
                <span className="text-xs font-bold text-trizen-red">{String(index + 1).padStart(2, "0")}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <Eyebrow>The difference</Eyebrow>
        <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">One accountable team from first brief to final report.</h2>
        <div className="mt-12 grid border-l border-t border-border md:grid-cols-3">
          {[
            ["01", "Discover", "We clarify the business goal, audience, territory, timing, and category opportunity."],
            ["02", "Strategize", "We shape the channel mix, message, budget, rollout, and campaign success measures."],
            ["03", "Deliver", "We coordinate partners, placements, production, optimization, and transparent reporting."],
          ].map(([number, title, text]) => (
            <article key={number} className="border-b border-r border-border p-6 sm:p-8">
              <span className="font-display text-sm font-extrabold text-trizen-red">{number}</span>
              <h3 className="mt-8 font-display text-2xl font-extrabold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-trizen-blue text-primary-foreground">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-12 lg:py-20">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary-foreground/75">Let’s build visibility</p>
            <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">Ready to move your brand forward?</h2>
          </div>
          <ContactButton>Start a conversation</ContactButton>
        </div>
      </section>
    </PageFrame>
  );
}