import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { processSteps, site } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { ctaClasses } from "@/components/CTAButtons";

const title = "Book a Free Discovery Call — Tia Goyal";
const description =
  "Book a free 30-minute discovery call with freelance digital marketer Tia Goyal to review your SEO, website, lead generation and growth goals.";

export const Route = createFileRoute("/book-a-call")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/book-a-call" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/book-a-call" }],
  }),
  component: BookCall,
});

function BookCall() {
  return (
    <>
      <section className="bg-gradient-soft">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <span className="eyebrow">
              <CalendarCheck className="h-3.5 w-3.5" aria-hidden="true" /> Free · 30 minutes
            </span>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Book a{" "}
              <span className="text-gradient">Free Discovery Call.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A focused conversation about where you are, what's blocking
              growth, and the fastest sensible next step. If I'm not the right
              fit, I'll tell you who might be.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-y" aria-label="Scheduling">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="card-premium overflow-hidden">
              <div className="border-b border-border p-6">
                <h2 className="text-xl font-bold">Pick a time that suits you</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Scheduling runs on Calendly.
                  {site.calendlyIsPlaceholder
                    ? " The booking calendar is being connected — until then, email or WhatsApp gets you a slot just as fast."
                    : ""}
                </p>
              </div>
              <div className="flex min-h-[320px] flex-col items-center justify-center gap-5 bg-secondary/60 p-10 text-center">
                <CalendarCheck className="h-10 w-10 text-accent" aria-hidden="true" />
                <p className="max-w-sm text-sm text-muted-foreground">
                  Calendly embed placeholder — replace{" "}
                  <code className="rounded bg-card px-1.5 py-0.5 text-xs">
                    calendlyUrl
                  </code>{" "}
                  in the site config with your real scheduling link to activate
                  it here.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${site.email}?subject=Discovery%20call%20request`}
                    className={ctaClasses({})}
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Request a slot by email
                  </a>
                  <a
                    href={site.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ctaClasses({ variant: "outline" })}
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp me
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card-premium p-6 sm:p-8">
              <h2 className="text-xl font-bold">What we'll cover</h2>
              <ul className="mt-5 space-y-3">
                {[
                  "Your business, audience and current results",
                  "Where visibility or conversion is leaking",
                  "The one or two channels worth prioritising",
                  "A realistic timeline and what it would cost",
                  "Clear next steps — whether or not we work together",
                ].map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
                What happens next
              </h3>
              <ol className="mt-4 space-y-3">
                {processSteps.slice(0, 3).map((s) => (
                  <li key={s.step} className="text-sm">
                    <span className="font-bold text-accent">{s.step}</span>{" "}
                    <span className="font-semibold">{s.title}</span>
                    <span className="block text-muted-foreground">{s.body}</span>
                  </li>
                ))}
              </ol>

              <p className="mt-8 text-sm text-muted-foreground">
                Not ready for a call?{" "}
                <Link
                  to="/contact"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  Send a message instead
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
