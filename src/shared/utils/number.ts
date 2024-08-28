export function formatNumber(value: number | string, options: Intl.NumberFormatOptions = {}): string {
  if (typeof value === "string") value = Number(value)
  if (typeof value !== "number" || isNaN(value)) return ""
  return new Intl.NumberFormat("en", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    compactDisplay: "short",
    ...options,
  }).format(value)
}
