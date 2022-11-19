import axios from 'axios'
import { config } from './config'

const client = axios.create(config)

// ****** Installing a token ******
client.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken')

  if (accessToken) {
    config.headers = {
      ...config.headers,
      authorization: `Bearer ${accessToken}`,
    }
  }

  return config
})

export default client
