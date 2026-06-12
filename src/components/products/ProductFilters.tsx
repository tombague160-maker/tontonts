"use client";

import { SlidersHorizontal } from "lucide-react";
import { garmentColors, markingTechniques } from "@/data/products";
import type { CatalogFilter, MarkingTechnique, ProductCategory, ProductUse } from "@/types/product";

const categoryOptions: { value: CatalogFilter["category"]; label: string }[] = [
  { value: "tous", label: "Tous" },
  { value: "t-shirts", label: "T-shirts" },
  { value: "pulls", label: "Pulls" },
  { value: "polos", label: "Polos" },
  { value: "sweats", label: "Sweats" },
  { value: "vestes", label: "Vestes" },
  { value: "pantalons", label: "Pantalons" },
  { value: "chantier", label: "Vestes de chantier" },
  { value: "casquettes", label: "Casquettes" },
  { value: "sacs", label: "Sacs" },
  { value: "travail", label: "Vêtements de travail" },
  { value: "evenementiel", label: "Textiles événementiels" }
];

const usageOptions: { value: CatalogFilter["use"]; label: string }[] = [
  { value: "tous", label: "Tous" },
  { value: "entreprise", label: "Entreprise" },
  { value: "sport", label: "Sport" },
  { value: "evenement", label: "Événement" },
  { value: "travail", label: "Travail" },
  { value: "association", label: "Association" }
];

export function ProductFilters({
  filters,
  onChange,
  resultCount
}: {
  filters: CatalogFilter;
  onChange: (filters: CatalogFilter) => void;
  resultCount: number;
}) {
  return (
    <aside className="h-fit rounded-lg border border-ink/10 bg-white p-5 shadow-soft lg:sticky lg:top-28">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-2xl font-bold text-ink">Filtres</h2>
        <span className="inline-flex items-center gap-2 rounded-md bg-paper px-3 py-1.5 text-sm font-black text-ink">
          <SlidersHorizontal size={16} />
          {resultCount}
        </span>
      </div>

      <div className="mt-5 grid gap-5">
        <label className="grid gap-2 text-sm font-black text-ink">
          Type de produit
          <select
            value={filters.category}
            onChange={(event) => onChange({ ...filters, category: event.target.value as ProductCategory | "tous" })}
            className="rounded-md border border-ink/14 px-3 py-3 font-normal"
          >
            {categoryOptions.map((item) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-black text-ink">
          Couleur
          <select
            value={filters.color}
            onChange={(event) => onChange({ ...filters, color: event.target.value })}
            className="rounded-md border border-ink/14 px-3 py-3 font-normal"
          >
            <option value="toutes">Toutes</option>
            {garmentColors.map((color) => (
              <option key={color.id} value={color.id}>{color.label}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-black text-ink">
          Usage
          <select
            value={filters.use}
            onChange={(event) => onChange({ ...filters, use: event.target.value as ProductUse | "tous" })}
            className="rounded-md border border-ink/14 px-3 py-3 font-normal"
          >
            {usageOptions.map((item) => (
              <option key={item.value} value={item.value}>{item.label}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-black text-ink">
          Technique
          <select
            value={filters.technique ?? "toutes"}
            onChange={(event) =>
              onChange({ ...filters, technique: event.target.value as MarkingTechnique | "toutes" })
            }
            className="rounded-md border border-ink/14 px-3 py-3 font-normal"
          >
            <option value="toutes">Toutes</option>
            {Object.entries(markingTechniques).map(([value, label]) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-black text-ink">
          Budget
          <span className="text-sm font-semibold text-ink/62">à partir de {filters.maxBudget} €</span>
          <input
            type="range"
            min="5"
            max="60"
            value={filters.maxBudget}
            onChange={(event) => onChange({ ...filters, maxBudget: Number(event.target.value) })}
            className="range-input"
          />
        </label>

        <label className="flex items-center justify-between gap-4 rounded-md bg-paper p-3 text-sm font-black text-ink">
          Délai rapide
          <input
            type="checkbox"
            checked={filters.fastDelay}
            onChange={(event) => onChange({ ...filters, fastDelay: event.target.checked })}
            className="h-5 w-5 accent-ink"
          />
        </label>
      </div>
    </aside>
  );
}
