import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, Eye } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "@/data/catalog";
import { reviewsFor } from "@/data/catalog";
import { inr } from "@/lib/format";
import { useStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { StarRating } from "@/components/StarRating";
import { QuickView } from "@/components/QuickView";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const [quickView, setQuickView] = useState(false);
  const wishlisted = isWishlisted(product.slug);
  const productReviews = reviewsFor(product.slug);
  const rating =
    productReviews.length > 0
      ? productReviews.reduce((s, r) => s + r.rating, 0) / productReviews.length
      : 0;
  const cover = product.images[0]!;

  return (
    <article className="group flex flex-col">
      <div className="relative">
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="hover-zoom block aspect-[3/4] w-full overflow-hidden bg-muted"
        >
          <img
            src={cover.src}
            alt={cover.alt}
            width={1024}
            height={1360}
            {...(priority ? {} : { loading: "lazy" as const })}
            decoding="async"
            className="h-full w-full object-cover"
          />
        </Link>

        <button
          type="button"
          onClick={() => {
            toggleWishlist(product.slug);
            toast(wishlisted ? "Removed from wishlist" : "Saved to wishlist");
          }}
          aria-pressed={wishlisted}
          aria-label={
            wishlisted
              ? `Remove ${product.name} from wishlist`
              : `Save ${product.name} to wishlist`
          }
          className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-card/85 text-foreground backdrop-blur transition-colors hover:text-primary"
        >
          <Heart
            className={cn("h-4 w-4", wishlisted && "fill-primary text-primary")}
            aria-hidden="true"
          />
        </button>

        <button
          type="button"
          onClick={() => setQuickView(true)}
          className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 items-center gap-2 bg-card/90 px-4 py-2 text-xs uppercase tracking-[0.18em] text-foreground opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100 focus-visible:opacity-100 md:inline-flex"
        >
          <Eye className="h-3.5 w-3.5" aria-hidden="true" />
          Quick view
        </button>
      </div>

      <div className="flex flex-1 flex-col pt-5">
        <h3 className="font-serif text-xl font-light leading-snug">
          <Link to="/product/$slug" params={{ slug: product.slug }} className="link-underline">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1.5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {product.category}
        </p>
        <div className="mt-3 flex items-baseline gap-3">
          <span className="text-sm">{inr(product.price)}</span>
          {product.compareAt ? (
            <span className="text-xs text-muted-foreground line-through">
              {inr(product.compareAt)}
            </span>
          ) : null}
        </div>
        <div className="mt-2">
          <StarRating rating={rating} count={productReviews.length} />
        </div>
        <button
          type="button"
          onClick={() => {
            addToCart(product.slug);
            toast.success("Added to bag", { description: product.name });
          }}
          className="mt-5 w-full border border-foreground/25 py-3 text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          Add to bag
        </button>
      </div>

      <QuickView product={product} open={quickView} onOpenChange={setQuickView} />
    </article>
  );
}
