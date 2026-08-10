import { createFileRoute, Link } from "@tanstack/react-router";
import { experience, site, tools, whyWorkWithMe } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";
import { Monogram } from "@/components/Monogram";

const title = "About Tia Goyal — Freelance Digital Marketer & SEO Specialist";
const description =
  "Meet Tia Goyal: a freelance digital marketer and SEO specialist with digital sales and marketing experience at 360tf and Briwon Academy, helping businesses grow with SEO, AI and lead generation.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "About", item: "/about" },
          ],
        }),
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-gradient-soft">
        <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <span className="eyebrow">About</span>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
              Hi, I'm Tia Goyal — I help businesses{" "}
              <span className="text-gradient">get found and get chosen.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              I work as a freelance digital marketer and SEO specialist. My work
              sits where search visibility, practical AI workflows and honest
              communication meet — helping founders and small teams build a
              digital presence that actually produces conversations.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="card-premium mx-auto flex max-w-sm flex-col items-center p-10 text-center">
              <Monogram className="h-20 w-20" />
              <h2 className="mt-5 text-xl font-bold">{site.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{site.role}</p>
              <p className="mt-5 text-sm font-medium text-accent">
                {site.statement}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-y" aria-labelledby="story">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 id="story" className="text-3xl font-bold sm:text-4xl">
              My approach
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Most businesses don't have a marketing problem — they have a
                clarity problem. The offer isn't sharp, the website doesn't say
                what it should, and the channels run without a shared goal. My
                first job is always to make that clear.
              </p>
              <p>
                From there, the work is deliberately unglamorous: fix the
                technical foundations, target the searches that indicate real
                buying intent, build pages that convert, and set up email and
                outreach so interest doesn't leak away.
              </p>
              <p>
                I lean heavily on AI where it genuinely helps — research,
                drafting, repurposing, reporting — while keeping strategy and
                voice human. That combination is how a solo freelancer can
                deliver the output of a small team without diluting quality.
              </p>
              <p>
                I'm early in building my public case study library, so I'd
                rather earn your trust with a clear plan and honest scoping than
                with borrowed proof.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-3xl font-bold sm:text-4xl">Experience</h2>
            <ol className="mt-8 space-y-6 border-l border-border pl-6">
              {experience.map((item) => (
                <li key={item.org} className="relative">
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
                </li>
              ))}
            </ol>

            <h2 className="mt-12 text-2xl font-bold">Tools I work with</h2>
            <ul className="mt-5 space-y-3">
              {tools.map((tool) => (
                <li key={tool.name} className="rounded-xl border border-border bg-card p-4">
                  <span className="text-sm font-bold">{tool.name}</span>
                  <span className="block text-sm text-muted-foreground">
                    {tool.use}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-lavender" aria-labelledby="values">
        <div className="container-page section-y">
          <Reveal>
            <span className="eyebrow">What you can expect</span>
            <h2 id="values" className="mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
              How I work with clients
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {whyWorkWithMe.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="card-premium h-full p-6">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-8 text-sm text-muted-foreground">
              Curious what that looks like for your business?{" "}
              <Link
                to="/services"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Explore the services
              </Link>{" "}
              or{" "}
              <Link
                to="/contact"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                send me a message
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      <div className="pt-16 md:pt-24">
        <CTASection title="Let's talk about your growth goals" />
      </div>
    </>
  );
}
