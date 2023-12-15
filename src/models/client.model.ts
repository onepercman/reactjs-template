import { defaultChain } from "@/config/chain.config"
import { storageKeys } from "@/config/storage.config"
import { ADDRESSES } from "@/constants/addresses"
import { persistedProxy } from "@/libs/valtio"
import { publicClient } from "@/libs/wagmi"
import { useSnapshot } from "valtio"
import { Address, Chain, PublicClient, WalletClient } from "wagmi"

class ClientModel {
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

export const clientProxy = persistedProxy(storageKeys.client, new ClientModel())
export const useClientProxy = () => useSnapshot(clientProxy)
