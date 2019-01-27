import axios from 'axios'
import config from '../conifg'
const instance = axios.create({
  baseURL: '/',
  params: {
    secret: config.secret
  }
})
export default instance
