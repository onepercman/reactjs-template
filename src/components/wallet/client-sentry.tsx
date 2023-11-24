import { useSWR } from "@/libs/swr"
import { clientProxy } from "@/models/client.model"
import { useSnapshot } from "valtio"
import { WalletClient, useAccount, useWalletClient } from "wagmi"

export function ClientSentry() {
  const { chain } = useSnapshot(clientProxy)

  const { isConnected } = useAccount()

  const { data: walletClient } = useWalletClient({
    chainId: chain.id,
  })

  useSWR(["sentry wallet client", walletClient, isConnected], function () {
    clientProxy.setWalletClient(isConnected ? (walletClient as WalletClient) : undefined)
  })

  return null
}
