import { storageKeys } from "@/config/storage.config"
import { User } from "@/interfaces/user.interface"
import { persistedProxy } from "@/libs/valtio"

class UserModel {
  user?: User

  async login() {}

  logout() {
    this.user = undefined
  }
}

export const userProxy = persistedProxy(storageKeys.user, new UserModel())
