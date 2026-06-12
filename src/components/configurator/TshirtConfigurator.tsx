"use client";

import { useEffect } from "react";
import type { Product } from "@/types/product";
import { useConfiguratorStore } from "@/store/configuratorStore";
import { PhotoTextilePreview } from "@/components/configurator/PhotoTextilePreview";
import { ColorSelector } from "@/components/configurator/ColorSelector";
import { LogoUploader } from "@/components/configurator/LogoUploader";
import { PlacementSelector } from "@/components/configurator/PlacementSelector";
import { LogoControls } from "@/components/configurator/LogoControls";
import { SizeQuantitySelector } from "@/components/configurator/SizeQuantitySelector";
import { TechniqueSelector } from "@/components/configurator/TechniqueSelector";
import { PriceSummary } from "@/components/configurator/PriceSummary";

export function TshirtConfigurator({ product }: { product: Product }) {
  const { productId, urgent, setProductDefaults, setUrgent } = useConfiguratorStore();

  useEffect(() => {
    if (productId !== product.id) {
      setProductDefaults(
        product.id,
        product.colors.find((color) => color.id === "blanc")?.id ?? product.colors[0].id,
        product.sizes,
        product.techniques[0]
      );
    }
  }, [product, productId, setProductDefaults]);

  return (
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.12fr)_minmax(390px,0.88fr)]">
      <div className="xl:sticky xl:top-28 xl:self-start">
        <PhotoTextilePreview />
      </div>

      <div className="grid gap-5">
        <ColorSelector product={product} />
        <LogoUploader />
        <PlacementSelector product={product} />
        <LogoControls />
        <SizeQuantitySelector product={product} />
        <TechniqueSelector product={product} />
        <label className="flex items-center justify-between gap-4 rounded-lg border border-ink/10 bg-white p-5 shadow-soft">
          <span>
            <span className="block font-display text-2xl font-bold text-ink">Délai rapide</span>
            <span className="text-sm text-ink/62">À activer si votre projet doit partir vite.</span>
          </span>
          <input
            type="checkbox"
            checked={urgent}
            onChange={(event) => setUrgent(event.target.checked)}
            className="h-6 w-6 accent-ink"
          />
        </label>
        <div className="sticky bottom-3 z-30 xl:static">
          <PriceSummary product={product} />
        </div>
      </div>
    </div>
  );
}
