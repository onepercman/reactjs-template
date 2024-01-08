import { createClient, http } from "viem"
import { createConfig } from "wagmi"
import { goerli, mainnet } from "wagmi/chains"

export const chains = <const>[mainnet, goerli]

export enum ConnectorIds {
  Injected = "injected",
  WalletConnect = "walletconnect",
}

export const wagmiConfig = createConfig({
  chains: chains,
  client({ chain }) {
    return createClient({
      chain,
      transport: http(),
    })
  },
})
