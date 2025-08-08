export function formatCurrency(value: number, currency: string = "USD", locale: string = "en-US") {
  return new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(value)
}

export function calcDiscountPercent(price: number, originalPrice?: number) {
  if (!originalPrice || originalPrice <= 0 || originalPrice <= price) return null
  const pct = Math.round(((originalPrice - price) / originalPrice) * 100)
  return pct
}
