"use client";

import Image from "next/image";
import { FileUp, RotateCcw } from "lucide-react";
import type { CSSProperties } from "react";
import { markingZones } from "@/data/products";
import { useConfiguratorStore } from "@/store/configuratorStore";
import type { MarkingZoneId } from "@/types/product";
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

const placements: { id: MarkingZoneId; label: string; helper: string }[] = [
  { id: "coeur", label: "Cœur", helper: "Petit logo côté cœur" },
  { id: "poitrine", label: "Centre", helper: "Logo visible au centre poitrine" },
  { id: "dos-grand-format", label: "Dos", helper: "Grand logo dans le dos" }
];

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

export function PhotoTextilePreview() {
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

  const isBack = activePlacement === "dos-grand-format";
  const variant = tshirtVariants[colorId] ?? tshirtVariants.blanc;
  const imageSource = isBack ? variant.back : variant.front;
  const transform = transforms[activePlacement];
  const defaultTransform = markingZones[activePlacement].defaultTransform;
  const logoSource = logoUrl && logoPreviewable ? logoUrl : "/logo/logo-les-tontons-marqueurs.png";
  const baseWidth = activePlacement === "coeur" ? 13 : activePlacement === "poitrine" ? 24 : 31;
  const width = clamp(baseWidth * (transform.size / defaultTransform.size), 9, 38);

  return (
    <section className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
      <div className="grid gap-0 lg:grid-cols-[1fr_280px]">
        <div className="relative bg-[radial-gradient(circle_at_50%_18%,#ffffff,#edf2f6_48%,#d9e1e8)] p-4 sm:p-6">
          <div
            className="customizer-preview customizer-logo-wrap relative mx-auto aspect-[2/3] min-h-[410px] overflow-hidden rounded-lg bg-mist shadow-inner sm:min-h-[520px] lg:max-h-[720px]"
            data-color-id={colorId}
            data-view={isBack ? "dos" : "face"}
          >
            <Image
              key={`${colorId}-${isBack ? "dos" : "face"}`}
              src={imageSource}
              alt={`T-shirt ${variant.label.toLowerCase()} réaliste vu de ${isBack ? "dos" : "face"}`}
              fill
              priority
              className="customizer-product-image object-cover"
              sizes="(min-width: 1024px) 760px, 100vw"
            />
            {variant.tint ? (
              <div className="customizer-product-tint" style={{ backgroundColor: variant.tint }} />
            ) : null}
            {/* Le logo reste fidèle au fichier fourni : seule son intégration visuelle sur le textile est simulée. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={logoSource}
              alt={logoUrl && logoPreviewable ? "Logo importé sur le textile" : "Exemple de logo LES TONTONS MARQUEURS sur le textile"}
              className={`customizer-logo customizer-logo-overlay ${placementClass(activePlacement)} ${
                variant.darkTextile ? "customizer-logo-on-dark" : ""
              }`}
              style={{
                left: `${transform.x}%`,
                top: `${transform.y}%`,
                width: `${width}%`,
                opacity: logoOpacity,
                "--logo-rotate": `${transform.rotation}deg`
              } as CSSProperties}
            />
            <div className="pointer-events-none absolute inset-x-[18%] top-[28%] z-[3] h-[42%] rounded-[40%] bg-white/8 blur-2xl" />
          </div>
        </div>

        <aside className="border-t border-ink/10 bg-paper p-5 lg:border-l lg:border-t-0">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-coral">Aperçu réaliste</p>
          <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-ink">
            Votre logo sur un vrai textile
          </h2>
          <p className="mt-3 text-sm leading-6 text-ink/66">
            Couleur affichée : <strong>{variant.label}</strong>. Choisissez l&apos;emplacement pour obtenir une base claire avant devis et validation.
          </p>

          <div className="mt-5 grid gap-2">
            {placements.map((placement) => {
              const active = activePlacement === placement.id;

              return (
                <button
                  key={placement.id}
                  type="button"
                  onClick={() => selectPlacement(placement.id)}
                  aria-pressed={active}
                  className={`rounded-md border px-4 py-3 text-left transition ${
                    active
                      ? "border-gold bg-gold/14 text-ink shadow-[0_12px_28px_rgba(244,181,30,0.18)]"
                      : "border-ink/12 bg-white text-ink hover:border-ink/28"
                  }`}
                >
                  <span className="block font-black">{placement.label}</span>
                  <span className="text-sm text-ink/62">{placement.helper}</span>
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
