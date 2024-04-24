import { wallets } from "@/config/wallet.config";
import { createClient, http } from "viem";
import { createConfig } from "wagmi";
import { goerli, mainnet } from "wagmi/chains";

export const chains = <const>[mainnet, goerli];

export const wagmiConfig = createConfig({
	chains: chains,
	connectors: wallets.map((wallet) => wallet.connector),
	client({ chain }) {
		return createClient({ chain, transport: http() });
	},
});
