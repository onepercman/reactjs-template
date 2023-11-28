import { ADDRESSES } from "@/constants/addresses"
import { useClientProxy } from "@/models/client.model"
import { Address, Chain } from "wagmi"

export function getAddresses(chain: Chain) {
  return Object.fromEntries(
    Object.entries(ADDRESSES).map(([key, object]) => [key, object[chain.id as keyof typeof object]]),
  ) as Record<keyof typeof ADDRESSES, Address>
}

export function useAddresses() {
  const { chain } = useClientProxy()
  return getAddresses(chain)
}
