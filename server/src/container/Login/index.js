import React from 'React'
import Header from '../../components/Header'

const Login = () => {
  return (
    <div>
      <Header />
      <div>hello， Login page </div>
    </div>
  )
}
Login.loadData = () => {
  console.log('LOGIN.loadData')
}
export default Login
