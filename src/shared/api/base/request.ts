import { AxiosError, AxiosRequestConfig } from 'axios'
import client from './client'
// Refresh Token
// import refreshToken from '@utils/refreshToken'

interface IRequestShort {
  type: 'GET' | 'DELETE'
  url: string
  config?: AxiosRequestConfig
}

interface IRequest {
  type: 'POST' | 'PUT' | 'PATCH'
  url: string
  data?: unknown
  config?: AxiosRequestConfig
}

export async function request<RESPONSE, RESPONSE_ERROR>(
  params: IRequest | IRequestShort,
): Promise<RESPONSE | RESPONSE_ERROR> {
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
    return response.data as RESPONSE
  } catch (err) {
    // Refresh Token
    // if (
    //   axios.isAxiosError(err) &&
    //   err.response?.status === 401 &&
    //   err.response?.data?.message === 'Token has expired'
    // ) {
    //   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    //   return await refreshToken(err.config!)
    // }

    return (err as AxiosError).response?.data as RESPONSE_ERROR
  }
}
