import { User } from "./user.interface"

export class UserModel {
  user?: User
  jwt?: string

  async login(user: User) {
    this.user = user
  }

  logout() {
    this.user = undefined
  }
}
