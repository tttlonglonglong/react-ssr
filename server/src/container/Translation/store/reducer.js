import { CHANGE_LIST } from './constants'

const defaultState = {
  name: 'dell',
  list: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LIST:
      // console.log('数据请求到的list', action.list)
      return { ...state, list: action.list }
    default:
      return state
  }
}
