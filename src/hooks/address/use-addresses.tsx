import { ADDRESSES } from "@/constants/addresses"
import { clientProxy } from "@/models/client.model"
import { useSnapshot } from "valtio"
import { Address, Chain } from "wagmi"

export function getAddresses(chain: Chain) {
  return Object.fromEntries(
    Object.entries(ADDRESSES).map(([key, object]) => [key, object[chain.id as keyof typeof object]]),
  ) as Record<keyof typeof ADDRESSES, Address>
}

export function useAddresses() {
  const { chain } = useSnapshot(clientProxy)
  return getAddresses(chain)
}
