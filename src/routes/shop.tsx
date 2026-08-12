import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  filterProducts,
  priceBands,
  productCategories,
  products,
  shopFilters,
  sortOptions,
  type ShopFilter,
  type SortValue,
} from "@/data/catalog";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";

type ShopSearch = {
  q?: string | undefined;
  category?: string | undefined;
  filter?: ShopFilter | undefined;
};

const filterValues = shopFilters.map((f) => f.value) as readonly string[];

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    q: typeof search['q'] === "string" && search['q'] ? search['q'] : undefined,
    category:
      typeof search['category'] === "string" && search['category'] ? search['category'] : undefined,
    filter:
      typeof search['filter'] === "string" && filterValues.includes(search['filter'])
        ? (search['filter'] as ShopFilter)
        : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop Handwoven Kota Doria Sarees & Suits — Kota Doria" },
      {
        name: "description",
        content:
          "Browse handwoven Kota Doria sarees and suits: everyday cotton, festive zari, bridal and contemporary. Filter by category, price and colour.",
      },
      { property: "og:title", content: "Shop Handwoven Kota Doria Sarees & Suits" },
      {
        property: "og:description",
        content: "Handwoven Kota Doria sarees and suits, made by artisans of Kota, Rajasthan.",
      },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const { q, category: initialCategory, filter: initialFilter } = Route.useSearch();
  const [category, setCategory] = useState<string>(initialCategory ?? "All");
  const [filter, setFilter] = useState<ShopFilter>(initialFilter ?? "all");
  const [band, setBand] = useState<string>("All");
  const [sort, setSort] = useState<SortValue>("featured");

  const visible = useMemo(() => {
    let list = filterProducts([...products], filter);
    if (q) {
      const needle = q.toLowerCase();
      list = list.filter((p) =>
        [p.name, p.category, p.type, p.colour, p.fabric, p.shortDescription]
          .join(" ")
          .toLowerCase()
          .includes(needle),
      );
    }
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (band !== "All") {
      const selected = priceBands.find((b) => b.label === band);
      if (selected) list = list.filter((p) => p.price >= selected.min && p.price <= selected.max);
    }
    if (sort === "price-asc") list.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list.sort((a, b) => b.price - a.price);
    if (sort === "new") list.sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));
    return list;
  }, [q, category, band, sort, filter]);

  const chip = (active: boolean) =>
    `px-4 py-2 text-xs uppercase tracking-[0.16em] border transition-colors ${
      active ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-foreground"
    }`;


  return (
    <div className="container-page section-y">
      <Reveal>
        <p className="eyebrow">The shop</p>
        <h1 className="display mt-4 text-4xl md:text-6xl">
          {q ? `Results for “${q}”` : "Sarees & suits"}
        </h1>
        <p className="mt-5 max-w-lg text-sm text-muted-foreground">
          Every piece is handwoven by artisans of Kota, Rajasthan, in limited numbers.
        </p>
      </Reveal>

      <nav aria-label="Browse" className="mt-10 flex flex-wrap gap-2 border-t border-border pt-8">
        {shopFilters.map((f) => (
          <button
            key={f.value}
            type="button"
            aria-pressed={filter === f.value}
            className={chip(filter === f.value)}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </nav>

      <div className="mt-8 flex flex-col gap-6 border-y border-border py-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex flex-wrap gap-2">
          <button type="button" className={chip(category === "All")} onClick={() => setCategory("All")}>
            All
          </button>
          {productCategories.map((c) => (
            <button key={c} type="button" className={chip(category === c)} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <label className="flex items-center gap-2 text-xs uppercase tracking-[0.16em]">
            Price
            <select
              value={band}
              onChange={(e) => setBand(e.target.value)}
              className="border border-border bg-transparent px-3 py-2 text-xs"
            >
              <option value="All">All</option>
              {priceBands.map((b) => (
                <option key={b.label} value={b.label}>
                  {b.label}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-2 text-xs uppercase tracking-[0.16em]">
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortValue)}
              className="border border-border bg-transparent px-3 py-2 text-xs"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <p className="mt-6 text-xs uppercase tracking-[0.16em] text-muted-foreground">
        {visible.length} {visible.length === 1 ? "piece" : "pieces"}
      </p>

      {visible.length === 0 ? (
        <p className="mt-16 text-sm text-muted-foreground">
          Nothing matches those filters yet. Try a wider price band or another category.
        </p>
      ) : (
        <div className="mt-10 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 3) * 80}>
              <ProductCard product={product} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
