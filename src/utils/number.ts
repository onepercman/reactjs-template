export function pad(d: number): string {
  return d < 10 ? "0" + d.toString() : d.toString()
}

export function formatNumber(value: number, maximumFractionDigits = 6, compact = false) {
  if (typeof value !== "number" || isNaN(value)) return value
  return new Intl.NumberFormat("en", {
    minimumFractionDigits: 0,
    maximumFractionDigits,
    notation: compact ? "compact" : "standard",
    compactDisplay: "short",
  }).format(value)
}
