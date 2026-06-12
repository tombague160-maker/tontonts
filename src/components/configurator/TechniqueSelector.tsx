"use client";

import { markingTechniqueDescriptions, markingTechniques } from "@/data/products";
import { useConfiguratorStore } from "@/store/configuratorStore";
import type { Product } from "@/types/product";

export function TechniqueSelector({ product }: { product: Product }) {
  const { technique, setTechnique } = useConfiguratorStore();

  return (
    <section className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <p className="text-xs font-black uppercase text-coral">Étape 5</p>
      <h2 className="mt-1 font-display text-xl font-black text-ink">Technique de marquage</h2>
      <div className="mt-4 grid gap-2">
        {product.techniques.map((item) => (
          <button
            type="button"
            key={item}
            onClick={() => setTechnique(item)}
            className={`rounded-md border p-3 text-left transition ${
              technique === item ? "border-ink bg-ink text-white" : "border-ink/12 text-ink hover:bg-paper"
            }`}
          >
            <span className="block text-sm font-black">{markingTechniques[item]}</span>
            <span className={`mt-1 block text-xs leading-5 ${technique === item ? "text-white/72" : "text-ink/62"}`}>
              {markingTechniqueDescriptions[item]}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
