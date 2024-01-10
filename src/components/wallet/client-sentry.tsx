import { clientStore, useClientStore } from "@/stores/client.store"
import { useWalletClient } from "wagmi"

export function ClientSentry() {
  const { chain } = useClientStore()

  useWalletClient({
    chainId: chain.id,
    query: {
      select(client) {
        clientStore.updateWalletClient(client)
        return client
      },
    },
  })

  return null
}
