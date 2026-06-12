import type { MarkingTechnique } from "@/types/product";

export const quantityDiscounts = [
  { min: 1, max: 4, label: "1 à 4 pièces", multiplier: 1 },
  { min: 5, max: 9, label: "5 à 9 pièces", multiplier: 0.95 },
  { min: 10, max: 24, label: "10 à 24 pièces", multiplier: 0.9 },
  { min: 25, max: 49, label: "25 à 49 pièces", multiplier: 0.85 },
  { min: 50, max: 99, label: "50 à 99 pièces", multiplier: 0.8 },
  { min: 100, max: Infinity, label: "100 pièces et plus", multiplier: 0.75 }
];

export const techniquePricing: Record<MarkingTechnique, { label: string; unitFee: number; multiplier: number; setupFee: number }> = {
  "impression-numerique": { label: "Impression numérique", unitFee: 6, multiplier: 1, setupFee: 0 },
  flocage: { label: "Flocage", unitFee: 5, multiplier: 1, setupFee: 0 },
  broderie: { label: "Broderie", unitFee: 9, multiplier: 1, setupFee: 18 },
  serigraphie: { label: "Sérigraphie", unitFee: 4, multiplier: 1, setupFee: 42 },
  transfert: { label: "Transfert", unitFee: 5.5, multiplier: 1, setupFee: 0 }
};

export const markingSizePricing = {
  petit: { label: "Petit marquage", multiplier: 0.85, baseFee: 0 },
  moyen: { label: "Marquage moyen", multiplier: 1, baseFee: 0 },
  grand: { label: "Grand marquage", multiplier: 1.25, baseFee: 0 }
};

export const extraPlacementFee = 4;
export const urgencyMultiplier = 1.18;
