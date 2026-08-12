import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { products } from "@/data/catalog";
import { inr } from "@/lib/format";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Your Account — Orders, Tracking & Addresses | Kota Doria" },
      {
        name: "description",
        content: "Sign in to view Kota Doria orders, track deliveries, manage saved addresses and your wishlist.",
      },
      { property: "og:title", content: "Your Account — Kota Doria" },
      { property: "og:description", content: "Orders, tracking, addresses and recommendations." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  const { user, orders, addresses, wishlist, saveAddress, signIn, signOut, hydrated } = useStore();

  if (!hydrated) return <div className="container-page section-y" />;
  if (!user) return <AuthPanel onSignIn={signIn} />;

  const recommended = products
    .filter((p) => !wishlist.includes(p.slug))
    .slice(0, 3);

  return (
    <div className="container-page section-y">
      <p className="eyebrow">Your account</p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <h1 className="display text-4xl md:text-6xl">Hello, {user.name}</h1>
        <button type="button" onClick={signOut} className="link-underline text-xs uppercase tracking-[0.2em]">
          Sign out
        </button>
      </div>

      <div className="mt-16 grid gap-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-16">
          <section aria-labelledby="orders">
            <h2 id="orders" className="display text-2xl md:text-3xl">Orders & tracking</h2>
            {orders.length === 0 ? (
              <p className="mt-4 text-sm text-muted-foreground">No orders yet.</p>
            ) : (
              <ul className="mt-8 space-y-8">
                {orders.map((order) => (
                  <li key={order.id} className="border border-border p-6">
                    <div className="flex flex-wrap justify-between gap-3">
                      <p className="text-sm">{order.id}</p>
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {new Date(order.placedAt).toLocaleDateString("en-IN")} · {inr(order.total)} · {order.paymentMethod}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                      {order.items.map((item) => (
                        <li key={item.slug}>
                          {item.name} × {item.qty}
                        </li>
                      ))}
                    </ul>
                    <ol className="mt-6 grid gap-2 sm:grid-cols-4">
                      {order.trackingSteps.map((step) => (
                        <li key={step.label} className="text-xs">
                          <span className={`block h-px w-full ${step.done ? "bg-primary" : "bg-border"}`} />
                          <span className={`mt-2 block ${step.done ? "" : "text-muted-foreground"}`}>{step.label}</span>
                        </li>
                      ))}
                    </ol>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section aria-labelledby="addresses">
            <h2 id="addresses" className="display text-2xl md:text-3xl">Saved addresses</h2>
            {addresses.length === 0 ? (
              <p className="mt-4 text-sm text-muted-foreground">No addresses saved yet — you can add one at checkout.</p>
            ) : (
              <ul className="mt-6 grid gap-6 sm:grid-cols-2">
                {addresses.map((a) => (
                  <li key={a.id} className="border border-border p-5 text-sm text-muted-foreground">
                    <p className="text-foreground">{a.label} · {a.name}</p>
                    <p className="mt-1">{a.line1}</p>
                    <p>{a.city}, {a.state} {a.pincode}</p>
                    <p className="mt-1">{a.phone}</p>
                  </li>
                ))}
              </ul>
            )}
            <AddressForm onSave={saveAddress} />
          </section>

          <section aria-labelledby="recs">
            <h2 id="recs" className="display text-2xl md:text-3xl">Selected for you</h2>
            <ul className="mt-6 grid gap-6 sm:grid-cols-3">
              {recommended.map((p) => (
                <li key={p.slug}>
                  <Link to="/product/$slug" params={{ slug: p.slug }} className="hover-zoom block">
                    <div className="aspect-[3/4] overflow-hidden bg-muted">
                      <img src={p.images[0]!.src} alt={p.images[0]!.alt} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <p className="mt-3 font-serif text-lg font-light">{p.name}</p>
                    <p className="text-xs text-muted-foreground">{inr(p.price)}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="h-fit border border-border p-8 text-sm">
          <h2 className="eyebrow">Profile</h2>
          <p className="mt-4">{user.name}</p>
          <p className="text-muted-foreground">{user.email}</p>
          <Link to="/wishlist" className="link-underline mt-6 inline-block text-xs uppercase tracking-[0.2em]">
            Wishlist ({wishlist.length})
          </Link>
        </aside>
      </div>
    </div>
  );
}

export function AuthPanel({ onSignIn }: { onSignIn: (user: { name: string; email: string }) => void }) {
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  return (
    <div className="container-page section-y">
      <div className="mx-auto max-w-md">
        <p className="eyebrow">{mode === "signin" ? "Welcome back" : "Create an account"}</p>
        <h1 className="display mt-4 text-4xl">{mode === "signin" ? "Sign in" : "Join Kota Doria"}</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          An account is required to place an order, so you can track it and reorder later.
        </p>
        <form
          className="mt-10 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const email = String(data.get("email"));
            const name = String(data.get("name") || email.split("@")[0]);
            onSignIn({ name, email });
            toast.success(mode === "signin" ? "Signed in" : "Account created");
          }}
        >
          {mode === "signup" ? (
            <label className="block">
              <span className="eyebrow">Name</span>
              <input name="name" required className="mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground" />
            </label>
          ) : null}
          <label className="block">
            <span className="eyebrow">Email</span>
            <input name="email" type="email" required autoComplete="email" className="mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground" />
          </label>
          <label className="block">
            <span className="eyebrow">Password</span>
            <input name="password" type="password" required minLength={6} autoComplete="current-password" className="mt-2 w-full border-b border-border bg-transparent py-2.5 text-sm outline-none focus:border-foreground" />
          </label>
          <button type="submit" className="w-full bg-primary py-4 text-xs uppercase tracking-[0.22em] text-primary-foreground">
            {mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>
        <button
          type="button"
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="link-underline mt-8 text-xs uppercase tracking-[0.2em]"
        >
          {mode === "signin" ? "Create an account instead" : "I already have an account"}
        </button>
      </div>
    </div>
  );
}

function AddressForm({ onSave }: { onSave: (a: Omit<import("@/lib/store").Address, "id">) => void }) {
  return (
    <form
      className="mt-8 grid gap-4 border border-border p-6 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const d = new FormData(form);
        onSave({
          label: String(d.get("label") || "Home"),
          name: String(d.get("name")),
          line1: String(d.get("line1")),
          city: String(d.get("city")),
          state: String(d.get("state")),
          pincode: String(d.get("pincode")),
          phone: String(d.get("phone")),
        });
        form.reset();
        toast.success("Address saved");
      }}
    >
      <h3 className="eyebrow sm:col-span-2">Add an address</h3>
      {[
        { name: "label", label: "Label" },
        { name: "name", label: "Full name" },
        { name: "line1", label: "Address" },
        { name: "city", label: "City" },
        { name: "state", label: "State" },
        { name: "pincode", label: "PIN code" },
        { name: "phone", label: "Phone" },
      ].map((field) => (
        <label key={field.name} className="block text-sm">
          <span className="eyebrow">{field.label}</span>
          <input
            name={field.name}
            required
            className="mt-1.5 w-full border-b border-border bg-transparent py-2 text-sm outline-none focus:border-foreground"
          />
        </label>
      ))}
      <button type="submit" className="mt-2 justify-self-start border border-foreground/25 px-8 py-3 text-xs uppercase tracking-[0.2em] sm:col-span-2">
        Save address
      </button>
    </form>
  );
}
