import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store/'
import styles from './style.css'

class Header extends React.Component {
  componentWillMount() {
    // 服务器端渲染：才有的方法
    if (this.props.staticContext && styles._getCss) {
      this.props.staticContext.css.push(styles._getCss())
    }
  }
  render() {
    const { login, handleLogin, handleLogout } = this.props
    console.log('header--->', this.props)
    return (
      <div className={styles.test}>
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
