import { storageKeys } from "@/config/storage.config"
import { User } from "@/interfaces/user.interface"
import { persistedProxy } from "@/libs/valtio"
import { useSnapshot } from "valtio"

class UserModel {
  user?: User

  async login() {}

  logout() {
    this.user = undefined
  }
}

export const userProxy = persistedProxy(storageKeys.user, new UserModel())
export const useUserProxy = () => useSnapshot(userProxy)
