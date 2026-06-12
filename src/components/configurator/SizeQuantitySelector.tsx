"use client";

import { Minus, Plus } from "lucide-react";
import type { Product } from "@/types/product";
import { getTotalQuantity, useConfiguratorStore } from "@/store/configuratorStore";

export function SizeQuantitySelector({ product }: { product: Product }) {
  const { sizeBreakdown, setSizeQuantity } = useConfiguratorStore();
  const total = getTotalQuantity(sizeBreakdown);

  return (
    <section className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <p className="text-xs font-black uppercase text-coral">Étape 4</p>
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-display text-xl font-black text-ink">Choisir les quantités</h2>
        <span className="rounded-md bg-gold/18 px-3 py-1 text-sm font-black text-ink">Total : {total}</span>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {product.sizes.map((size) => (
          <div key={size} className="flex items-center justify-between rounded-md border border-ink/12 p-2">
            <span className="font-black text-ink">{size}</span>
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => setSizeQuantity(size, (sizeBreakdown[size] ?? 0) - 1)} className="flex h-8 w-8 items-center justify-center rounded bg-mist text-ink" aria-label={`Retirer une taille ${size}`}>
                <Minus size={15} />
              </button>
              <input
                value={sizeBreakdown[size] ?? 0}
                onChange={(event) => setSizeQuantity(size, Number(event.target.value))}
                className="h-9 w-14 rounded border border-ink/12 text-center font-black"
                inputMode="numeric"
                aria-label={`Quantité taille ${size}`}
              />
              <button type="button" onClick={() => setSizeQuantity(size, (sizeBreakdown[size] ?? 0) + 1)} className="flex h-8 w-8 items-center justify-center rounded bg-ink text-white" aria-label={`Ajouter une taille ${size}`}>
                <Plus size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
