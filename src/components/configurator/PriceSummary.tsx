"use client";

import { Calculator, FileCheck2, ShoppingCart } from "lucide-react";
import { calculatePrice } from "@/lib/calculatePrice";
import { formatPrice } from "@/lib/formatPrice";
import { getTotalQuantity, useConfiguratorStore } from "@/store/configuratorStore";
import type { Product } from "@/types/product";
import { Button } from "@/components/ui/Button";

export function PriceSummary({ product }: { product: Product }) {
  const { selectedPlacements, transforms, activePlacement, technique, sizeBreakdown, urgent } = useConfiguratorStore();
  const quantity = getTotalQuantity(sizeBreakdown);
  const logoSize = selectedPlacements.reduce(
    (max, placement) => Math.max(max, transforms[placement]?.size ?? transforms[activePlacement].size),
    transforms[activePlacement].size
  );
  const price = calculatePrice({
    product,
    quantity,
    technique,
    placementCount: selectedPlacements.length,
    logoSize,
    urgent
  });

  return (
    <aside className="rounded-lg bg-ink p-5 text-white shadow-soft">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-md bg-gold text-ink">
          <Calculator size={22} />
        </span>
        <div>
          <p className="text-xs font-black uppercase text-gold">Étape 6 · Prix estimatif</p>
          <p className="font-display text-3xl font-black">{formatPrice(price.total)}</p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 text-sm text-white/78">
        <div className="flex justify-between gap-4"><span>Prix unitaire estimé</span><strong className="text-white">{formatPrice(price.unitPrice)}</strong></div>
        <div className="flex justify-between gap-4"><span>Quantité totale</span><strong className="text-white">{price.quantity}</strong></div>
        <div className="flex justify-between gap-4"><span>Frais de marquage</span><strong className="text-white">{formatPrice(price.markingFee)}</strong></div>
        <div className="flex justify-between gap-4"><span>Frais de préparation</span><strong className="text-white">{formatPrice(price.setupFee)}</strong></div>
        <div className="flex justify-between gap-4"><span>Palier</span><strong className="text-white">{price.discountLabel}</strong></div>
        {price.discountRate > 0 ? (
          <div className="rounded-md bg-white/10 px-3 py-2 font-black text-gold">
            Tarif dégressif appliqué : -{price.discountRate} %
          </div>
        ) : null}
      </div>

      <p className="mt-5 flex gap-2 rounded-md bg-white/10 p-3 text-sm leading-6 text-white/74">
        <FileCheck2 className="mt-1 shrink-0" size={18} />
        Prix indicatif, confirmé après vérification du fichier et validation du BAT.
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        <Button type="button" variant="gold">
          <ShoppingCart size={18} />
          Ajouter au panier
        </Button>
        <Button href="/devis" variant="light">
          Demander un devis avec ce visuel
        </Button>
      </div>
    </aside>
  );
}
