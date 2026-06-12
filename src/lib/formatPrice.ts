const formatter = new Intl.NumberFormat("fr-FR", {
  style: "currency",
  currency: "EUR"
});

export function formatPrice(value: number) {
  return formatter.format(value);
}
