import { createFileRoute, Link } from "@tanstack/react-router";
import { images, suits } from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/suits")({
  head: () => ({
    meta: [
      { title: "Kota Doria Suits — Handwoven Suit Sets from Kota | Kota Doria" },
      {
        name: "description",
        content:
          "Handwoven Kota Doria suit sets — kurta, pants and dupatta woven on the same warp by artisans of Kota, Rajasthan. Everyday cotton, festive zari and contemporary shades.",
      },
      { property: "og:title", content: "Kota Doria Suits — Handwoven Suit Sets from Kota" },
      {
        property: "og:description",
        content: "Kurta, pants and dupatta, handwoven in Kota Doria by artisans of Kota, Rajasthan.",
      },
    ],
  }),
  component: SuitsPage,
});

function SuitsPage() {
  return (
    <div>
      <section className="grid border-b border-border lg:grid-cols-2">
        <div className="order-2 flex items-center lg:order-1">
          <div className="container-page section-y max-w-xl">
            <Reveal>
              <p className="eyebrow">Kota Doria suits</p>
              <h1 className="display mt-4 text-4xl md:text-6xl">
                The weave, cut for every day
              </h1>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                A Kota Doria suit is three pieces woven as one cloth — kurta, straight
                pants and a sheer dupatta lifted from the same warp. The khat keeps it
                light through a Rajasthani summer; the borders keep it formal enough
                for an evening.
              </p>
              <Link
                to="/shop"
                search={{ filter: "suits", q: undefined, category: undefined }}
                className="mt-10 inline-flex bg-primary px-10 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
              >
                Shop all suits
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="order-1 hover-zoom aspect-[4/5] overflow-hidden bg-muted lg:order-2 lg:aspect-auto">
          <img
            src={images.suitTerracotta}
            alt="Woman wearing a terracotta handwoven Kota Doria suit with a warm sand dupatta"
            width={1024}
            height={1280}
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="container-page section-y" aria-labelledby="all-suits">
        <Reveal>
          <h2 id="all-suits" className="display text-3xl md:text-4xl">
            Suit sets
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            {suits.length} {suits.length === 1 ? "piece" : "pieces"} · sizes XS–XL,
            with made-to-measure available on request.
          </p>
        </Reveal>

        {suits.length === 0 ? (
          <p className="mt-14 text-sm text-muted-foreground">
            New suit sets are on the loom. Write to us and we will tell you when they arrive.
          </p>
        ) : (
          <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {suits.map((product, i) => (
              <Reveal key={product.slug} delay={(i % 3) * 80}>
                <ProductCard product={product} priority={i < 3} />
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
