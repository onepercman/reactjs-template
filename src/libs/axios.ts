import { API_URL } from "@/config/endpoints.config"
import { userProxy } from "@/models/user.model"
import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios"

const requestHandler = {
  onFulfilled(config: InternalAxiosRequestConfig) {
    const { user } = userProxy
    if (user && config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    return config
  },
}

const responseHandler = {
  onFulfilled(response: AxiosResponse) {
    response.statusText = ""
    response.data = response.data.data
    return Promise.resolve(response)
  },
  onRejected(error: AxiosError) {
    if (error.response?.data) {
      const data = error.response.data as any
      error.response.statusText = data["errorMsg"] || data["errorCode"]
      error.response.data = null
    } else {
      error.response!.statusText = "Connection lost"
    }
    return Promise.resolve(error.response)
  },
}

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {},
})

api.interceptors.request.use(requestHandler.onFulfilled)
api.interceptors.response.use(responseHandler.onFulfilled, responseHandler.onRejected)
