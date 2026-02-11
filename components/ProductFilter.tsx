"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product } from "@/data/products";

export function ProductFilter({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string>("All");

  const tags = useMemo(() => {
    const set = new Set<string>();
    products.forEach((product) => {
      product.tags.forEach((tag) => set.add(tag));
    });
    return ["All", ...Array.from(set).sort()];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesTag = activeTag === "All" || product.tags.includes(activeTag);
      const query = search.trim().toLowerCase();
      const matchesSearch =
        query.length === 0 ||
        product.title.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query);
      return matchesTag && matchesSearch;
    });
  }, [products, activeTag, search]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-[1fr,2fr] md:items-center">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
            Search
          </label>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products"
            className="w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm focus:border-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 ${
                activeTag === tag
                  ? "border-charcoal bg-charcoal text-cream"
                  : "border-line bg-cream text-charcoal/70 hover:border-charcoal/40"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {filteredProducts.map((product) => (
          <article
            key={product.slug}
            className="rounded-2xl border border-line bg-white/80 p-6 shadow-subtle"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60">
              {product.priceDisplay}
            </p>
            <h3 className="mt-3 font-serif text-2xl text-charcoal">
              {product.title}
            </h3>
            <p className="mt-2 text-sm text-charcoal/70">
              {product.shortDescription}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={`${product.slug}-${tag}`}
                  className="rounded-full border border-line bg-cream px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-charcoal/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/products/${product.slug}`}
              className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/60"
            >
              View details
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
