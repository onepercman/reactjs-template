import { User } from "@/interfaces/user.interface"
import { api } from "@/libs/axios"

export class UserService {
  getUser() {
    return api.request<{
      userInfo: User
      token: string
    }>({
      method: "GET",
      url: "/user/get/",
      params: {},
    })
  }
}
