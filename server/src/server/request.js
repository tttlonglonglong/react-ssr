import axios from 'axios'
import config from '../conifg'

const createInstance = req =>
  axios.create({
    baseURL: 'http://127.0.0.1:3002/ssr',
    headers: { cookie: req.get('cookie') || '' },
    params: {
      secret: config.secret
    }
  })
export default createInstance
