import axios from 'axios'

// import clientAxios from '../../../client/requst'
// import serverAxios from '../../../server/requst'
import { CHANGE_LIST } from './constants'

const changeList = list => ({
  type: CHANGE_LIST,
  list
})
export const getHomeList = () => {
  return (dispatch, getState, axiosInstance) => {
    console.log('actions')

    // 将action 改成promise返回
    // 不直接请求 API 服务器的地址：http://127.0.0.1:3002/ssr/api/news.json?secret=abcd
    // 访问中间层的node服务器

    // 浏览器器运行: /api/news.json =http://localhost:3000/api/news.json
    // 服务器运行
    // /api/news.json = 服务器很目录下/api/news.json

    // const request = server ? serverAxios : clientAxios

    return axiosInstance.get('/api/news.json').then(res => {
      // console.log('获取到的后端数据', res.data)
      const list = res.data.list || []
      dispatch(changeList(list))
    })
  }
}
