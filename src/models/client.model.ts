import { defaultChain } from "@/config/chain.config"
import { storageKeys } from "@/config/storage.config"
import { persistedProxy } from "@/libs/valtio"
import { publicClient } from "@/libs/wagmi"
import { Chain, PublicClient, WalletClient } from "wagmi"

class ClientModel {
  chain: Chain = defaultChain
  walletClient?: WalletClient

  get publicClient(): PublicClient {
    return publicClient({ chainId: this.chain.id })
  }

  setWalletClient(walletClient: WalletClient | undefined) {
    this.walletClient = walletClient
  }

  setChain(chain: Chain) {
    this.chain = chain
  }
}

export const clientProxy = persistedProxy(storageKeys.client, new ClientModel())
