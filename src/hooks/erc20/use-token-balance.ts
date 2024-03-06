import { queryClient } from "@/libs/react-query"
import { useEffect } from "react"
import { Address, erc20Abi } from "viem"
import { useAccount, useBlockNumber, useReadContract } from "wagmi"

export function useTokenBalance(address: Address, blockInterval?: number) {
  const { address: accountAddress } = useAccount()

  const { data: blockNumber } = useBlockNumber()

  const query = useReadContract({
    abi: erc20Abi,
    address,
    functionName: "balanceOf",
    args: [accountAddress!],
    query: {
      enabled: Boolean(address && accountAddress),
    },
  })

  useEffect(() => {
    if (blockInterval && blockNumber && Number(blockNumber) % blockInterval === 0) {
      queryClient.invalidateQueries({ queryKey: query.queryKey })
    }
  }, [blockNumber])

  return query
}
