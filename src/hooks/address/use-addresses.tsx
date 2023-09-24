import { ADDRESSES } from "@/constants/addresses"
import { useClient } from "@/models/root"
import { Address, Chain } from "wagmi"

export function getAddresses(chain: Chain) {
  return Object.fromEntries(
    Object.entries(ADDRESSES).map(([key, object]) => [key, object[chain.id as keyof typeof object]]),
  ) as Record<keyof typeof ADDRESSES, Address>
}

export function useAddresses() {
  const { chain } = useClient()
  return getAddresses(chain)
}
