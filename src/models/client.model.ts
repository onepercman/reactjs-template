import { defaultChain } from "@/config/chain.config"
import { publicClient } from "@/libs/wagmi"
import { Chain, PublicClient, WalletClient } from "wagmi"
import { StateCreator } from "zustand"

export interface ClientModel {
  chain: Chain
  publicClient: PublicClient
  walletClient: WalletClient | undefined
  setPublicClient(publicClient: PublicClient): void
  setWalletClient(walletClient: WalletClient | undefined): void
  setChain(chain: Chain): void
}

export const clientModel: StateCreator<ClientModel> = function (set) {
  return {
    chain: defaultChain,
    publicClient: publicClient({ chainId: defaultChain.id }),
    walletClient: undefined,

    setChain(chain) {
      set({ chain })
    },
    setPublicClient(publicClient) {
      set({ publicClient })
    },
    setWalletClient(walletClient) {
      set({ walletClient })
    },
  }
}
