import axios, { AxiosError, AxiosResponse } from 'axios'
import { config } from './config'
import { IConstrictionRequest, IRequest, IResponseError } from './interface'

const client = axios.create(config)

// ****** Installing a token ******
// client.interceptors.request.use(
//   (config) => {
//     const accessToken = localStorage.getItem('accessToken')

//     if (accessToken) {
//       config.headers = {
//         authorization: `Bearer ${accessToken}`,
//       }
//     }

//     return config
//   },
//   (e) => {
//     return Promise.reject(e)
//   },
// )

// ****** Request method ******
export const request = async <T, R = AxiosResponse<T>, D = object>(
  params: IConstrictionRequest<D> | IRequest<D>,
): Promise<R> => {
  try {
    let response
    switch (params.type) {
      case 'GET':
        response = await client.get(params.url, params.config)
        break
      case 'POST':
        response = await client.post(params.url, params.data, params.config)
        break
      case 'PUT':
        response = await client.put(params.url, params.data, params.config)
        break
      case 'PATCH':
        response = await client.patch(params.url, params.data, params.config)
        break
      case 'DELETE':
        response = await client.delete(params.url, params.config)
        break
    }
    return response?.data
  } catch (err) {
    let error: IResponseError = {
      message: 'Произошла непредвиденная ошибка',
    }

    if (err instanceof AxiosError) {
      error = {
        message: err.message,
        code: err.code,
      }
    } else if (err instanceof Error) {
      error = {
        message: err.message,
      }
    }

    return Promise.reject(error)
  }
}

export default client
