export const AddressZero = <const>"0x0000000000000000000000000000000000000000"

export const ADDRESSES = {
  MULTICALL: {
    1: "0xd808400fbf312aca5c7487cd30b0d1386e04bc78",
    2: "0x1ee38d535d541c55c9dae27b12edf090c608e6fb",
  },
}

export function getContractAddresses<Address extends string>(chainId: number): Record<keyof typeof ADDRESSES, Address> {
  return Object.fromEntries(
    Object.entries(ADDRESSES).map(([key, object]) => [key, object[chainId as keyof typeof object]]),
  ) as Record<keyof typeof ADDRESSES, Address>
}
