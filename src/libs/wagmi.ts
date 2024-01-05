import { walletConnectId } from "@/config/wallet-connect.config"
import { createClient, http } from "viem"
import { createConfig } from "wagmi"
import { goerli, mainnet } from "wagmi/chains"
import { injected, walletConnect } from "wagmi/connectors"

export const chains = <const>[mainnet, goerli]

export enum ConnectorIds {
  Injected = "injected",
  WalletConnect = "walletconnect",
}

export const connectors = {
  [ConnectorIds.Injected]: injected(),
  [ConnectorIds.WalletConnect]: walletConnect({
    projectId: walletConnectId,
  }),
}

export const wagmiConfig = createConfig({
  chains: chains,
  client({ chain }) {
    return createClient({
      chain,
      transport: http(),
    })
  },
  connectors: [connectors[ConnectorIds.Injected], connectors[ConnectorIds.WalletConnect]],
})
