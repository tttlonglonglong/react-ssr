import React from 'React'
import Header from './components/Header/index'
import { renderRoutes } from 'react-router-config'
import routes from './Routes'
import { actions } from './components/Header/store'
const App = props => {
  // console.log('APP---props', props)
  return (
    <div>
      <Header />
      {renderRoutes(routes[0].routes)}
    </div>
  )
}
App.loadData = store => {
  // console.log('LOGIN.loadData')
  return store.dispatch(actions.getHeaderInfo())
}
export default App
