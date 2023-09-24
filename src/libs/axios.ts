import { API_URL } from "@/config/endpoints.config"
import { useUser } from "@/models/root"
import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { camelizeKeys, decamelizeKeys } from "humps"

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {},
})

function onRequestFulfilled(config: InternalAxiosRequestConfig) {
  const { token } = useUser.getState()
  if (token) {
    config.headers["Authorization"] = "Bearer " + token
  }
  config.params = decamelizeKeys(config.params)
  const contentType = config.headers["Content-Type"]?.toString() || ""
  if (contentType.includes("json") || contentType.includes("text")) {
    config.data = decamelizeKeys(config.data)
  }
  return config
}

function onResponseFulfilled(response: AxiosResponse) {
  response.statusText = ""
  response.data = camelizeKeys(response.data.data)
  return Promise.resolve(response)
}

function onResponseRejected(error: AxiosError) {
  if (error.response?.data) {
    const data = camelizeKeys(error.response.data) as any
    error.response.statusText = data["errorMsg"] || data["errorCode"]
    error.response.data = null
  } else {
    error.response!.statusText = "Connection lost"
  }
  return Promise.resolve(error.response)
}

api.interceptors.request.use(onRequestFulfilled)
api.interceptors.response.use(onResponseFulfilled, onResponseRejected)
