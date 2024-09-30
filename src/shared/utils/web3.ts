export function truncateAddress(address: string, numberic = 4) {
  return (
    address?.toLowerCase()?.slice(0, numberic > 2 ? numberic : 2) +
    "..." +
    address?.toLowerCase()?.slice(-numberic)
  )
}
