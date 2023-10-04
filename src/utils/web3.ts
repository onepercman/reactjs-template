import { multicallABI } from "@/constants/abi/common"
import { getAddresses } from "@/hooks/address/use-addresses"
import { useClient } from "@/models/root"
import { Address, decodeFunctionResult, encodeFunctionData } from "viem"

export async function multicall(
  abi: any,
  calls: Array<{
    functionName: string
    address: Address
    params?: any[]
  }>,
) {
  const { publicClient } = useClient.getState()
  const { MULTICALL } = getAddresses(publicClient.chain)

  const callData = calls.map((call) => ({
    target: call.address.toLowerCase(),
    callData: encodeFunctionData({
      abi,
      args: call.params || [],
      functionName: call.functionName,
    }),
  }))

  const tx = await publicClient.readContract({
    abi: multicallABI,
    address: MULTICALL,
    functionName: "aggregate",
    args: callData as any,
  })

  return (tx as any).returnData.map(function (call: any, index: number) {
    return decodeFunctionResult({
      abi,
      data: call[index],
    })
  })
}

export function truncateAddress(address: Address, numberic = 4) {
  return (
    address?.toLowerCase()?.slice(0, numberic > 2 ? numberic : 2) + "..." + address?.toLowerCase()?.slice(-numberic)
  )
}

export function getTxUrl(hash: string) {
  const { chain } = useClient.getState()
  const { blockExplorers } = chain
  if (blockExplorers) {
    const host = blockExplorers.default.url
    const url = new URL(host)
    const pathname = ["tx", hash]
    url.pathname += pathname.join("/")
    return url.toString()
  }
  return ""
}
