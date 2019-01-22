import { CHANGE_LIST } from './constants'

const defaultState = {
  name: 'dell',
  newsList: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      console.log('数据请求到的list', action.list)
      return { ...state, newsList: action.list }
    default:
      return state
  }
}
