import { useSWR } from "@/libs/swr"
import { useClient, useUser } from "@/models/root"
import { jwtDecode } from "jwt-decode"
import { FC, useEffect, useRef } from "react"
import { toast } from "react-hot-toast"

export const AuthSentry: FC = () => {
  const { walletClient } = useClient()
  const { token, login } = useUser()

  useSWR(["auth sentry", walletClient], function () {
    if (walletClient?.account) {
      login(walletClient)
    }
  })

  const tokenTimer = useRef<NodeJS.Timeout>()

  function autoRefreshToken() {
    toast("Login session has expired, please sign up to login again")
    if (token && walletClient) {
      clearTimeout(tokenTimer.current)
      const { exp } = jwtDecode<{ exp: number }>(token)
      const remaining = exp * 1000 - Date.now()
      tokenTimer.current = setTimeout(function () {
        login(walletClient)
      }, remaining)
    }
  }

  useEffect(() => {
    autoRefreshToken()

    return function () {
      clearTimeout(tokenTimer.current)
    }
  }, [token])

  return null
}
