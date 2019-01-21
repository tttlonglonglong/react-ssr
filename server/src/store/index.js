import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const reducer = (state = { name: 'dell' }, action) => {
  return state
}

// 每个用户访问，都创建一个新的store
const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk))
}
export default getStore
