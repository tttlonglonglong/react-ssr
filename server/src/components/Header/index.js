import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store/'

class Header extends React.Component {
  handleLogin() {}
  render() {
    const { login, handleLogin, handleLogout } = this.props
    // console.log('header--->', this.props)
    return (
      <div>
        <Link to="/">首页</Link>
        <br />
        {login ? (
          <Fragment>
            <Link to="/transition">列表</Link>
            <br />
            <button onClick={handleLogout}>退出</button>
          </Fragment>
        ) : (
          <button onClick={handleLogin}>登陆</button>
        )}
      </div>
    )
  }
}
const mapState = state => {
  // console.log('header--state', state)
  return {
    login: state.head.login
  }
}
const mapDispatch = dispatch => ({
  handleLogin() {
    console.log('handleLogin', actions)
    dispatch(actions.login())
  },
  handleLogout() {
    dispatch(actions.logout())
  }
})
export default connect(
  mapState,
  mapDispatch
)(Header)
