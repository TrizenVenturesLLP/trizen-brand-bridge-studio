import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT_EMAIL, Eyebrow, PageFrame } from "@/components/marketing-site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Trizen Marketing | Let’s Start a Conversation" },
      { name: "description", content: "Tell Trizen Marketing what you’re planning. Get in touch to explore a practical marketing, media, or advertising solution for your brand." },
      { property: "og:title", content: "Contact Trizen Marketing | Let’s Start a Conversation" },
      { property: "og:description", content: "Have a brand or campaign to grow? Tell the Trizen Marketing team what you’re planning." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ContactPage() {
  const [preparedEmail, setPreparedEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Marketing enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not specified"}\n\n${message}`);
    setPreparedEmail(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`);
  };

  return (
    <PageFrame>
      <section className="bg-secondary">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <Eyebrow>Get in touch</Eyebrow>
          <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[1.08] sm:text-6xl">Tell us what you’re <span className="text-trizen-blue">planning.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">A new idea, a growing brand, a campaign around the corner—we’d love to hear what’s next for your business.</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-14 sm:px-8 md:grid-cols-[1fr_0.8fr] md:gap-20 lg:px-12 lg:py-20">
        <div>
          <Eyebrow>Start a conversation</Eyebrow>
          <h2 className="mb-8 font-display text-3xl font-extrabold">A little about your plans.</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="name">Your name <span className="text-trizen-red">*</span></Label><Input id="name" name="name" autoComplete="name" required placeholder="Name" className="h-11 bg-background" /></div>
              <div className="space-y-2"><Label htmlFor="email">Email address <span className="text-trizen-red">*</span></Label><Input id="email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" className="h-11 bg-background" /></div>
            </div>
            <div className="space-y-2"><Label htmlFor="company">Company</Label><Input id="company" name="company" autoComplete="organization" placeholder="Your business" className="h-11 bg-background" /></div>
            <div className="space-y-2"><Label htmlFor="message">What are you looking to achieve? <span className="text-trizen-red">*</span></Label><Textarea id="message" name="message" required placeholder="Tell us about your brand, your goals, or the campaign you have in mind…" className="min-h-36 resize-y bg-background" /></div>
            <Button type="submit" size="lg" className="h-12 px-6">Prepare your email <ArrowRight aria-hidden="true" /></Button>
          </form>
          {preparedEmail && (
            <div role="status" className="mt-6 border-l-2 border-trizen-blue bg-secondary p-4">
              <p className="flex items-center gap-2 text-sm font-bold text-foreground"><Check aria-hidden="true" className="size-4 text-trizen-blue" /> Your message is ready.</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">Open your email app to send your note to our team.</p>
              <a href={preparedEmail} className="mt-3 inline-flex min-h-10 items-center gap-2 text-sm font-bold text-trizen-blue hover:text-trizen-red">Open your email app <ArrowRight aria-hidden="true" className="size-4" /></a>
            </div>
          )}
        </div>
        <aside className="border-t border-border pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <Eyebrow>The right conversation starts here</Eyebrow>
          <p className="max-w-md font-display text-2xl font-extrabold leading-snug">Let’s talk about connecting your brand with new markets, media, and audiences.</p>
          <div className="mt-9 space-y-6">
            <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-start gap-4 group">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-trizen-blue"><Mail aria-hidden="true" className="size-5" /></span>
              <span><span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email our team</span><span className="mt-1 block break-all font-display text-base font-bold text-foreground transition-colors group-hover:text-trizen-blue">{CONTACT_EMAIL}</span></span>
            </a>
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-trizen-blue"><MapPin aria-hidden="true" className="size-5" /></span>
              <span><span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Where we focus</span><span className="mt-1 block font-display text-base font-bold">Local markets. Bigger possibilities.</span></span>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-secondary text-trizen-blue"><Phone aria-hidden="true" className="size-5" /></span>
              <span><span className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground">How we work</span><span className="mt-1 block max-w-sm text-sm leading-6 text-muted-foreground">Every conversation starts with your objectives. We’ll explore practical ways to help your brand reach the right audience.</span></span>
            </div>
          </div>
        </aside>
      </section>
    </PageFrame>
  );
}