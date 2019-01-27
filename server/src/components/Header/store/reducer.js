import { CHANGE_LOGIN } from './constans'
const defaultState = {
  login: false
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return {
        ...state,
        login: action.data
      }
      break
    default:
      return state
  }
}
