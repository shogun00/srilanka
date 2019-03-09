import axios from 'axios'
import https from 'https'
import { BACKEND_URL } from '../constants'

const client = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'Application/json',
    'X-requested-with': 'XMLHttpRequest',
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  timeout: 10000,
  responseType: 'json',
})

export default client
