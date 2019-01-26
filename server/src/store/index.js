import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../container/Home/store'
import clientAxios from '../client/requst'
import serverAxios from '../server/requst'
const reducer = combineReducers({
  home: homeReducer
})
// 每个用户访问，都创建一个新的store
// withExtraArgument 提供的参数，可以在action的第三个参数中获取到
export const getStore = () => {
  // 改变服务器端 store的内容，那么就要使用serverAxios
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverAxios))
  )
}

export const getClientStore = () => {
  const defaultState = window.context.state
  // 改变客户端的内容，要使用clientAxios
  return createStore(
    reducer,
    defaultState,
    applyMiddleware(thunk.withExtraArgument(clientAxios))
  )
}
// export default getStore
