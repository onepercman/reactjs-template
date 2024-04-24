import { useStore } from "@/libs/valtio";
import { clientStore } from "@/stores/client.store";
import { useState } from "react";
import toast from "react-hot-toast";
import { Chain } from "viem";
import { useSwitchChain } from "wagmi";

export function useChainSetup() {
	const { walletClient, chain } = useStore(clientStore);
	const { switchChainAsync } = useSwitchChain();
	const [isSwitchingChain, setIsSwitchingChain] = useState(false);

	async function selectChain(chain: Chain) {
		try {
			setIsSwitchingChain(true);
			if (walletClient?.account) {
				if (typeof switchChainAsync === "function") {
					const setup = await switchChainAsync({ chainId: chain.id });
					clientStore.updateChain(setup);
				} else {
					toast.error("An error occurred while switching networks");
				}
			} else {
				clientStore.updateChain(chain);
			}
		} catch (err) {
			toast.error("Switch network failed");
		} finally {
			setIsSwitchingChain(false);
		}
	}

	return {
		currentChain: chain,
		selectChain,
		isSwitchingChain,
	};
}
