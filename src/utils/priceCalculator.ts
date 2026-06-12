import { markingSizePricing, quantityDiscounts, techniquePricing, urgencyMultiplier } from "@/data/pricing";
import type { MarkingTechnique, Product } from "@/types/product";

export type PriceInput = {
  product: Product;
  quantity: number;
  placementCount: number;
  technique: MarkingTechnique;
  largestLogoSize: number;
  urgent: boolean;
};

export type PriceResult = {
  quantity: number;
  unitPrice: number;
  subtotal: number;
  setupFee: number;
  discountLabel: string;
  discountPercent: number;
  markingSizeLabel: string;
};

const currency = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR"
});

export function formatPrice(value: number) {
  return currency.format(value);
}

function getQuantityDiscount(quantity: number) {
  return quantityDiscounts
    .slice()
    .reverse()
    .find((tier) => quantity >= tier.min) ?? quantityDiscounts[0];
}

function getMarkingSize(size: number) {
  if (size <= 86) {
    return markingSizePricing.petit;
  }

  if (size <= 148) {
    return markingSizePricing.moyen;
  }

  return markingSizePricing.grand;
}

export function calculatePrice(input: PriceInput): PriceResult {
  const quantity = Math.max(input.quantity, 1);
  const placementCount = Math.max(input.placementCount, 1);
  const technique = techniquePricing[input.technique];
  const discount = getQuantityDiscount(quantity);
  const markingSize = getMarkingSize(input.largestLogoSize);

  const markingUnit =
    markingSize.baseFee * markingSize.multiplier * technique.multiplier * placementCount;
  const urgentMultiplier = input.urgent ? urgencyMultiplier : 1;
  const rawUnit = (input.product.basePrice + markingUnit) * urgentMultiplier;
  const unitPrice = rawUnit * discount.multiplier;
  const setupFee = technique.setupFee;
  const subtotal = unitPrice * quantity + setupFee;

  return {
    quantity,
    unitPrice,
    subtotal,
    setupFee,
    discountLabel: discount.label,
    discountPercent: Math.round((1 - discount.multiplier) * 100),
    markingSizeLabel: markingSize.label
  };
}
