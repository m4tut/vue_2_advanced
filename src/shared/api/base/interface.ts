import { AxiosRequestConfig } from 'axios'

export interface IConstrictionRequest<D> {
  type: 'GET' | 'DELETE'
  url: string
  config?: AxiosRequestConfig<D>
}

export interface IRequest<D> {
  type: 'POST' | 'PUT' | 'PATCH'
  url: string
  data?: D
  config?: AxiosRequestConfig<D>
}

export interface IResponseError {
  message: string
  code?: string
}
