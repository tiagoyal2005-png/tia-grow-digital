import { BookCallButton, ExploreServicesButton } from "@/components/CTAButtons";
import { Reveal } from "@/components/Reveal";

export function CTASection({
  title = "Ready to turn visibility into growth?",
  body = "Book a free 30-minute discovery call. We'll look at where you are, what's blocking growth, and the fastest sensible path forward — no pressure, no jargon.",
  secondary = true,
}: {
  title?: string;
  body?: string;
  secondary?: boolean;
}) {
  return (
    <section className="container-page pb-20 pt-4 md:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand px-6 py-14 text-espresso-foreground shadow-glow sm:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="float-slower pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-beige/30 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="float-slow pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-ivory/20 blur-3xl"
          />
          <div className="relative max-w-2xl">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{title}</h2>
            <p className="mt-5 text-base leading-relaxed opacity-90 sm:text-lg">
              {body}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BookCallButton
                size="lg"
                className="bg-card bg-none text-primary shadow-soft hover:shadow-lift"
              />
              {secondary ? <ExploreServicesButton size="lg" /> : null}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
