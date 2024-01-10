import { useSWR } from "@/libs/swr"
import { useClientStore } from "@/stores/client.store"
import { userStore } from "@/stores/user.store"
import { FC } from "react"

export const AuthSentry: FC = () => {
  const { walletClient } = useClientStore()

  useSWR(["auth sentry", walletClient], function () {
    if (walletClient) {
      userStore.login(walletClient)
    }
  })

  return null
}
