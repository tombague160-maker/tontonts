"use client";

import { Heart, RectangleHorizontal, Shirt } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { markingZones } from "@/data/products";
import { useConfiguratorStore } from "@/store/configuratorStore";
import type { MarkingZoneId, Product } from "@/types/product";

const priorityPlacements: { id: MarkingZoneId; label: string; icon: LucideIcon }[] = [
  { id: "coeur", label: "Voir le rendu cœur", icon: Heart },
  { id: "poitrine", label: "Voir le rendu centre", icon: RectangleHorizontal },
  { id: "dos-grand-format", label: "Voir le rendu dos", icon: Shirt }
];

export function PlacementSelector({ product }: { product: Product }) {
  const { activePlacement, selectPlacement } = useConfiguratorStore();
  const availablePlacements = priorityPlacements.filter((placement) => product.markingZones.includes(placement.id));

  return (
    <section className="rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-coral">Étape 3</p>
      <h2 className="mt-1 font-display text-2xl font-bold text-ink">Choisir l’emplacement</h2>
      <p className="mt-2 text-sm leading-6 text-ink/62">
        Sélectionnez la zone de marquage à prévisualiser sur le t-shirt réaliste.
      </p>
      <div className="mt-4 grid gap-2">
        {availablePlacements.map(({ id, label, icon: Icon }) => {
          const zone = markingZones[id];
          const active = activePlacement === id;

          return (
            <button
              key={id}
              type="button"
              onClick={() => selectPlacement(id)}
              aria-pressed={active}
              className={`flex items-center gap-3 rounded-md border p-4 text-left transition ${
                active
                  ? "border-gold bg-gold/14 shadow-[0_12px_28px_rgba(244,181,30,0.18)]"
                  : "border-ink/12 bg-white hover:border-ink/28 hover:bg-paper"
              }`}
            >
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${active ? "bg-ink text-white" : "bg-paper text-ink"}`}>
                <Icon size={20} />
              </span>
              <span>
                <span className="block font-black text-ink">{label}</span>
                <span className="text-sm text-ink/62">{zone.recommendation}</span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
