import axios from 'axios'
import { CHANGE_LOGIN } from './constans'
const changeLogin = data => ({
  type: CHANGE_LOGIN,
  data: data
})
export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/login.json').then(res => {
      console.log('登陆', res.data)
      const data = res.data.data.login
      dispatch(changeLogin(data))
    })
  }
}
export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/logout.json').then(res => {
      console.log('登陆', res.data)
      const data = res.data.data.login
      dispatch(changeLogin(data))
    })
  }
}
export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/isLogin.json').then(res => {
      // console.log('是否在已经登陆', res.data)
      const data = res.data.data.login
      dispatch(changeLogin(data))
    })
  }
}
