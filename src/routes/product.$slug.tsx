import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Heart, Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { toast } from "sonner";
import { productBySlug, relatedProducts, type Product } from "@/data/catalog";
import { inr } from "@/lib/format";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { ProductCard } from "@/components/ProductCard";
import { ProductReviews } from "@/components/ProductReviews";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }): { product: Product } => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Saree not found — ACTDF" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name} — ACTDF`;
    return {
      meta: [
        { title },
        { name: "description", content: product.shortDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: product.shortDescription },
        { property: "og:type", content: "product" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const [active, setActive] = useState(0);
  const [qty, setQty] = useState(1);
  const [variant, setVariant] = useState(product.variants?.options[0]);
  const wishlisted = isWishlisted(product.slug);
  const related = relatedProducts(product.slug);
  const cover = product.images[active] ?? product.images[0]!;

  return (
    <div className="container-page py-10 md:py-16">
      <nav aria-label="Breadcrumb" className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
        <Link to="/shop" className="link-underline">
          Shop
        </Link>
        <span className="px-2">/</span>
        <span>{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        {/* Gallery */}
        <div>
          <div className="aspect-[3/4] overflow-hidden bg-muted">
            <img
              src={cover.src}
              alt={cover.alt}
              width={1024}
              height={1360}
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>
          <ul className="mt-4 flex gap-4 overflow-x-auto pb-1">
            {product.images.map((image, i) => (
              <li key={image.src + i}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`View image ${i + 1}`}
                  aria-current={i === active}
                  className={cn(
                    "block h-28 w-22 shrink-0 overflow-hidden border transition-colors",
                    i === active ? "border-foreground" : "border-transparent",
                  )}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="display mt-4 text-4xl md:text-5xl">{product.name}</h1>
          <p className="mt-5 text-lg">{inr(product.price)}</p>
          {product.compareAt ? (
            <p className="text-xs text-muted-foreground line-through">{inr(product.compareAt)}</p>
          ) : null}
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            {product.shortDescription}
          </p>

          {product.variants ? (
            <div className="mt-8">
              <p className="eyebrow">{product.variants.label}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.variants.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setVariant(option)}
                    className={cn(
                      "border px-4 py-2 text-xs uppercase tracking-[0.16em] transition-colors",
                      variant === option ? "border-foreground" : "border-border hover:border-foreground",
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center border border-border">
              <button
                type="button"
                onClick={() => setQty((v) => Math.max(1, v - 1))}
                aria-label="Decrease quantity"
                className="px-3 py-3"
              >
                <Minus className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
              <span className="min-w-8 text-center text-sm" aria-live="polite">
                {qty}
              </span>
              <button
                type="button"
                onClick={() => setQty((v) => v + 1)}
                aria-label="Increase quantity"
                className="px-3 py-3"
              >
                <Plus className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                addToCart(product.slug, qty, variant);
                toast.success("Added to bag", { description: product.name });
              }}
              className="flex-1 bg-primary py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Add to bag
            </button>
            <button
              type="button"
              onClick={() => {
                toggleWishlist(product.slug);
                toast(wishlisted ? "Removed from wishlist" : "Saved to wishlist");
              }}
              aria-pressed={wishlisted}
              className="inline-flex items-center justify-center gap-2 border border-foreground/25 px-8 py-4 text-xs uppercase tracking-[0.22em] transition-colors hover:border-foreground"
            >
              <Heart className={cn("h-4 w-4", wishlisted && "fill-primary text-primary")} aria-hidden="true" />
              {wishlisted ? "Saved" : "Wishlist"}
            </button>
          </div>

          <ul className="mt-8 space-y-3 border-t border-border pt-6 text-xs text-muted-foreground">
            <li className="flex items-center gap-3">
              <Truck className="h-4 w-4" aria-hidden="true" />
              Free insured delivery across India · dispatched in 2 working days
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Secure payment · UPI, cards, net banking and cash on delivery
            </li>
          </ul>

          <div className="mt-10 space-y-8 border-t border-border pt-8">
            <Block title="The story">
              <p className="text-sm text-muted-foreground">{product.story}</p>
            </Block>
            <Block title="Fabric & weave">
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>{product.fabric}</li>
                <li>{product.weave}</li>
                <li>Woven in {product.origin}</li>
                {product.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </Block>
            <Block title="Care">
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {product.care.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Block>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <ProductReviews slug={product.slug} />
      </div>

      <section className="mt-24" aria-labelledby="related">
        <h2 id="related" className="display text-3xl md:text-4xl">
          You may also like
        </h2>
        <div className="mt-12 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item, i) => (
            <Reveal key={item.slug} delay={i * 80}>
              <ProductCard product={item} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="eyebrow">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
