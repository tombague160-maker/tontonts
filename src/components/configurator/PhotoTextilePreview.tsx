"use client";

import Image from "next/image";
import { FileUp, RotateCcw } from "lucide-react";
import type { CSSProperties } from "react";
import { markingZones } from "@/data/products";
import { useConfiguratorStore } from "@/store/configuratorStore";
import type { MarkingZoneId, Product, ProductView } from "@/types/product";
import { Button } from "@/components/ui/Button";

type TshirtVariant = {
  label: string;
  front: string;
  back: string;
  tint?: string;
  darkTextile?: boolean;
};

const tshirtVariants: Record<string, TshirtVariant> = {
  blanc: {
    label: "Blanc",
    front: "/images/customizer/tshirt-front-realistic.webp",
    back: "/images/customizer/tshirt-back-realistic.webp"
  },
  noir: {
    label: "Noir",
    front: "/images/customizer/tshirt-black-front-realistic.webp",
    back: "/images/customizer/tshirt-black-back-realistic.webp",
    darkTextile: true
  },
  gris: {
    label: "Gris",
    front: "/images/customizer/tshirt-grey-front-realistic.webp",
    back: "/images/customizer/tshirt-grey-back-realistic.webp"
  },
  "bleu-marine": {
    label: "Bleu marine",
    front: "/images/customizer/tshirt-black-front-realistic.webp",
    back: "/images/customizer/tshirt-black-back-realistic.webp",
    tint: "#13284A",
    darkTextile: true
  },
  rouge: {
    label: "Rouge",
    front: "/images/customizer/tshirt-grey-front-realistic.webp",
    back: "/images/customizer/tshirt-grey-back-realistic.webp",
    tint: "#B93432",
    darkTextile: true
  },
  vert: {
    label: "Vert",
    front: "/images/customizer/tshirt-grey-front-realistic.webp",
    back: "/images/customizer/tshirt-grey-back-realistic.webp",
    tint: "#2E6D56",
    darkTextile: true
  },
  beige: {
    label: "Beige",
    front: "/images/customizer/tshirt-front-realistic.webp",
    back: "/images/customizer/tshirt-back-realistic.webp",
    tint: "#D8C6A3"
  }
};

const productFallbackImages: Record<Product["mockupType"], string> = {
  tshirt: "/images/products/tshirt-product.jpg",
  polo: "/images/products/polo-product.jpg",
  sweat: "/images/products/sweat-product.jpg",
  jacket: "/images/products/workwear-product.jpg",
  cap: "/images/products/casquette-product.jpg",
  bag: "/images/company-textile.jpg",
  workwear: "/images/products/workwear-product.jpg",
  event: "/images/products/event-product.jpg"
};

function placementClass(placement: MarkingZoneId) {
  if (placement === "coeur") {
    return "logo-placement-heart";
  }

  if (placement === "dos-grand-format") {
    return "logo-placement-back";
  }

  return "logo-placement-center";
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function getBaseWidth(placement: MarkingZoneId) {
  const widths: Record<MarkingZoneId, number> = {
    coeur: 13,
    poitrine: 24,
    "dos-grand-format": 31,
    "manche-gauche": 11,
    "manche-droite": 11,
    "casquette-face": 19,
    "casquette-cote": 13,
    cuisse: 15,
    poche: 12
  };

  return widths[placement];
}

function getViewLabel(view: ProductView) {
  if (view === "dos") {
    return "dos";
  }

  if (view === "cote") {
    return "côté";
  }

  return "face";
}

function getImageSource(product: Product, colorId: string, view: ProductView) {
  if (product.mockupType === "tshirt") {
    const variant = tshirtVariants[colorId] ?? tshirtVariants.blanc;
    return view === "dos" ? variant.back : variant.front;
  }

  if (view === "dos" && product.images.gallery?.[1]) {
    return product.images.gallery[1];
  }

  if (view === "cote" && product.images.gallery?.[2]) {
    return product.images.gallery[2];
  }

  return product.images.main || productFallbackImages[product.mockupType];
}

export function PhotoTextilePreview({ product }: { product: Product }) {
  const {
    activePlacement,
    colorId,
    logoUrl,
    logoPreviewable,
    logoOpacity,
    transforms,
    selectPlacement,
    resetActiveLogo
  } = useConfiguratorStore();

  const fallbackPlacement = product.markingZones[0] ?? "poitrine";
  const activeZone = markingZones[activePlacement] ?? markingZones[fallbackPlacement];
  const activeTransform = transforms[activePlacement] ?? activeZone.defaultTransform;
  const defaultTransform = activeZone.defaultTransform;
  const selectedColor = product.colors.find((color) => color.id === colorId) ?? product.colors[0];
  const tshirtVariant = tshirtVariants[colorId] ?? tshirtVariants.blanc;
  const imageSource = getImageSource(product, colorId, activeZone.view);
  const logoSource = logoUrl && logoPreviewable ? logoUrl : "/logo/logo-les-tontons-marqueurs.png";
  const width = clamp(getBaseWidth(activeZone.id) * (activeTransform.size / defaultTransform.size), 8, 40);
  const isTshirtMockup = product.mockupType === "tshirt";
  const tintColor = isTshirtMockup ? tshirtVariant.tint : selectedColor?.hex;
  const showTint = Boolean(tintColor && selectedColor?.id !== "blanc");
  const darkTextile = isTshirtMockup ? tshirtVariant.darkTextile : selectedColor?.textColor === "clair";
  const textileLabel = isTshirtMockup ? tshirtVariant.label : selectedColor?.label;

  return (
    <section className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
      <div className="grid gap-0 lg:grid-cols-[1fr_280px]">
        <div className="relative bg-[radial-gradient(circle_at_50%_18%,#ffffff,#edf2f6_48%,#d9e1e8)] p-4 sm:p-6">
          <div
            className="customizer-preview customizer-logo-wrap relative mx-auto aspect-[2/3] min-h-[410px] overflow-hidden rounded-lg bg-mist shadow-inner sm:min-h-[520px] lg:max-h-[720px]"
            data-color-id={colorId}
            data-view={activeZone.view}
          >
            <Image
              key={`${product.id}-${colorId}-${activeZone.view}`}
              src={imageSource}
              alt={`${product.shortName} ${textileLabel?.toLowerCase() ?? "personnalisé"} vu de ${getViewLabel(activeZone.view)}`}
              fill
              priority
              className={`customizer-product-image ${isTshirtMockup ? "object-cover" : "object-contain p-6 sm:p-10"}`}
              sizes="(min-width: 1024px) 760px, 100vw"
            />
            {showTint ? (
              <div
                className="customizer-product-tint"
                style={{
                  backgroundColor: tintColor,
                  opacity: isTshirtMockup ? 0.38 : 0.14
                }}
              />
            ) : null}
            {/* Le logo reste fidèle au fichier fourni : seule son intégration visuelle sur le textile est simulée. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSource}
              alt={logoUrl && logoPreviewable ? "Logo importé sur le textile" : "Exemple de logo LES TONTONS MARQUEURS sur le textile"}
              className={`customizer-logo customizer-logo-overlay ${placementClass(activeZone.id)} ${
                darkTextile ? "customizer-logo-on-dark" : ""
              }`}
              style={{
                left: `${activeTransform.x}%`,
                top: `${activeTransform.y}%`,
                width: `${width}%`,
                opacity: logoOpacity,
                "--logo-rotate": `${activeTransform.rotation}deg`
              } as CSSProperties}
            />
            <div className="pointer-events-none absolute inset-x-[18%] top-[28%] z-[3] h-[42%] rounded-[40%] bg-white/8 blur-2xl" />
          </div>
        </div>

        <aside className="border-t border-ink/10 bg-paper p-5 lg:border-l lg:border-t-0">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-coral">Aperçu personnalisation</p>
          <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-ink">
            Votre logo sur {product.shortName.toLowerCase()}
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink/66">
            Couleur affichée : <strong>{textileLabel}</strong>. Choisissez l&apos;emplacement pour obtenir une base claire avant devis et validation.
          </p>

          <div className="mt-5 grid gap-2">
            {product.markingZones.map((placementId) => {
              const zone = markingZones[placementId];
              const active = activeZone.id === placementId;

              return (
                <button
                  key={placementId}
                  type="button"
                  onClick={() => selectPlacement(placementId)}
                  aria-pressed={active}
                  className={`rounded-md border px-4 py-3 text-left transition ${
                    active
                      ? "border-gold bg-gold/14 text-ink shadow-[0_12px_28px_rgba(244,181,30,0.18)]"
                      : "border-ink/12 bg-white text-ink hover:border-ink/28"
                  }`}
                >
                  <span className="block font-black">{zone.label}</span>
                  <span className="text-sm text-ink/62">{zone.recommendation}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 grid gap-2">
            <Button type="button" variant="secondary" onClick={resetActiveLogo}>
              <RotateCcw size={17} />
              Revenir à la taille conseillée
            </Button>
            <Button href="/devis" variant="primary">
              <FileUp size={17} />
              Demander un devis
            </Button>
          </div>

          {!logoUrl ? (
            <p className="mt-4 rounded-md bg-white p-3 text-xs font-bold leading-5 text-ink/62">
              L&apos;aperçu utilise le logo officiel en exemple. Importez votre fichier pour voir votre propre visuel.
            </p>
          ) : null}
        </aside>
      </div>
    </section>
  );
}
