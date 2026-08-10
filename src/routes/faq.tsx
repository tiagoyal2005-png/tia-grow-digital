import { createFileRoute, Link } from "@tanstack/react-router";
import { faqs } from "@/data/site";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";

const title = "FAQ — Working with Tia Goyal, Freelance Digital Marketer";
const description =
  "Answers to common questions about services, pricing, timelines, SEO results and how to start working with freelance digital marketer Tia Goyal.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faq" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <section className="bg-gradient-soft">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <span className="eyebrow">FAQ</span>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Everything you'd ask on the{" "}
              <span className="text-gradient">first call.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Clear answers on scope, pricing, timelines and how we'd work
              together.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-y" aria-label="Frequently asked questions">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <FAQAccordion items={faqs} />
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-10 text-sm text-muted-foreground">
              Question not answered here?{" "}
              <Link
                to="/contact"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Send it over
              </Link>{" "}
              and I'll reply personally.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
