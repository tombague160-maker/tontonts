"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilters } from "@/components/products/ProductFilters";
import { products } from "@/data/products";
import type { CatalogFilter, MarkingTechnique, ProductGender, ProductUse } from "@/types/product";

const initialFilters: CatalogFilter = {
  category: "tous",
  color: "toutes",
  gender: "tous",
  use: "tous",
  technique: "toutes",
  maxBudget: 60,
  fastDelay: false
};

export default function BoutiquePage() {
  const [filters, setFilters] = useState<CatalogFilter>(initialFilters);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatches = filters.category === "tous" || product.category === filters.category;
      const colorMatches = filters.color === "toutes" || product.colors.some((color) => color.id === filters.color);
      const genderMatches = filters.gender === "tous" || product.gender.includes(filters.gender as ProductGender);
      const useMatches = filters.use === "tous" || product.uses.includes(filters.use as ProductUse);
      const techniqueMatches =
        !filters.technique ||
        filters.technique === "toutes" ||
        product.techniques.includes(filters.technique as MarkingTechnique);
      const budgetMatches = product.basePrice <= filters.maxBudget;
      const delayMatches = !filters.fastDelay || product.fastDelay;

      return categoryMatches && colorMatches && genderMatches && useMatches && techniqueMatches && budgetMatches && delayMatches;
    });
  }, [filters]);

  return (
    <>
      <Header />
      <main>
        <section className="bg-ink-deep py-16 text-white">
          <div className="section-shell grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">Boutique</p>
              <h1 className="mt-3 font-display text-5xl font-bold leading-tight md:text-7xl">
                Textiles personnalisables
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">
                T-shirts, polos, sweats, vestes, casquettes, sacs, vêtements de travail et textiles événementiels.
              </p>
            </div>
            <div className="rounded-md border border-white/12 bg-white/8 px-4 py-3 font-black shadow-soft backdrop-blur">
              {filteredProducts.length} produit(s)
            </div>
          </div>
        </section>

        <section className="section-shell py-12">
          <div className="grid gap-7 lg:grid-cols-[300px_1fr]">
            <ProductFilters filters={filters} onChange={setFilters} resultCount={filteredProducts.length} />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
