import { api } from "@/libs/axios"
import { User } from "@/types/auth"

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
