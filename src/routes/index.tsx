import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Download, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";
import {
  blogPosts,
  experience,
  processSteps,
  services,
  site,
  tools,
  valueProps,
  whyWorkWithMe,
} from "@/data/site";
import { BookCallButton, ExploreServicesButton, ctaClasses } from "@/components/CTAButtons";
import { ServiceCard } from "@/components/ServiceCard";
import { BlogCard } from "@/components/BlogCard";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { PortfolioPlaceholder } from "@/components/PortfolioPlaceholder";
import { NewsletterForm } from "@/components/NewsletterForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqs } from "@/data/site";

const title = "Tia Goyal — SEO, AI & Digital Marketing Freelancer";
const description =
  "Freelance digital marketer and SEO specialist helping businesses build stronger digital presence, attract qualified leads and grow with SEO, AI and digital marketing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: `${site.name} — Digital Marketing`,
          description,
          url: `https://${site.domain}`,
          email: site.email,
          telephone: site.phone,
          areaServed: "Worldwide",
          makesOffer: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-soft">
        <div
          aria-hidden="true"
          className="float-slower pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-lilac/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="float-slow pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-mauve/20 blur-3xl"
        />
        <div className="container-page relative grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:py-28">
          <div>
            <Reveal>
              <span className="eyebrow">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                {site.role}
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
                Grow Your Business with{" "}
                <span className="text-gradient">SEO, AI &amp; Digital Marketing.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Helping businesses build stronger digital presence, attract
                qualified leads, and turn online visibility into meaningful
                growth.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BookCallButton size="lg" />
                <ExploreServicesButton size="lg" />
              </div>
            </Reveal>
            <Reveal delay={320}>
              <ul className="mt-10 grid gap-3 sm:grid-cols-3">
                {["SEO & Search Visibility", "AI-Powered Workflows", "Qualified Lead Generation"].map(
                  (item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm font-medium text-foreground"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={120} className="relative">
            <div className="relative mx-auto max-w-lg">
              <img
                src={heroImage}
                width={1200}
                height={1200}
                alt="Abstract illustration of search visibility, data growth and AI-driven digital marketing"
                fetchPriority="high"
                decoding="async"
                className="w-full rounded-3xl shadow-lift"
              />
              <div className="float-slow absolute -bottom-6 -left-4 rounded-2xl border border-border bg-card p-4 shadow-lift sm:-left-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                  Focus areas
                </p>
                <p className="mt-1 text-sm font-semibold">
                  SEO · AI Automation · Lead Gen
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Value proposition */}
      <section className="container-page section-y" aria-labelledby="value-prop">
        <Reveal>
          <span className="eyebrow">Why this works</span>
          <h2 id="value-prop" className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            Marketing that's built around outcomes, not activity
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {valueProps.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="card-premium h-full p-6">
                <h3 className="text-lg font-bold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-lavender" aria-labelledby="home-services">
        <div className="container-page section-y">
          <Reveal>
            <span className="eyebrow">Services</span>
            <h2 id="home-services" className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              Seven ways I help businesses grow online
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              Start with one focus area or combine several into a complete
              growth system.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
            <Reveal delay={160}>
              <div className="card-premium flex h-full flex-col justify-center bg-gradient-brand p-7 text-plum-foreground">
                <h3 className="text-xl font-bold">Not sure where to start?</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-90">
                  Tell me your goal on a free call and I'll recommend the
                  shortest route to it.
                </p>
                <Link
                  to="/book-a-call"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-3"
                >
                  Book a Free Discovery Call
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why work with me */}
      <section className="container-page section-y" aria-labelledby="why-me">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">Why work with me</span>
            <h2 id="why-me" className="mt-4 text-3xl font-bold sm:text-4xl">
              A freelance partner who thinks like your growth lead
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              You get senior attention, clear scope and honest reporting —
              without agency overheads or handovers.
            </p>
            <div className="mt-8">
              <BookCallButton />
            </div>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {whyWorkWithMe.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="card-premium h-full p-6">
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-lavender" aria-labelledby="process">
        <div className="container-page section-y">
          <Reveal>
            <span className="eyebrow">The process</span>
            <h2 id="process" className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              Five steps from first call to compounding growth
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-6 md:grid-cols-5">
            {processSteps.map((step, i) => (
              <Reveal as="li" key={step.step} delay={i * 80}>
                <div className="relative h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
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

      {/* Experience + tools */}
      <section className="container-page section-y" aria-labelledby="experience">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="eyebrow">Experience</span>
              <h2 id="experience" className="mt-4 text-3xl font-bold sm:text-4xl">
                Where I've built my craft
              </h2>
            </Reveal>
            <ol className="mt-8 space-y-6 border-l border-border pl-6">
              {experience.map((item, i) => (
                <Reveal as="li" key={item.org} delay={i * 90} className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-gradient-brand"
                  />
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                    {item.period}
                  </p>
                  <h3 className="mt-1.5 text-lg font-bold">
                    {item.role} · {item.org}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <Reveal>
              <span className="eyebrow">Tools I work with</span>
              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                A lean, practical stack
              </h2>
            </Reveal>
            <ul className="mt-8 space-y-4">
              {tools.map((tool, i) => (
                <Reveal as="li" key={tool.name} delay={i * 80}>
                  <div className="card-premium flex items-start gap-4 p-5">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-sm font-bold text-plum-foreground">
                      {tool.name.slice(0, 2)}
                    </span>
                    <div>
                      <h3 className="text-base font-bold">{tool.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {tool.use}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PortfolioPlaceholder />

      {/* Lead magnet */}
      <section className="container-page pb-4" aria-labelledby="lead-magnet">
        <Reveal>
          <div className="card-premium grid gap-8 p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
            <div>
              <span className="eyebrow">
                <Download className="h-3.5 w-3.5" aria-hidden="true" /> Free resource
              </span>
              <h2 id="lead-magnet" className="mt-4 text-2xl font-bold sm:text-3xl">
                Get the Free SEO Checklist
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                A 25-point checklist covering technical setup, on-page
                fundamentals, content and tracking — the exact list I run on
                every new website. Delivered straight to your inbox.
              </p>
              <div className="mt-6">
                <Link to="/resources" className={ctaClasses({ variant: "outline" })}>
                  See all free resources
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="self-center">
              <NewsletterForm />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Blog */}
      <section className="container-page section-y" aria-labelledby="home-blog">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">From the blog</span>
              <h2 id="home-blog" className="mt-4 text-3xl font-bold sm:text-4xl">
                Ideas you can act on this week
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all hover:gap-3"
            >
              View all articles
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 90}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-lavender" aria-labelledby="home-faq">
        <div className="container-page section-y">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <span className="eyebrow">FAQ</span>
              <h2 id="home-faq" className="mt-4 text-3xl font-bold sm:text-4xl">
                Questions clients ask first
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Still curious?{" "}
                <Link to="/faq" className="font-semibold text-primary underline-offset-4 hover:underline">
                  Read the full FAQ
                </Link>
                .
              </p>
            </Reveal>
            <Reveal delay={100}>
              <FAQAccordion items={faqs.slice(0, 5)} />
            </Reveal>
          </div>
        </div>
      </section>

      <div className="pt-16 md:pt-24">
        <CTASection />
      </div>
    </>
  );
}
