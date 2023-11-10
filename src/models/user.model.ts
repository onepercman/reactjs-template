import { SIGN_MESSAGE } from "@/config/auth.config"
import { User } from "@/interfaces/user.interface"
import { Service } from "@/services/app.service"
import { toastErrors } from "@/utils/toast"
import { jwtDecode } from "jwt-decode"
import { toast } from "react-hot-toast"
import { BaseError, isAddressEqual } from "viem"
import { StateCreator } from "zustand"

export const userModel: StateCreator<User> = function (set, get) {
  return {
    reset() {
      set({
        token: undefined,
        id: undefined,
        email: undefined,
        username: undefined,
        address: undefined,
        name: undefined,
      })
    },

    async login(walletClient) {
      const { account } = walletClient
      const { address, token } = get()

      const isExpired = token && jwtDecode<{ exp: number }>(token).exp * 1000 <= Date.now()
      const isInvalidToken = !token || isExpired
      const isKeepedAddress = address && isAddressEqual(account.address, address)

      if (isKeepedAddress && !isInvalidToken) {
        return true
      }

      const { data: nonceData } = await Service.auth.getNonce(account.address)
      // Check nonce
      if (!nonceData) {
        toast.error("Failed to get nonce")
        return false
      }
      try {
        toast.loading("Please confirm the sign message on your wallet to log in", { id: "sign-message" })
        const sign = await walletClient.signMessage({
          account: account!,
          message: `${SIGN_MESSAGE} ${nonceData.nonce}`,
        })
        const { data, statusText } = await Service.auth.login(account.address, sign)
        if (!data) {
          toast.error(statusText)
          return false
        }
        toast.success("Logged in successfully")
        const { userInfo, token } = data
        set({ ...userInfo, token })
        return true
      } catch (err) {
        toastErrors(err as BaseError, "Sign message failed")
        return false
      } finally {
        toast.dismiss("sign-message")
      }
    },

    logout() {
      get().reset()
    },

    async refreshUserInfo() {
      const { data, statusText } = await Service.user.getUser()
      if (data) {
        const { userInfo } = data
        set((states) => ({ ...states, ...userInfo }))
      } else toast.error(statusText)
    },
  }
}
