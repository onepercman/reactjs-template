import { User } from "@/interfaces/user.interface"
import { WalletClient } from "viem"

export class UserFactory {
  user?: User
  jwt?: string

  async login(walletClient: WalletClient) {
    console.log(walletClient)
  }

  logout() {
    this.user = undefined
  }
}
