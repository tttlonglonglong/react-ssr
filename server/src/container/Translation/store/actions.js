// import axios from 'axios'

// import clientAxios from '../../../client/requst'
// import serverAxios from '../../../server/requst'
import { CHANGE_LIST } from './constants'

const changeList = list => ({
  type: CHANGE_LIST,
  list
})
export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    console.log('actions')

    return axiosInstance.get('/api/transiations.json').then(res => {
      console.log('获取到的文章列表', res.data)
      if (res.data.success) {
        const list = res.data.data.list || []
        dispatch(changeList(list))
      } else {
        const list = []
        dispatch(changeList(list))
      }
    })
  }
}
