import { AuthService } from "./auth.service"
import { UserService } from "./user.service"

export const Service = {
  auth: new AuthService(),
  user: new UserService(),
}
