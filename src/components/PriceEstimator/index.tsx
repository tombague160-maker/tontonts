"use client";

import { Calculator, FileCheck2, Zap } from "lucide-react";
import { calculatePrice, formatPrice } from "@/utils/priceCalculator";
import { getTotalQuantity, useConfiguratorStore } from "@/store/configuratorStore";
import type { Product } from "@/types/product";

export function PriceEstimator({ product }: { product: Product }) {
  const { selectedPlacements, technique, transforms, activePlacement, urgent, sizeBreakdown } =
    useConfiguratorStore();
  const quantity = getTotalQuantity(sizeBreakdown);
  const largestLogoSize = selectedPlacements.reduce(
    (max, placement) => Math.max(max, transforms[placement]?.size ?? transforms[activePlacement].size),
    transforms[activePlacement].size
  );
  const result = calculatePrice({
    product,
    quantity,
    placementCount: selectedPlacements.length,
    technique,
    largestLogoSize,
    urgent
  });

  return (
    <aside className="rounded-lg border border-ink/10 bg-ink p-5 text-white shadow-soft">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gold text-ink">
          <Calculator size={22} />
        </span>
        <div>
          <p className="text-sm font-bold uppercase text-gold">Prix estimatif</p>
          <p className="font-display text-3xl font-extrabold">{formatPrice(result.subtotal)}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 text-sm text-white/80">
        <div className="flex justify-between gap-4">
          <span>Prix unitaire estimé</span>
          <strong className="text-white">{formatPrice(result.unitPrice)}</strong>
        </div>
        <div className="flex justify-between gap-4">
          <span>Quantité</span>
          <strong className="text-white">{result.quantity} pièce(s)</strong>
        </div>
        <div className="flex justify-between gap-4">
          <span>Emplacement(s)</span>
          <strong className="text-white">{selectedPlacements.length}</strong>
        </div>
        <div className="flex justify-between gap-4">
          <span>Frais de préparation</span>
          <strong className="text-white">{formatPrice(result.setupFee)}</strong>
        </div>
        <div className="flex justify-between gap-4">
          <span>Palier tarifaire</span>
          <strong className="text-white">{result.discountLabel}</strong>
        </div>
        {result.discountPercent > 0 ? (
          <div className="rounded-md bg-white/10 px-3 py-2 text-gold">
            Tarif dégressif appliqué : -{result.discountPercent} %
          </div>
        ) : null}
        {urgent ? (
          <div className="inline-flex items-center gap-2 rounded-md bg-coral px-3 py-2 font-bold text-white">
            <Zap size={16} />
            Option délai rapide incluse
          </div>
        ) : null}
      </div>

      <p className="mt-5 flex gap-2 rounded-md bg-white/10 p-3 text-sm leading-6 text-white/76">
        <FileCheck2 className="mt-1 shrink-0" size={18} />
        Le prix final sera confirmé après vérification du fichier et validation du BAT.
      </p>
    </aside>
  );
}
