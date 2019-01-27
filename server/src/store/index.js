import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from '../container/Home/store'
import { reducer as headerReducer } from '../components/Header/store'
import { reducer as translationReducer } from '../container/Translation/store/'
import clientAxios from '../client/request'
import serverAxios from '../server/request'
const reducer = combineReducers({
  home: homeReducer,
  head: headerReducer,
  translation: translationReducer
})
// 每个用户访问，都创建一个新的store
// withExtraArgument 提供的参数，可以在action的第三个参数中获取到
export const getStore = req => {
  // 改变服务器端 store的内容，那么就要使用serverAxios
  return createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(serverAxios(req)))
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
