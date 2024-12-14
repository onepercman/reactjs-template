import { ENV } from "@/config/env.config"
import userStore from "@/features/user/user.store"
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios"

const axiosInstance = axios.create({
  baseURL: ENV.API_URL,
  timeout: 10000,
  headers: {},
})

interface RetryQueueItem {
  resolve: (value?: any) => void
  reject: (error?: any) => void
  config: AxiosRequestConfig
}

const retryQueue: RetryQueueItem[] = []

let isRefreshing = false

const requestHandler = {
  onFulfilled(config: InternalAxiosRequestConfig) {
    const { jwt } = userStore
    if (jwt && config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${jwt}`
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
    return Promise.resolve(response)
  },
  async onRejected(error: AxiosError) {
    // Common error
    if (!error.config || !error.response || error.response.status !== 401) {
      return Promise.reject(error)
    }

    const originalRequest: AxiosRequestConfig = error.config

    // Authorize error
    if (error.response && error.response.status === 401) {
      if (!isRefreshing) {
        // Check duplicate refreshing
        isRefreshing = true
        try {
          // Refresh the access token
          const newAccessToken = await userStore.refreshToken()

          // Update the request headers with the new access token
          error.config.headers["Authorization"] = `Bearer ${newAccessToken}`

          // Retry all requests in the queue with the new token
          retryQueue.forEach(({ config, resolve, reject }) => {
            axiosInstance
              .request(config)
              .then(response => resolve(response))
              .catch(err => reject(err))
          })

          // Clear the queue
          retryQueue.length = 0

          // Retry the original request
          return axiosInstance(originalRequest)
        } catch (refreshError) {
          // Do something to clear or force user interface
          throw new Error(refreshError as any)
        } finally {
          isRefreshing = false
        }
      }

      return new Promise<void>((resolve, reject) => {
        retryQueue.push({ config: originalRequest, resolve, reject })
      })
    }
  },
}

// Apply interceptors
axiosInstance.interceptors.request.use(requestHandler.onFulfilled)

axiosInstance.interceptors.response.use(
  responseHandler.onFulfilled,
  responseHandler.onRejected,
)

export default axiosInstance
