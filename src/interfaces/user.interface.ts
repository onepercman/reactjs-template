import { Address } from "viem"

export interface User {
  id: number
  address: Address
  email: string
  name: string
  username: string
  createdTime: string
  updatedTime: string
}
