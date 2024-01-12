import { useStore } from "@/libs/valtio"
import { clientStore } from "@/stores/client.store"
import { useAccountEffect, useWalletClient } from "wagmi"

export function ClientSentry() {
  const { chain } = useStore(clientStore)

  useWalletClient({
    chainId: chain.id,
    query: {
      select(client) {
        clientStore.updateWalletClient(client)
        return client
      },
    },
  })

  useAccountEffect({
    onDisconnect() {
      clientStore.updateWalletClient(undefined)
    },
  })

  return null
}
