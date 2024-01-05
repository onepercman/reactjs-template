import { useSWR } from "@/libs/swr"
import { clientStore, useClientStore } from "@/stores/client.store"
import { WalletClient } from "viem"
import { useAccount, useWalletClient } from "wagmi"

export function ClientSentry() {
  const { chain } = useClientStore()

  const { isConnected } = useAccount()

  const { data: walletClient } = useWalletClient({
    chainId: chain.id,
  })

  useSWR(["sentry wallet client", walletClient, isConnected], function () {
    clientStore.updateWalletClient(isConnected ? (walletClient as WalletClient) : undefined)
  })

  return null
}
