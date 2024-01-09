import { queryClient } from "@/libs/react-query"
import { useEffect } from "react"
import { Address, erc20Abi } from "viem"
import { useBlockNumber, useClient, useReadContract } from "wagmi"

export function useTokenBalance(address: Address, blockInterval?: number) {
  const { account } = useClient()

  const { data: blockNumber } = useBlockNumber()

  const query = useReadContract({
    abi: erc20Abi,
    address,
    functionName: "balanceOf",
    args: [account?.address!],
    query: {
      enabled: Boolean(address && account),
    },
  })

  useEffect(() => {
    if (blockInterval && blockNumber && Number(blockNumber) % blockInterval === 0) {
      queryClient.invalidateQueries({ queryKey: query.queryKey })
    }
  }, [blockNumber])

  return query
}
