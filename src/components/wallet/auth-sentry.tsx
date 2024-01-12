import { useSWR } from "@/libs/swr"
import { useStore } from "@/libs/valtio"
import { clientStore } from "@/stores/client.store"
import userStore from "@/stores/user.store"
import { FC } from "react"

export const AuthSentry: FC = () => {
  const { walletClient } = useStore(clientStore)

  useSWR(["auth sentry", walletClient], function () {
    if (walletClient) {
      userStore.login(walletClient)
    }
  })

  return null
}
