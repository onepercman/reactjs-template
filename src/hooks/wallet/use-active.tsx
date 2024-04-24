import { wallets } from "@/config/wallet.config";
import { Dialog } from "@/libs/ui/dialog";
import { useStore } from "@/libs/valtio";
import { clientStore } from "@/stores/client.store";
import { isDesktop } from "react-device-detect";
import {
	ProviderNotFoundError,
	useAccount,
	useConnect,
	useDisconnect,
} from "wagmi";

const INJECTED = typeof window.ethereum !== "undefined";

export function useActive() {
	const { isConnecting } = useAccount();
	const { chain, account } = useStore(clientStore);
	const { connectAsync } = useConnect();
	const { disconnectAsync } = useDisconnect();

	function connect() {
		return new Promise(function (resolve) {
			const dialog = Dialog.open({
				title: "Select a wallet",
				className: "grid grid-cols-1 gap-1",
				width: 240,
				onClose() {
					resolve(false);
				},
				children: wallets.map((wallet) =>
					wallet.name === "Injected" && !INJECTED ? null : (
						<button
							className="border-line/50 hover:bg-primary/5 inline-flex w-full items-center gap-2 rounded border object-contain p-2 transition-all"
							onClick={async function () {
								try {
									dialog.close();
									await connectAsync({
										connector: wallet.connector,
										chainId: chain.id,
									});
									resolve(true);
								} catch (err) {
									if (err instanceof ProviderNotFoundError) {
										if (isDesktop) {
											window.open(
												wallet.downloadUrl,
												"_blank",
												"noopener noreferrer",
											);
										} else {
											window.open(
												wallet.deepLink,
												"_blank",
												"noopener noreferrer",
											);
										}
									}
									resolve(false);
								}
							}}
						>
							<span>{wallet.icon}</span>
							<span className="text-sm">{wallet.name}</span>
						</button>
					),
				),
			});
		});
	}

	async function disconnect() {
		disconnectAsync();
	}

	return {
		account,
		isConnecting,
		connect,
		disconnect,
	};
}
