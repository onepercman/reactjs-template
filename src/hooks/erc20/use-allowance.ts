import { useClientStore } from "@/stores/client.store"
import { toastErrors } from "@/utils/toast"
import { appendTx } from "@/utils/tx-queue"
import { useCallback } from "react"
import { BaseError, hexToBigInt, isAddress } from "viem"
import { Address, erc20ABI, useContractRead, useToken } from "wagmi"

const MaxUint256 = hexToBigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")

export function useAllowance(address?: Address, spender?: Address) {
  const { walletClient, publicClient, chain } = useClientStore()

  const { data: token } = useToken({
    address,
  })

  const { data: allowance, refetch } = useContractRead({
    abi: erc20ABI,
    address,
    functionName: "allowance",
    args: [walletClient?.account.address!, spender!],
    enabled: Boolean(address && walletClient?.account && spender && isAddress(address) && isAddress(spender)),
  })

  const approve = useCallback(async () => {
    try {
      if (walletClient && address && spender) {
        const hash = await walletClient.writeContract({
          account: walletClient.account.address,
          chain: chain,
          abi: erc20ABI,
          address,
          functionName: "approve",
          args: [spender, MaxUint256],
        })
        appendTx(
          hash,
          `Approving spending cap for ${token?.symbol || "the token"}`,
          `Successfully set spending cap for ${token?.symbol || "the token"}`,
          refetch,
        )
      }
    } catch (err) {
      toastErrors(err as BaseError, "Approve failed")
    }
  }, [walletClient, publicClient, address, spender, chain, refetch, token?.symbol])

  return { allowance, approve }
}
