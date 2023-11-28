import { useSWR } from "@/libs/swr"
import { useClientProxy } from "@/models/client.model"
import { useUserProxy } from "@/models/user.model"
import { jwtDecode } from "jwt-decode"
import { FC, useEffect, useRef } from "react"
import { toast } from "react-hot-toast"

export const AuthSentry: FC = () => {
  const { walletClient } = useClientProxy()
  const { user, login } = useUserProxy()

  useSWR(["auth sentry", walletClient], function () {
    if (walletClient?.account) {
      login()
    }
  })

  const tokenTimer = useRef<NodeJS.Timeout>()

  function autoRefreshToken() {
    toast("Login session has expired, please sign up to login again")
    if (user?.token && walletClient) {
      clearTimeout(tokenTimer.current)
      const { exp } = jwtDecode<{ exp: number }>(user.token)
      const remaining = exp * 1000 - Date.now()
      tokenTimer.current = setTimeout(function () {
        login()
      }, remaining)
    }
  }

  useEffect(() => {
    autoRefreshToken()

    return function () {
      clearTimeout(tokenTimer.current)
    }
  }, [user])

  return null
}
