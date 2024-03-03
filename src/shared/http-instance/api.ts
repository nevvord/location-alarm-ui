import axios from 'axios'
import Cookies from 'js-cookie'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@shared/constants'
import { IAuthResponse } from './model'

const API_URL = 'http://localhost:5000'

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

const $apiNoInterceptors = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${Cookies.get(ACCESS_TOKEN)}`

  return config
})

$api.interceptors.response.use(
  (config) => {
    return config
  },
  async (error) => {
    const originalRequest = error.config

    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true

      try {
        const response = await axios.get<IAuthResponse>(
          `${API_URL}/auth/refresh`,
          {
            withCredentials: true,
            params: {
              refresh_token: Cookies.get(REFRESH_TOKEN),
            },
          }
        )

        Cookies.set(ACCESS_TOKEN, response.data.accessToken)

        Cookies.set(REFRESH_TOKEN, response.data.refreshToken)

        return $api.request(originalRequest)
      } catch (e) {
        // console.log('User not unauthorised!')
      }
    }

    throw error
  }
)

export { $api, $apiNoInterceptors }
