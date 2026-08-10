import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, Mail, MessageCircle, Clock } from "lucide-react";
import { site } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { BookCallButton } from "@/components/CTAButtons";

const title = "Contact Tia Goyal — Freelance Digital Marketer & SEO Specialist";
const description =
  "Get in touch with Tia Goyal for SEO, website development, AI automation, lead generation and email marketing. Email, WhatsApp or book a free discovery call.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Tia Goyal",
          description,
        }),
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="bg-gradient-soft">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <span className="eyebrow">Contact</span>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Let's talk about{" "}
              <span className="text-gradient">what growth looks like for you.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Share a little about your business and goals. I read every message
              and usually reply within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-y" aria-label="Contact options">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="space-y-5">
            <div className="card-premium p-6">
              <h2 className="text-lg font-bold">Direct contact</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    {site.email}
                  </a>
                </li>
                <li>
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp {site.phoneDisplay}
                  </a>
                </li>
                <li className="inline-flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  Remote · flexible across time zones
                </li>
              </ul>
            </div>

            <div className="card-premium p-6">
              <h2 className="inline-flex items-center gap-2 text-lg font-bold">
                <CalendarCheck className="h-5 w-5 text-accent" aria-hidden="true" />
                Prefer to talk?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A 30-minute discovery call is usually faster than five emails.
                No pitch, no obligation.
              </p>
              <div className="mt-5">
                <BookCallButton />
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-border p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                Social
              </h2>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {site.socials.map((s) => (
                  <li key={s.label}>{s.label}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
