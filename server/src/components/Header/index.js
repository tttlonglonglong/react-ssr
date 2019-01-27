import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store/'
import styles from './style.css'
import widthStyle from '../../widthStyle'
class Header extends React.Component {
  // componentWillMount() {
  //   // 服务器端渲染：才有的方法
  //   if (this.props.staticContext && styles._getCss) {
  //     this.props.staticContext.css.push(styles._getCss())
  //   }
  // }
  render() {
    const { login, handleLogin, handleLogout } = this.props
    // console.log('header--->', this.props)
    return (
      <div className={styles.container}>
        <Link to="/" className={styles.item}>
          首页
        </Link>
        {login ? (
          <Fragment>
            <Link to="/transition" className={styles.item}>
              列表
            </Link>
            <div onClick={handleLogout} className={styles.item}>
              退出
            </div>
          </Fragment>
        ) : (
          <div onClick={handleLogin} className={styles.item}>
            登陆
          </div>
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
)(widthStyle(Header, styles))
