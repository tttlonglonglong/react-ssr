import React from 'React'
import { connect } from 'react-redux'
import { getTranslationList } from './store/actions'
import { Redirect } from 'react-router'
class Translation extends React.Component {
  componentDidMount() {
    console.log('Translation----componentDidMount')
    this.props.getTranslationList()
  }
  getList() {
    const { list } = this.props
    return list.map((item, idx) => <div key={idx}>{item.title}</div>)
  }
  render() {
    return this.props.login ? (
      <div>
        {/* <Header /> */}
        <div>hello， Translation page </div>
        {this.getList()}
      </div>
    ) : (
      <Redirect to="/" />
    )
  }
}

const mapStateToProps = state => ({
  login: state.head.login,
  list: state.translation.list
})
const mapDispatchToProps = dispatch => ({
  getTranslationList() {
    console.log('test--getTranslationList')
    dispatch(getTranslationList())
  }
})

const exportTranslation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Translation)

exportTranslation.loadData = store => {
  console.log('Translation.loadData', store)
  return store.dispatch(getTranslationList())
}
export default exportTranslation
