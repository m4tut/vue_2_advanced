import { AxiosRequestConfig } from 'axios'

export const BASE_API_URL = process.env.VUE_APP_API_URL

export const config: AxiosRequestConfig = {
  baseURL: BASE_API_URL,
}
