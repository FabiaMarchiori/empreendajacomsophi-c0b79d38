export const BLACK_NOVEMBER = {
  originalPrice: 97,
  price: 67,
  savings: 30,
  discountPercent: 31,
  accessMonths: 12,
  validUntil: "2026-11-30",
  checkout: "https://pay.kiwify.com.br/cYf0nTs",
} as const;

export const formatCampaignPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });