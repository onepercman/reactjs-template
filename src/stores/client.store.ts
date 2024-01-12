import { defaultChain } from "@/config/chain.config"
import { isDev } from "@/config/env.config"
import { storageKeys } from "@/config/storage.config"
import { ADDRESSES } from "@/constants/addresses"
import { createStore } from "@/libs/valtio"
import { devtools } from "valtio/utils"
import { Account, Address, Chain, PublicClient, WalletClient, createPublicClient, http } from "viem"

class ClientStore {
  chain: Chain = defaultChain
  walletClient: WalletClient | undefined

  get account(): Account | undefined {
    return this.walletClient?.account
  }

  get publicClient(): PublicClient {
    return createPublicClient({ chain: this.chain, transport: http() })
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

const clientStore = createStore(new ClientStore(), { key: storageKeys.client, include: ["chain"] })

devtools(clientStore, { name: "Client", enabled: isDev })

export { clientStore }
