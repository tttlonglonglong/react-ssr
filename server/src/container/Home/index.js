import React from 'React'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
import styles from './style.css'

class Home extends React.Component {
  componentWillMount() {
    // 服务器端渲染：才有的方法
    if (this.props.staticContext && styles._getCss) {
      // this.props.staticContext.css = styles._getCss()
      this.props.staticContext.css.push(styles._getCss())
      // console.log('styles', styles)
      // console.log('styles._getContent:', styles._getContent())
      // console.log('styles._getCss:', styles._getCss())
      // console.log('styles._insertCss::', styles._insertCss())
    }
  }
  // 在服务器端不执行
  componentDidMount() {
    // console.log('HOME---componentDidMount')
    // console.log('styles', styles)
    // if (this.props.list.length) {
    this.props.getHomeList()
    // }
  }
  getList() {
    const { list } = this.props
    return list.map((item, idx) => <div key={idx}>{item.name}</div>)
  }
  render() {
    const props = this.props
    // console.log('this props list', props)
    return (
      <div className={styles.test}>
        {/* <Header /> */}
        <div> Home,this is Home page{props.name} </div>
        {this.getList()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  name: state.home.name,
  list: state.home.newsList
})
const mapDispatchToProps = dispatch => ({
  getHomeList() {
    console.log('test')
    dispatch(getHomeList())
  }
})

const exportHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

exportHome.loadData = store => {
  //这个函数，
  console.log('HOME.loadData')
  return store.dispatch(getHomeList())
}

export default exportHome
