import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "@/data/catalog";
import { useStore } from "@/lib/store";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Your Wishlist — ACTDF" },
      { name: "description", content: "Sarees you have saved at ACTDF, ready to move to your bag." },
      { property: "og:title", content: "Your Wishlist — ACTDF" },
      { property: "og:description", content: "Saved handwoven Kota Doria sarees." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const { wishlist, hydrated } = useStore();
  const saved = products.filter((p) => wishlist.includes(p.slug));

  return (
    <div className="container-page section-y">
      <p className="eyebrow">Saved</p>
      <h1 className="display mt-4 text-4xl md:text-6xl">Your wishlist</h1>

      {!hydrated ? null : saved.length === 0 ? (
        <div className="mt-10">
          <p className="text-sm text-muted-foreground">Nothing saved yet.</p>
          <Link
            to="/shop"
            className="mt-8 inline-block bg-primary px-10 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground"
          >
            Shop sarees
          </Link>
        </div>
      ) : (
        <div className="mt-14 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {saved.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
