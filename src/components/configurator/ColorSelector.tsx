"use client";

import type { Product } from "@/types/product";
import { useConfiguratorStore } from "@/store/configuratorStore";

export function ColorSelector({ product }: { product: Product }) {
  const { colorId, setColor } = useConfiguratorStore();

  return (
    <section className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-coral">Étape 1</p>
      <h2 className="mt-1 font-display text-2xl font-bold text-ink">Choisir le textile</h2>
      <p className="mt-2 text-[15px] leading-7 text-ink/66">{product.name}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {product.colors.map((color) => {
          const active = colorId === color.id;

          return (
            <button
              type="button"
              key={color.id}
              onClick={() => setColor(color.id)}
              aria-label={`Choisir la couleur ${color.label}`}
              aria-pressed={active}
              className={`color-option ${active ? "active" : ""}`}
            >
              <span className="color-option-swatch" style={{ backgroundColor: color.hex }} aria-hidden="true" />
              <span>{color.label}</span>
              {active ? <span className="sr-only">couleur sélectionnée</span> : null}
            </button>
          );
        })}
      </div>
    </section>
  );
}
