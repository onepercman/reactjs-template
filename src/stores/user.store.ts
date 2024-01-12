import { storageKeys } from "@/config/storage.config"
import { User } from "@/interfaces/user.interface"
import { createStore } from "@/libs/valtio"
import { useSnapshot } from "valtio"
import { WalletClient } from "viem"

class UserStore {
  user?: User
  jwt?: string

  async login(walletClient: WalletClient) {
    console.log(walletClient)
  }

  logout() {
    this.user = undefined
  }
}

const userStore = createStore(new UserStore(), { key: storageKeys.user })

const useUserStore = () => useSnapshot(userStore)

export { useUserStore, userStore }
