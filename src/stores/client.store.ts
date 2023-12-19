import { defaultChain } from "@/config/chain.config"
import { isDev } from "@/config/env.config"
import { storageKeys } from "@/config/storage.config"
import { ADDRESSES } from "@/constants/addresses"
import { proxyWithPersist } from "@/libs/valtio"
import { publicClient } from "@/libs/wagmi"
import { useSnapshot } from "valtio"
import { devtools } from "valtio/utils"
import { Address, Chain, PublicClient, WalletClient } from "wagmi"

class ClientStore {
  chain: Chain = defaultChain
  walletClient?: WalletClient

  get publicClient(): PublicClient {
    return publicClient({ chainId: this.chain.id })
  }

  get addresses() {
    return Object.fromEntries(
      Object.entries(ADDRESSES).map(([key, object]) => [key, object[this.chain.id as keyof typeof object]]),
    ) as Record<keyof typeof ADDRESSES, Address>
  }

  setWalletClient(walletClient: WalletClient | undefined) {
    this.walletClient = walletClient
  }

  setChain(chain: Chain) {
    this.chain = chain
  }
}

export const clientStore = proxyWithPersist(new ClientStore(), storageKeys.client)

devtools(clientStore, { name: "Client", enabled: isDev })

export const useClientStore = () => useSnapshot(clientStore)
