import React from 'React'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'

class Home extends React.Component {
  // 在服务器端不执行
  componentDidMount() {
    console.log('HOME---componentDidMount')
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
      <div>
        <Header />
        <div> Home,this is {props.name} </div>
        {this.getList()}
      </div>
    )
  }
}

Home.loadData = store => {
  //这个函数， 负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  console.log('HOME.loadData')
  return store.dispatch(getHomeList())
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
