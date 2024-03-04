import { defaultChain } from "@/config/chain.config"
import { ADDRESSES } from "@/constants/addresses"
import { Account, Address, Chain, PublicClient, WalletClient, createPublicClient, http } from "viem"

export class ClientFactory {
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
