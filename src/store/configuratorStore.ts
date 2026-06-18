"use client";

import { create } from "zustand";
import { featuredProduct, markingZones } from "@/data/products";
import type { MarkingTechnique, MarkingZoneId, ProductView } from "@/types/product";

export type LogoTransform = {
  x: number;
  y: number;
  size: number;
  rotation: number;
};

type SizeBreakdown = Record<string, number>;

type ConfiguratorState = {
  productId: string;
  colorId: string;
  technique: MarkingTechnique;
  selectedPlacements: MarkingZoneId[];
  activePlacement: MarkingZoneId;
  view: ProductView;
  transforms: Record<string, LogoTransform>;
  sizeBreakdown: SizeBreakdown;
  urgent: boolean;
  logoUrl: string | null;
  logoName: string | null;
  logoPreviewable: boolean;
  logoOpacity: number;
  customText: string;
  setProductDefaults: (
    productId: string,
    colorId: string,
    sizes: string[],
    technique: MarkingTechnique,
    defaultPlacement?: MarkingZoneId
  ) => void;
  setColor: (colorId: string) => void;
  setTechnique: (technique: MarkingTechnique) => void;
  setView: (view: ProductView) => void;
  togglePlacement: (placement: MarkingZoneId) => void;
  selectPlacement: (placement: MarkingZoneId) => void;
  setActivePlacement: (placement: MarkingZoneId) => void;
  updateTransform: (placement: MarkingZoneId, transform: Partial<LogoTransform>) => void;
  centerActiveLogo: () => void;
  resetActiveLogo: () => void;
  nudgeActiveLogo: (axis: "x" | "y", amount: number) => void;
  scaleActiveLogo: (amount: number) => void;
  rotateActiveLogo: (amount: number) => void;
  setLogoOpacity: (opacity: number) => void;
  setSizeQuantity: (size: string, quantity: number) => void;
  setUrgent: (urgent: boolean) => void;
  setLogo: (url: string | null, name: string | null, previewable: boolean) => void;
  clearLogo: () => void;
  setCustomText: (text: string) => void;
};

function initialTransforms() {
  return Object.fromEntries(
    Object.values(markingZones).map((zone) => [zone.id, zone.defaultTransform])
  );
}

function initialSizes(sizes: string[]) {
  const firstUsableSize = sizes.includes("M") ? "M" : sizes[0];
  return Object.fromEntries(sizes.map((size) => [size, size === firstUsableSize ? 10 : 0]));
}

function defaultColorId() {
  return featuredProduct.colors.find((color) => color.id === "bleu-marine")?.id ?? featuredProduct.colors[0].id;
}

export const useConfiguratorStore = create<ConfiguratorState>((set, get) => ({
  productId: featuredProduct.id,
  colorId: defaultColorId(),
  technique: "impression-numerique",
  selectedPlacements: ["poitrine"],
  activePlacement: "poitrine",
  view: "face",
  transforms: initialTransforms(),
  sizeBreakdown: initialSizes(featuredProduct.sizes),
  urgent: false,
  logoUrl: null,
  logoName: null,
  logoPreviewable: false,
  logoOpacity: 1,
  customText: "",
  setProductDefaults: (productId, colorId, sizes, technique, defaultPlacement = "poitrine") =>
    set({
      productId,
      colorId,
      technique,
      selectedPlacements: [defaultPlacement],
      activePlacement: defaultPlacement,
      view: markingZones[defaultPlacement].view,
      transforms: initialTransforms(),
      sizeBreakdown: initialSizes(sizes)
    }),
  setColor: (colorId) => set({ colorId }),
  setTechnique: (technique) => set({ technique }),
  setView: (view) => set({ view }),
  togglePlacement: (placement) => {
    const current = get().selectedPlacements;
    const isSelected = current.includes(placement);
    const selectedPlacements = isSelected
      ? current.filter((item) => item !== placement)
      : [...current, placement];

    if (selectedPlacements.length === 0) {
      return;
    }

    const activePlacement = selectedPlacements.includes(get().activePlacement)
      ? get().activePlacement
      : selectedPlacements[0];

    set({
      selectedPlacements,
      activePlacement,
      view: markingZones[activePlacement].view
    });
  },
  selectPlacement: (placement) =>
    set({
      selectedPlacements: [placement],
      activePlacement: placement,
      view: markingZones[placement].view
    }),
  setActivePlacement: (placement) =>
    set({
      activePlacement: placement,
      view: markingZones[placement].view
    }),
  updateTransform: (placement, transform) =>
    set((state) => ({
      transforms: {
        ...state.transforms,
        [placement]: {
          ...state.transforms[placement],
          ...transform
        }
      }
    })),
  centerActiveLogo: () => {
    const placement = get().activePlacement;
    set((state) => ({
      transforms: {
        ...state.transforms,
        [placement]: {
          ...state.transforms[placement],
          x: 50,
          y: state.transforms[placement].y
        }
      }
    }));
  },
  resetActiveLogo: () => {
    const placement = get().activePlacement;
    set((state) => ({
      transforms: {
        ...state.transforms,
        [placement]: markingZones[placement].defaultTransform
      }
    }));
  },
  nudgeActiveLogo: (axis, amount) => {
    const placement = get().activePlacement;
    set((state) => ({
      transforms: {
        ...state.transforms,
        [placement]: {
          ...state.transforms[placement],
          [axis]: Math.min(82, Math.max(18, state.transforms[placement][axis] + amount))
        }
      }
    }));
  },
  scaleActiveLogo: (amount) => {
    const placement = get().activePlacement;
    set((state) => ({
      transforms: {
        ...state.transforms,
        [placement]: {
          ...state.transforms[placement],
          size: Math.min(230, Math.max(42, state.transforms[placement].size + amount))
        }
      }
    }));
  },
  rotateActiveLogo: (amount) => {
    const placement = get().activePlacement;
    set((state) => ({
      transforms: {
        ...state.transforms,
        [placement]: {
          ...state.transforms[placement],
          rotation: state.transforms[placement].rotation + amount
        }
      }
    }));
  },
  setLogoOpacity: (logoOpacity) => set({ logoOpacity: Math.min(1, Math.max(0.2, logoOpacity)) }),
  setSizeQuantity: (size, quantity) =>
    set((state) => ({
      sizeBreakdown: {
        ...state.sizeBreakdown,
        [size]: Math.max(0, Math.round(quantity))
      }
    })),
  setUrgent: (urgent) => set({ urgent }),
  setLogo: (url, name, previewable) => set({ logoUrl: url, logoName: name, logoPreviewable: previewable }),
  clearLogo: () => set({ logoUrl: null, logoName: null, logoPreviewable: false }),
  setCustomText: (customText) => set({ customText })
}));

export function getTotalQuantity(sizeBreakdown: SizeBreakdown) {
  return Object.values(sizeBreakdown).reduce((sum, value) => sum + value, 0);
}
