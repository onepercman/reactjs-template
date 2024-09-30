import { API_URL } from "@/config/endpoints.config"
import userStore from "@/features/user/user.store"
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from "axios"
import { camelizeKeys, decamelizeKeys } from "humps"

const requestHandler = {
  onFulfilled(config: InternalAxiosRequestConfig) {
    const { jwt } = userStore
    if (jwt && config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${jwt}`
    }
    if (
      config.params?.transformCase === false ||
      config.data?.transformCase === false
    ) {
      delete config.params?.transformCase
      delete config.data?.transformCase
      return config
    }
    config.params = decamelizeKeys(config.params)
    if (config.headers["Content-Type"] !== "multipart/form-data") {
      config.data = decamelizeKeys(config.data)
    }
    return config
  },
}

const responseHandler = {
  onFulfilled(response: AxiosResponse) {
    response.statusText = ""
    // Transform paginated data
    if (response.data.pagination) {
      response.data.data = {
        data: response.data.data,
        pagination: response.data.pagination,
      }
    }
    response.data = camelizeKeys(
      response.data.data ?? response.data,
      function (key, convert) {
        return /^[A-Z0-9_]+$/.test(key) ? key : convert(key)
      },
    )
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

export class BaseService {
  http: AxiosInstance

  constructor(cfg: CreateAxiosDefaults = {}) {
    this.http = axios.create({
      baseURL: API_URL,
      timeout: 10000,
      headers: {},
      ...cfg,
    })

    this.http.interceptors.request.use(requestHandler.onFulfilled)
    this.http.interceptors.response.use(
      responseHandler.onFulfilled,
      responseHandler.onRejected,
    )
  }
}
