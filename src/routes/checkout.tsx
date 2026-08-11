import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { inr } from "@/lib/format";
import { useStore, type Address, type Order } from "@/lib/store";
import { AuthPanel } from "@/routes/account";

const paymentMethods = ["UPI", "Card", "Net banking", "Cash on delivery"] as const;

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Secure Checkout — ACTDF" },
      { name: "description", content: "Complete your ACTDF order with UPI, card, net banking or cash on delivery." },
      { property: "og:title", content: "Secure Checkout — ACTDF" },
      { property: "og:description", content: "Secure checkout for handwoven Kota Doria sarees." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { user, signIn, cartLines, subtotal, addresses, saveAddress, placeOrder, hydrated } = useStore();
  const [method, setMethod] = useState<string>(paymentMethods[0]);
  const [placed, setPlaced] = useState<Order | null>(null);

  if (!hydrated) return <div className="container-page section-y" />;
  if (!user) return <AuthPanel onSignIn={signIn} />;

  if (placed) {
    return (
      <div className="container-page section-y">
        <div className="mx-auto max-w-lg text-center">
          <p className="eyebrow">Order {placed.id}</p>
          <h1 className="display mt-4 text-4xl">Thank you</h1>
          <p className="mt-5 text-sm text-muted-foreground">
            We have your order and will email confirmation shortly. You can follow
            it from your account at any time.
          </p>
          <Link to="/account" className="mt-9 inline-block bg-primary px-10 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground">
            View order
          </Link>
        </div>
      </div>
    );
  }

  if (cartLines.length === 0) {
    return (
      <div className="container-page section-y">
        <h1 className="display text-4xl">Your bag is empty</h1>
        <Link to="/shop" className="mt-8 inline-block bg-primary px-10 py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground">
          Shop sarees
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page section-y">
      <p className="eyebrow">Secure checkout</p>
      <h1 className="display mt-4 text-4xl md:text-5xl">Checkout</h1>

      <form
        className="mt-14 grid gap-16 lg:grid-cols-[1.3fr_1fr]"
        onSubmit={(e) => {
          e.preventDefault();
          const d = new FormData(e.currentTarget);
          const existingId = String(d.get("savedAddress") || "");
          let address: Address | null =
            addresses.find((a) => a.id === existingId) ?? null;
          if (!address) {
            address = saveAddress({
              label: "Shipping",
              name: String(d.get("name")),
              line1: String(d.get("line1")),
              city: String(d.get("city")),
              state: String(d.get("state")),
              pincode: String(d.get("pincode")),
              phone: String(d.get("phone")),
            });
          }
          const order = placeOrder({ paymentMethod: method, address });
          setPlaced(order);
          toast.success("Order placed", { description: order.id });
        }}
      >
        <div className="space-y-12">
          <section aria-labelledby="shipping">
            <h2 id="shipping" className="eyebrow">Shipping details</h2>
            {addresses.length > 0 ? (
              <label className="mt-4 block text-sm">
                <span className="text-muted-foreground">Use a saved address</span>
                <select name="savedAddress" className="mt-2 w-full border border-border bg-transparent px-3 py-2.5 text-sm">
                  <option value="">Enter a new address</option>
                  {addresses.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.label} — {a.line1}, {a.city}
                    </option>
                  ))}
                </select>
              </label>
            ) : null}
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {[
                { name: "name", label: "Full name", autoComplete: "name" },
                { name: "phone", label: "Phone", autoComplete: "tel" },
                { name: "line1", label: "Address", autoComplete: "street-address" },
                { name: "city", label: "City", autoComplete: "address-level2" },
                { name: "state", label: "State", autoComplete: "address-level1" },
                { name: "pincode", label: "PIN code", autoComplete: "postal-code" },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className="eyebrow">{f.label}</span>
                  <input
                    name={f.name}
                    autoComplete={f.autoComplete}
                    className="mt-1.5 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground"
                  />
                </label>
              ))}
            </div>
          </section>

          <section aria-labelledby="payment">
            <h2 id="payment" className="eyebrow">Payment method</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {paymentMethods.map((p) => (
                <label
                  key={p}
                  className={`flex cursor-pointer items-center gap-3 border px-4 py-3.5 text-sm transition-colors ${
                    method === p ? "border-foreground" : "border-border hover:border-foreground/60"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={p}
                    checked={method === p}
                    onChange={() => setMethod(p)}
                    className="accent-[var(--primary)]"
                  />
                  {p}
                </label>
              ))}
            </div>
          </section>
        </div>

        <aside className="h-fit border border-border p-8">
          <h2 className="eyebrow">Order summary</h2>
          <ul className="mt-6 space-y-4 text-sm">
            {cartLines.map(({ product, qty }) => (
              <li key={product.slug} className="flex justify-between gap-4">
                <span className="text-muted-foreground">
                  {product.name} × {qty}
                </span>
                <span>{inr(product.price * qty)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Shipping</dt>
              <dd>Complimentary</dd>
            </div>
            <div className="flex justify-between text-base">
              <dt>Total</dt>
              <dd>{inr(subtotal)}</dd>
            </div>
          </dl>
          <button type="submit" className="mt-8 w-full bg-primary py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground">
            Place order
          </button>
          <p className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Encrypted checkout · your details are never shared
          </p>
        </aside>
      </form>
    </div>
  );
}
