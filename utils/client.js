import axios from 'axios'
import { BACKEND_URL } from '../constants'

const client = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'Application/json',
    'X-requested-with': 'XMLHttpRequest',
  },
  timeout: 10000,
  responseType: 'json',
})

export default client
