import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { inr } from "@/lib/format";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/bag")({
  head: () => ({
    meta: [
      { title: "Your Bag — Kota Doria" },
      { name: "description", content: "Review the handwoven sarees in your Kota Doria bag before checkout." },
      { property: "og:title", content: "Your Bag — Kota Doria" },
      { property: "og:description", content: "Review your Kota Doria bag." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: BagPage,
});

function BagPage() {
  const { cartLines, subtotal, updateQty, removeFromCart, hydrated, user } = useStore();

  return (
    <div className="container-page section-y">
      <p className="eyebrow">Your bag</p>
      <h1 className="display mt-4 text-4xl md:text-6xl">Bag</h1>

      {!hydrated ? null : cartLines.length === 0 ? (
        <div className="mt-10">
          <p className="text-sm text-muted-foreground">Your bag is empty.</p>
          <Link
            to="/shop"
            className="mt-8 inline-block bg-primary px-10 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground"
          >
            Shop sarees
          </Link>
        </div>
      ) : (
        <div className="mt-14 grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <ul className="border-t border-border">
            {cartLines.map(({ product, qty, variant }) => (
              <li key={product.slug} className="flex gap-6 border-b border-border py-8">
                <Link to="/product/$slug" params={{ slug: product.slug }} className="w-28 shrink-0">
                  <img
                    src={product.images[0]!.src}
                    alt={product.images[0]!.alt}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-serif text-xl font-light">
                        <Link to="/product/$slug" params={{ slug: product.slug }} className="link-underline">
                          {product.name}
                        </Link>
                      </h2>
                      {variant ? (
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                          {product.variants?.label}: {variant}
                        </p>
                      ) : null}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.slug)}
                      aria-label={`Remove ${product.name} from bag`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-auto flex items-end justify-between pt-6">
                    <div className="flex items-center border border-border">
                      <button
                        type="button"
                        onClick={() => updateQty(product.slug, qty - 1)}
                        aria-label="Decrease quantity"
                        className="px-3 py-2"
                      >
                        <Minus className="h-3 w-3" aria-hidden="true" />
                      </button>
                      <span className="min-w-8 text-center text-sm">{qty}</span>
                      <button
                        type="button"
                        onClick={() => updateQty(product.slug, qty + 1)}
                        aria-label="Increase quantity"
                        className="px-3 py-2"
                      >
                        <Plus className="h-3 w-3" aria-hidden="true" />
                      </button>
                    </div>
                    <p className="text-sm">{inr(product.price * qty)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit border border-border p-8">
            <h2 className="eyebrow">Order summary</h2>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Subtotal</dt>
                <dd>{inr(subtotal)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Shipping</dt>
                <dd>Complimentary</dd>
              </div>
              <div className="flex justify-between border-t border-border pt-3 text-base">
                <dt>Total</dt>
                <dd>{inr(subtotal)}</dd>
              </div>
            </dl>
            <Link
              to="/checkout"
              className="mt-8 block bg-primary py-4 text-center text-xs uppercase tracking-[0.22em] text-primary-foreground"
            >
              {user ? "Proceed to checkout" : "Sign in to check out"}
            </Link>
            <p className="mt-4 text-xs text-muted-foreground">
              An account is required to complete an order, so you can track it and
              reorder later.
            </p>
          </aside>
        </div>
      )}
    </div>
  );
}
