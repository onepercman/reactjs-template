import { Address, WalletClient } from "viem"

export interface User {
  id: number
  address: Address
  email: string
  name: string
  username: string
  createdTime: string
  updatedTime: string
}

export class UserModel {
  user?: User
  jwt?: string

  async login(walletClient: WalletClient) {
    console.log(walletClient)
  }

  logout() {
    this.user = undefined
  }
}
