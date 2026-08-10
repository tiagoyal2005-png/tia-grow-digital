import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { processSteps, services } from "@/data/site";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { ctaClasses } from "@/components/CTAButtons";

const title = "Digital Marketing Services — SEO, AI Automation & Lead Gen";
const description =
  "SEO, website development, social media marketing, AI automation, LinkedIn personal branding, lead generation and email marketing — delivered freelance by Tia Goyal.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Digital marketing services",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
              "@type": "Service",
              name: s.title,
              description: s.description,
              serviceType: s.title,
              provider: { "@type": "Person", name: "Tia Goyal" },
            },
          })),
        }),
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="bg-gradient-soft">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <span className="eyebrow">Services</span>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Digital marketing services built around{" "}
              <span className="text-gradient">measurable growth.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Pick the single channel that's holding you back, or combine
              several into an end-to-end growth system. Every engagement starts
              with a free discovery call and a clearly scoped plan.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <nav aria-label="Jump to a service" className="mt-8 flex flex-wrap gap-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/services"
                  hash={s.slug}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-mauve hover:text-primary"
                >
                  {s.title}
                </Link>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-y" aria-label="Service details">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <ServiceCard service={s} detailed />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-lavender" aria-labelledby="services-process">
        <div className="container-page section-y">
          <Reveal>
            <span className="eyebrow">How we'll work</span>
            <h2 id="services-process" className="mt-4 text-3xl font-bold sm:text-4xl">
              A five-step engagement, start to finish
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-6 md:grid-cols-5">
            {processSteps.map((step, i) => (
              <Reveal as="li" key={step.step} delay={i * 70}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="text-sm font-bold tracking-[0.18em] text-accent">
                    {step.step}
                  </span>
                  <h3 className="mt-3 text-base font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page section-y" aria-labelledby="custom-quote">
        <Reveal>
          <div className="card-premium grid items-center gap-8 p-8 md:grid-cols-[1.3fr_0.7fr] md:p-12">
            <div>
              <span className="eyebrow">Custom scope</span>
              <h2 id="custom-quote" className="mt-4 text-2xl font-bold sm:text-3xl">
                Need something that doesn't fit a package?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Most projects are a blend. Tell me your goal, timeline and
                budget range, and I'll put together a custom quote with a
                prioritised scope — no generic proposals.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/contact" className={ctaClasses({ size: "lg" })}>
                Request a custom quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/book-a-call"
                className={ctaClasses({ variant: "outline", size: "lg" })}
              >
                Book a Free Discovery Call
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <CTASection secondary={false} />
    </>
  );
}
