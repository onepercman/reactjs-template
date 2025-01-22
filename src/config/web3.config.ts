import { CreateAppKit } from "@reown/appkit"
import { SolanaAdapter } from "@reown/appkit-adapter-solana"
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi"
import {
  arbitrum,
  mainnet,
  sepolia,
  solana,
  solanaDevnet,
} from "@reown/appkit/networks"
import { createAppKit, Metadata } from "@reown/appkit/react"

export const networks = [arbitrum, mainnet, sepolia]

const projectId = "d6f18e980b17dbc0cbf4395373231804"

// 1. Create the Wagmi adapter
export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks,
})

export const solanaAdapter = new SolanaAdapter()

// 3. Set up the metadata - Optional
const metadata: Metadata = {
  name: "AppKit",
  description: "AppKit Example",
  url: "http://localhost:3000", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
}

const appKitOptions: CreateAppKit = {
  metadata,
  projectId,
  adapters: [wagmiAdapter, solanaAdapter],
  networks: [mainnet, arbitrum, sepolia, solanaDevnet, solana],
  features: { analytics: true },
}

export const appKitModal = createAppKit(appKitOptions)
