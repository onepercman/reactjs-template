import axiosInstance from "@/libs/axios-instance"
export class AuthService {
  getNonce(address: string) {
    return axiosInstance.request({
      method: "GET",
      url: `/auth/get-nonce/${address}`,
      params: {
        address,
      },
    })
  }
  login(data: { address: string; signature: string }) {
    return axiosInstance.request({
      method: "POST",
      url: "/auth/login-wallet",
      data,
    })
  }

  twitterAuthUrl() {
    return axiosInstance.request<string>({
      method: "GET",
      url: "/auth/twitter-auth-url",
    })
  }

  loginTwitter(code: string) {
    return axiosInstance.request({
      method: "POST",
      url: "/auth/login-twitter",
      data: { code },
      headers: { Authorization: true },
    })
  }
}

export const authService = new AuthService()
