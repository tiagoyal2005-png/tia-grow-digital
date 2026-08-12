import { createFileRoute, Link } from "@tanstack/react-router";
import { craftJourney } from "@/data/catalog";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/craft")({
  head: () => ({
    meta: [
      { title: "Craft & Process — Thread to Finish | Kota Doria" },
      {
        name: "description",
        content:
          "Thread, weave, craft, finish: the five stages behind every handwoven Kota Doria Kota Doria saree, from warping the yarn to the final fold.",
      },
      { property: "og:title", content: "Craft & Process — Thread to Finish | Kota Doria" },
      { property: "og:description", content: "The five stages behind every handwoven Kota Doria saree." },
    ],
  }),
  component: CraftPage,
});

function CraftPage() {
  return (
    <div>
      <section className="container-page section-y">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Craft &amp; process</p>
          <h1 className="display mt-4 text-4xl md:text-6xl">
            Thread → Weave → Craft → Finish → You
          </h1>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            Nothing here is fast. A single festive saree takes eleven days at the
            loom, and roughly a third of that time produces nothing you can see.
          </p>
        </Reveal>
      </section>

      <ol>
        {craftJourney.map((stage, i) => (
          <li key={stage.step} className="grid items-stretch border-t border-border md:grid-cols-2">
            <div
              className={`hover-zoom aspect-[4/3] overflow-hidden bg-muted md:aspect-auto md:min-h-[30rem] ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <img
                src={stage.image}
                alt={stage.imageAlt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-center px-5 py-14 md:px-16">
              <Reveal className="max-w-md">
                <p className="eyebrow">
                  {String(i + 1).padStart(2, "0")} · {stage.step}
                </p>
                <h2 className="display mt-4 text-3xl md:text-4xl">{stage.title}</h2>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
              </Reveal>
            </div>
          </li>
        ))}
      </ol>

      <section className="border-t border-border">
        <div className="container-page section-y text-center">
          <Reveal>
            <h2 className="display mx-auto max-w-2xl text-3xl md:text-5xl">
              The result, on the loom now
            </h2>
            <Link
              to="/shop"
              className="mt-9 inline-block bg-primary px-10 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground"
            >
              Shop sarees
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
