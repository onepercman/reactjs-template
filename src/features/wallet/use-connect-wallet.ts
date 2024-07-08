import { sleep } from "@/shared/utils/promise"
import { useMutation } from "@tanstack/react-query"

export function useConnectWallet() {
  return useMutation({
    mutationKey: ["connect wallet"],
    mutationFn() {
      // TODO
      return sleep(1000)
    },
  })
}
