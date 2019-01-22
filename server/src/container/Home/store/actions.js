import axios from 'axios'

import { CHANGE_LIST } from './constants'

const changeList = list => ({
  type: CHANGE_LIST,
  list
})
export const getHomeList = () => {
  return dispatch => {
    console.log('actions')
    // 将action 改成promise返回
    return axios
      .get('http://127.0.0.1:3002/ssr/api/news.json?secret=abcd')
      .then(res => {
        // console.log('获取到的后端数据', res.data)
        const list = res.data.list
        dispatch(changeList(list))
      })
  }
}
