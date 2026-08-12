import { createFileRoute, Link } from "@tanstack/react-router";
import { collections, productsInCollection } from "@/data/catalog";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/collections/")({
  head: () => ({
    meta: [
      { title: "Collections — Handwoven Kota Doria Sarees & Suits" },
      {
        name: "description",
        content:
          "Five collections of handwoven Kota Doria: Aranya festive weaves, Kshara everyday cotton, Vana restrained zari, Dhun contemporary drapes and Anant bridal.",
      },
      { property: "og:title", content: "Collections — Kota Doria" },
      {
        property: "og:description",
        content: "Festive, everyday, zari, contemporary and bridal Kota Doria collections.",
      },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <div className="container-page section-y">
      <Reveal>
        <p className="eyebrow">Collections</p>
        <h1 className="display mt-4 max-w-2xl text-4xl md:text-6xl">
          Five lines, each with its own reason to exist
        </h1>
      </Reveal>

      <div className="mt-16 grid gap-14 md:grid-cols-2">
        {collections.map((collection, i) => (
          <Reveal key={collection.slug} delay={(i % 2) * 90}>
            <Link
              to="/collections/$slug"
              params={{ slug: collection.slug }}
              className="hover-zoom block"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={collection.image}
                  alt={collection.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="mt-6 font-serif text-3xl font-light">{collection.name}</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {collection.subtitle} · {productsInCollection(collection.slug).length} pieces
              </p>
              <p className="mt-3 max-w-md text-sm text-muted-foreground">
                {collection.description}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
