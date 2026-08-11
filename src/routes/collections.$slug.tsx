import { createFileRoute, notFound } from "@tanstack/react-router";
import { collectionBySlug, productsInCollection } from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }) => {
    const collection = collectionBySlug(params.slug);
    if (!collection) throw notFound();
    return { collection };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Collection not found — ACTDF" }, { name: "robots", content: "noindex" }] };
    }
    const { collection } = loaderData;
    const title = `${collection.name} — ${collection.subtitle} | ACTDF`;
    return {
      meta: [
        { title },
        { name: "description", content: collection.description },
        { property: "og:title", content: title },
        { property: "og:description", content: collection.description },
      ],
    };
  },
  component: CollectionPage,
});

function CollectionPage() {
  const { collection } = Route.useLoaderData();
  const list = productsInCollection(collection.slug);

  return (
    <>
      <section className="relative">
        <div className="hover-zoom aspect-[16/9] max-h-[60vh] overflow-hidden bg-muted">
          <img
            src={collection.image}
            alt={collection.imageAlt}
            width={1400}
            height={1000}
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <div className="container-page section-y">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{collection.subtitle}</p>
          <h1 className="display mt-4 text-4xl md:text-6xl">{collection.name}</h1>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {collection.description}
          </p>
        </Reveal>

        {list.length === 0 ? (
          <p className="mt-14 text-sm text-muted-foreground">
            Pieces from this collection are on the loom. Check back shortly.
          </p>
        ) : (
          <div className="mt-16 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((product, i) => (
              <Reveal key={product.slug} delay={(i % 3) * 80}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
