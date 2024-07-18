import { BaseService } from "./base.service"
export class AuthService extends BaseService {
  getNonce(address: string) {
    return this.http.request({
      method: "GET",
      url: `/auth/get-nonce/${address}`,
      params: {
        address,
      },
    })
  }
  login(data: { address: string; signature: string }) {
    return this.http.request({
      method: "POST",
      url: "/auth/login-wallet",
      data,
    })
  }

  twitterAuthUrl() {
    return this.http.request<string>({
      method: "GET",
      url: "/auth/twitter-auth-url",
    })
  }

  loginTwitter(code: string) {
    return this.http.request({
      method: "POST",
      url: "/auth/login-twitter",
      data: { code },
      headers: { Authorization: true },
    })
  }
}

export const authService = new AuthService()
