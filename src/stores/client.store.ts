import { defaultChain } from "@/config/chain.config"
import { isDev } from "@/config/env.config"
import { storageKeys } from "@/config/storage.config"
import { ADDRESSES } from "@/constants/addresses"
import { proxyWithPersist } from "@/libs/valtio"
import { publicClient } from "@/libs/wagmi"
import { useSnapshot } from "valtio"
import { devtools } from "valtio/utils"
import { Account } from "viem"
import { Address, Chain, PublicClient, WalletClient } from "wagmi"

class ClientStore {
  chain: Chain = defaultChain
  walletClient: WalletClient | undefined

  get account(): Account | undefined {
    return this.walletClient?.account
  }

  get publicClient(): PublicClient {
    return publicClient({ chainId: this.chain.id })
  }

  get contractAddresses(): Record<keyof typeof ADDRESSES, Address> {
    return Object.fromEntries(
      Object.entries(ADDRESSES).map(([key, object]) => [key, object[this.chain.id as keyof typeof object]]),
    ) as Record<keyof typeof ADDRESSES, Address>
  }

  updateWalletClient(walletClient: WalletClient | undefined) {
    this.walletClient = walletClient
  }

  updateChain(chain: Chain) {
    this.chain = chain
  }
}

const clientStore = proxyWithPersist(new ClientStore(), { key: storageKeys.client })

devtools(clientStore, { name: "Client", enabled: isDev })

const useClientStore = () => useSnapshot(clientStore)

export { clientStore, useClientStore }
