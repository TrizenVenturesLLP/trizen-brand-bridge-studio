import { ArrowRight, Building2, Handshake, MapPinned, RadioTower } from "lucide-react";
import { Link, createFileRoute } from "@tanstack/react-router";

import { Eyebrow, PageFrame } from "@/components/marketing-site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Trizen Marketing | Markets, Media & Audiences" },
      { name: "description", content: "Get to know Trizen Marketing: a connected marketing and media partner helping businesses strengthen their brands and reach new audiences." },
      { property: "og:title", content: "About Trizen Marketing | Markets, Media & Audiences" },
      { property: "og:description", content: "Connecting brands with markets, media, audiences, and the partners who bring it all together." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const principles = [
  { title: "Start with the objective", text: "Every campaign begins with what your business needs to achieve—not a preset channel list.", icon: Building2 },
  { title: "Think across the full journey", text: "We connect awareness, consideration, local visibility, and conversion into one coherent experience.", icon: RadioTower },
  { title: "Bring the right partners together", text: "Media owners, agencies, creators, publishers, venues, and production teams work as one campaign team.", icon: Handshake },
  { title: "Make every market relevant", text: "Plans adapt to the audience, geography, category, and moment—whether local or national.", icon: MapPinned },
];

function AboutPage() {
  return (
    <PageFrame>
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <Eyebrow light>Who we are</Eyebrow>
          <h1 className="max-w-5xl font-display text-5xl font-extrabold leading-[1.08] sm:text-6xl lg:text-7xl">We help good brands<br />find their <span className="text-trizen-lime">next audience.</span></h1>
          <div className="mt-12 grid gap-8 border-t border-background/20 pt-8 md:grid-cols-[0.65fr_1fr] md:gap-16">
            <p className="text-xs font-bold uppercase tracking-widest text-background/55">Trizen Marketing</p>
            <p className="max-w-2xl text-lg leading-8 text-background/85">We’re a marketing, advertising, and media solutions company helping startups, growing businesses, and established brands strengthen their presence and expand their opportunities.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <Eyebrow>The Trizen approach</Eyebrow>
        <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">Connected thinking. Practical marketing.</h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">Through our network of media owners, advertising agencies, publishers, content creators, and strategic partners, we connect brands with relevant opportunities and the people they’re looking to reach.</p>
        <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2">
          {principles.map(({ title, text, icon: Icon }, index) => (
            <article key={title} className="border-b border-r border-border p-6 sm:p-8">
              <div className="mb-8 flex items-center justify-between"><Icon aria-hidden="true" className="size-6 text-trizen-blue" /><span className="text-xs font-bold text-trizen-red">0{index + 1}</span></div>
              <h3 className="font-display text-xl font-extrabold">{title}</h3>
              <p className="mt-3 max-w-lg text-sm leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-secondary">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12 lg:py-16">
          <div><p className="mb-3 text-xs font-bold uppercase tracking-widest text-trizen-blue">Markets, media & audiences</p><h2 className="font-display text-3xl font-extrabold">Where could your brand go next?</h2></div>
          <Link to="/contact" className="inline-flex h-12 items-center gap-2 self-start text-sm font-bold text-trizen-blue transition-colors hover:text-trizen-red md:self-auto">Meet your marketing partner <ArrowRight aria-hidden="true" className="size-4" /></Link>
        </div>
      </section>
    </PageFrame>
  );
}