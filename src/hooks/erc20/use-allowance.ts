import { useClientStore } from "@/stores/client.store"
import { toastErrors } from "@/utils/toast"
import { appendTx } from "@/utils/tx-queue"
import { useCallback } from "react"
import { Address, BaseError, erc20Abi, hexToBigInt } from "viem"
import { useReadContract } from "wagmi"

const MaxUint256 = hexToBigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")

export function useAllowance(address?: Address, spender?: Address) {
  const { walletClient, publicClient, chain } = useClientStore()

  const { data: symbol } = useReadContract({
    address,
    abi: erc20Abi,
    functionName: "symbol",
  })

  const { data: allowance, refetch } = useReadContract({
    abi: erc20Abi,
    address,
    functionName: "allowance",
    args: [walletClient?.account?.address as Address, spender!],
  })

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
        })
        appendTx(
          hash,
          `Approving spending cap for ${symbol || "the token"}`,
          `Successfully set spending cap for ${symbol || "the token"}`,
          refetch,
        )
      }
    } catch (err) {
      toastErrors(err as BaseError, "Approve failed")
    }
  }, [walletClient, publicClient, address, spender, chain, refetch, symbol])

  return { allowance, approve }
}
