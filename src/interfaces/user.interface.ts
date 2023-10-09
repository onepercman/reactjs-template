import { Address, WalletClient } from "wagmi"

export interface User {
  id?: number
  address?: Address
  email?: string
  name?: string
  username?: string
  fullName?: string
  avatar?: string
  mobile?: string
  ref?: string
  type?: number
  status?: number
  lastActive?: string
  createdTime?: string
  updatedTime?: string
  token?: string
  login(walletClient: WalletClient): Promise<boolean>
  logout(): void
  refreshUserInfo(): void
  reset(): void
}
