import { extraPlacementFee, quantityDiscounts, techniquePricing, urgencyMultiplier } from "@/data/pricing";
import type { MarkingTechnique, Product } from "@/types/product";

export type CalculatePriceInput = {
  product: Product;
  quantity: number;
  technique: MarkingTechnique;
  placementCount: number;
  logoSize: number;
  urgent?: boolean;
};

export type CalculatedPrice = {
  unitPrice: number;
  total: number;
  quantity: number;
  markingFee: number;
  setupFee: number;
  discountLabel: string;
  discountRate: number;
};

function getDiscount(quantity: number) {
  return quantityDiscounts
    .slice()
    .reverse()
    .find((tier) => quantity >= tier.min) ?? quantityDiscounts[0];
}

function getLogoSizeMultiplier(size: number) {
  if (size < 86) {
    return 0.85;
  }

  if (size > 168) {
    return 1.25;
  }

  return 1;
}

export function calculatePrice({
  product,
  quantity,
  technique,
  placementCount,
  logoSize,
  urgent = false
}: CalculatePriceInput): CalculatedPrice {
  const safeQuantity = Math.max(1, quantity);
  const safePlacementCount = Math.max(1, placementCount);
  const techniqueRule = techniquePricing[technique];
  const discount = getDiscount(safeQuantity);
  const extraPlacementCount = Math.max(0, safePlacementCount - 1);
  const markingFee =
    techniqueRule.unitFee * getLogoSizeMultiplier(logoSize) + extraPlacementCount * extraPlacementFee;
  const urgency = urgent ? urgencyMultiplier : 1;
  const rawUnitPrice = (product.basePrice + markingFee) * urgency;
  const unitPrice = rawUnitPrice * discount.multiplier;
  const total = unitPrice * safeQuantity + techniqueRule.setupFee;

  return {
    unitPrice,
    total,
    quantity: safeQuantity,
    markingFee,
    setupFee: techniqueRule.setupFee,
    discountLabel: discount.label,
    discountRate: Math.round((1 - discount.multiplier) * 100)
  };
}
