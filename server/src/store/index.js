import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../container/Home/store'

const reducer = combineReducers({
  home: homeReducer
})
// 每个用户访问，都创建一个新的store
export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}

export const getClientStore = () => {
  // 用服务器端的store的state，作为客户端store的state的默认值
  // 保持首次渲染，前后端sotre一致
  const defaultState = window.context.state
  // const defaultState = {}
  console.log('服务器端给客户端的默认值state', defaultState)
  return createStore(reducer, defaultState, applyMiddleware(thunk))
}
// export default getStore
