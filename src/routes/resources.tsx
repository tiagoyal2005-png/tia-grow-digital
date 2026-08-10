import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { resources, type Resource } from "@/data/site";
import { ResourceCard } from "@/components/ResourceCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { Reveal } from "@/components/Reveal";
import { CTASection } from "@/components/CTASection";

const title = "Free Marketing Resources & SEO Checklist | Tia Goyal";
const description =
  "Free resources for founders and small teams: a 25-point SEO checklist, AI prompt packs, LinkedIn audit templates and a lead generation starter kit.";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/resources" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/resources" }],
  }),
  component: Resources,
});

function Resources() {
  function handleAction(resource: Resource) {
    if (resource.status === "available") {
      toast.success("Almost there", {
        description:
          "Enter your email below and the checklist lands in your inbox as soon as delivery is connected.",
      });
    } else {
      toast("Waitlist noted", {
        description: `${resource.title} is in progress — subscribe below to hear when it's released.`,
      });
    }
    document.getElementById("resource-signup")?.scrollIntoView({ block: "center" });
  }

  return (
    <>
      <section className="bg-gradient-soft">
        <div className="container-page py-16 md:py-24">
          <Reveal>
            <span className="eyebrow">Resources</span>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Free tools to help you{" "}
              <span className="text-gradient">grow without guesswork.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The checklists, templates and frameworks I use with clients —
              packaged so you can run them yourself.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="container-page section-y" aria-label="Resource library">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={(i % 4) * 70}>
              <ResourceCard resource={r} onAction={handleAction} />
            </Reveal>
          ))}
        </div>

        <div
          id="resource-signup"
          className="mt-14 rounded-3xl border border-border bg-ivory p-8 md:p-12"
        >
          <h2 className="text-2xl font-bold sm:text-3xl">
            Get the Free SEO Checklist
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Subscribe once and you'll receive the checklist plus every new
            resource as it's released. One email a month, unsubscribe anytime.
          </p>
          <div className="mt-6 max-w-xl">
            <NewsletterForm />
          </div>
        </div>
      </section>

      <CTASection title="Prefer it done with you, not by you?" />
    </>
  );
}
