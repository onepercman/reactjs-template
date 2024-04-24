import { useStore } from "@/libs/valtio";
import { clientStore } from "@/stores/client.store";
import { toastErrors } from "@/utils/toast";
import { waitTx } from "@/utils/tx-queue";
import { useCallback } from "react";
import { Address, BaseError, erc20Abi, hexToBigInt } from "viem";
import { useReadContract } from "wagmi";

const MaxUint256 = hexToBigInt(
	"0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
);

export function useAllowance(address?: Address, spender?: Address) {
	const { walletClient, publicClient, chain } = useStore(clientStore);

	const { data: symbol } = useReadContract({
		address,
		abi: erc20Abi,
		functionName: "symbol",
	});

	const { data: allowance, refetch } = useReadContract({
		abi: erc20Abi,
		address,
		functionName: "allowance",
		args: [walletClient?.account?.address as Address, spender!],
		query: {
			enabled: Boolean(walletClient?.account && spender),
		},
	});

	const approve = useCallback(async () => {
		try {
			if (walletClient?.account && address && spender) {
				const hash = await walletClient.writeContract({
					account: walletClient.account.address as Address,
					chain: chain,
					abi: erc20Abi,
					address,
					functionName: "approve",
					args: [spender, MaxUint256],
				});
				waitTx({
					hash,
					msg: `Approving spending cap for ${symbol || "the token"}`,
					successMsg: `Successfully set spending cap for ${
						symbol || "the token"
					}`,
					onSuccess: refetch,
				});
			}
		} catch (err) {
			toastErrors(err as BaseError, "Approve failed");
		}
	}, [walletClient, publicClient, address, spender, chain, refetch, symbol]);

	return { allowance, approve };
}
