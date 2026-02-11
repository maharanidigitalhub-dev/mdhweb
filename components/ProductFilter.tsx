"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { Product } from "@/data/products";

type ProductCategory = "Growth" | "Conversion" | "Content" | "Operations";

const categoryStyles: Record<ProductCategory, string> = {
  Growth: "border-gold/35 bg-gold/12 text-charcoal",
  Conversion: "border-secondary/35 bg-secondary/12 text-charcoal",
  Content: "border-micro/35 bg-micro/12 text-charcoal",
  Operations: "border-line bg-smoke text-charcoal"
};

const mapTagToCategory = (tag: string): ProductCategory => {
  const value = tag.toLowerCase();
  if (value.includes("conversion") || value.includes("copy") || value.includes("funnel")) {
    return "Conversion";
  }
  if (value.includes("content") || value.includes("narrative")) {
    return "Content";
  }
  if (value.includes("operation") || value.includes("system") || value.includes("analytics")) {
    return "Operations";
  }
  return "Growth";
};

export function ProductFilter({ products }: { products: Product[] }) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string>("All");

  const productCategories = useMemo(() => {
    return products.map((product) => {
      const categories = Array.from(new Set(product.tags.map(mapTagToCategory)));
      return { ...product, categories };
    });
  }, [products]);

  const tags = useMemo(() => {
    const set = new Set<ProductCategory>();
    productCategories.forEach((product) => {
      product.categories.forEach((tag) => set.add(tag));
    });
    return ["All", ...Array.from(set)];
  }, [productCategories]);

  const filteredProducts = useMemo(() => {
    return productCategories.filter((product) => {
      const matchesTag = activeTag === "All" || product.categories.includes(activeTag as ProductCategory);
      const query = search.trim().toLowerCase();
      const matchesSearch =
        query.length === 0 ||
        product.title.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query);
      return matchesTag && matchesSearch;
    });
  }, [productCategories, activeTag, search]);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-[1fr,2fr] md:items-center">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">
            Search
          </label>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products"
            className="w-full rounded-2xl border border-line bg-cream px-4 py-3 text-sm focus:border-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 ${
                activeTag === tag
                  ? "border-secondary bg-secondary text-cream"
                  : "border-line bg-cream text-charcoal/70 hover:border-secondary/35 hover:bg-mist"
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
            className="rounded-2xl border border-line bg-cream p-6 shadow-subtle"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-charcoal/70">
              {product.priceDisplay}
            </p>
            <h3 className="mt-3 font-serif text-2xl text-charcoal">{product.title}</h3>
            <p className="mt-2 text-sm text-charcoal/70">{product.shortDescription}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.categories.map((tag) => (
                <span
                  key={`${product.slug}-${tag}`}
                  className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${categoryStyles[tag]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              href={`/products/${product.slug}`}
              className="mt-5 inline-flex text-xs font-semibold uppercase tracking-[0.24em] text-secondary"
            >
              View details
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
