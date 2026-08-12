import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/data/catalog";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/heritage")({
  head: () => ({
    meta: [
      { title: "Our Heritage — Kota Doria & Kota | Kota Doria" },
      {
        name: "description",
        content:
          "The story of Kota Doria: the khat weave, the weaving families of Kota, and how Kota Doria works with them today.",
      },
      { property: "og:title", content: "Our Heritage — Kota Doria & Kota | Kota Doria" },
      { property: "og:description", content: "The khat weave, Kota, and the weavers we buy from directly." },
    ],
  }),
  component: HeritagePage,
});

function HeritagePage() {
  return (
    <div>
      <section className="container-page section-y">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Our heritage</p>
          <h1 className="display mt-4 text-4xl md:text-6xl">
            A weave that came north and stayed
          </h1>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground">
            Kota Doria arrived in Rajasthan several centuries ago and settled in
            Kota, a town on the edge of Kota. It has been woven there ever
            since, on pit looms, in homes, largely by women.
          </p>
        </Reveal>
      </section>

      <div className="hover-zoom aspect-[16/9] max-h-[62vh] overflow-hidden bg-muted">
        <img
          src={images.heritageVillage}
          alt="Wooden pit looms and hanging dyed thread inside a Kota weaving workshop"
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>

      <section className="container-page section-y grid gap-14 md:grid-cols-2">
        <Reveal>
          <h2 className="display text-3xl md:text-4xl">The khat</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Eight cotton threads and six of silk make one square. Repeated across
            six metres, that ratio gives the fabric its translucency and its
            weightlessness — a finished saree rarely passes five hundred grams.
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="display text-3xl md:text-4xl">The households</h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            We buy directly from weaving households rather than through traders,
            agree the rate before the warp is laid, and name the weaver on the
            card that travels with each saree.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-border">
        <div className="container-page section-y text-center">
          <Reveal>
            <h2 className="display mx-auto max-w-2xl text-3xl md:text-5xl">
              See how a saree is made
            </h2>
            <Link
              to="/craft"
              className="mt-9 inline-block bg-primary px-10 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground"
            >
              Craft &amp; process
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
