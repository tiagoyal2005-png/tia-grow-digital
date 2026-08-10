import { Sparkles } from "lucide-react";
import { BookCallButton } from "@/components/CTAButtons";

/**
 * Honest placeholder while the case study library is being built.
 * Replace the placeholder items with real projects when available.
 */
export function PortfolioPlaceholder() {
  const slots = [
    {
      label: "SEO Growth Case Study",
      note: "Documenting search visibility and qualified traffic growth.",
    },
    {
      label: "Website Build Case Study",
      note: "Conversion-focused build with performance benchmarks.",
    },
    {
      label: "Lead Generation Case Study",
      note: "Outreach system, pipeline structure and response rates.",
    },
  ];

  return (
    <section
      aria-labelledby="selected-work"
      className="container-page section-y"
    >
      <div className="max-w-2xl">
        <span className="eyebrow">Selected Work — Coming Soon</span>
        <h2 id="selected-work" className="mt-4 text-3xl font-bold sm:text-4xl">
          Building My Case Study Library
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          I'd rather show real, documented results than fill this page with
          stock screenshots. Client work is underway and case studies will be
          published here as they're completed and approved for sharing.
        </p>
      </div>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {slots.map((slot) => (
          <li
            key={slot.label}
            className="rounded-2xl border border-dashed border-border bg-secondary/50 p-6"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-card text-accent shadow-soft">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-base font-semibold">{slot.label}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{slot.note}</p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-accent">
              In progress
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <BookCallButton label="Talk about your project" />
      </div>
    </section>
  );
}
