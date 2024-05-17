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
