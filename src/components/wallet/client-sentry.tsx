import { useSWR } from "@/libs/swr"
import { useClient } from "@/models/root"
import { WalletClient, useAccount, usePublicClient, useWalletClient } from "wagmi"

export function ClientSentry() {
  const { chain, setPublicClient, setWalletClient } = useClient()

  const { isConnected } = useAccount()

  const publicClient = usePublicClient({
    chainId: chain.id,
  })

  const { data: walletClient } = useWalletClient({
    chainId: chain.id,
  })

  useSWR(["sentry public client", publicClient], function () {
    setPublicClient(publicClient)
  })

  useSWR(["sentry wallet client", walletClient, isConnected], function () {
    setWalletClient(isConnected ? (walletClient as WalletClient) : undefined)
  })

  return null
}
