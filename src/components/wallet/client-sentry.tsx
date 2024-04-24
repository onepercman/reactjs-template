import { useStore } from "@/libs/valtio";
import { clientStore } from "@/stores/client.store";
import { useAccountEffect, useWalletClient } from "wagmi";

export function ClientSentry() {
	const { chain } = useStore(clientStore);

	useWalletClient({
		chainId: chain.id,
		query: {
			select(walletClient) {
				clientStore.updateWalletClient(walletClient);
				return walletClient;
			},
		},
	});

	useAccountEffect({
		onDisconnect() {
			clientStore.updateWalletClient(undefined);
		},
	});

	return null;
}
