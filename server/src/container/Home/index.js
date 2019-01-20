import React from 'React'
import Header from '../../components/Header'
import { connect } from 'react-redux'

class Home extends React.Component {
  componentDidMount() {
    console.log('HOME---componentDidMount')
  }
  render() {
    const props = this.props
    return (
      <div>
        <Header />
        <div> Home,this is {props.name} </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ name: state.name })
export default connect(
  mapStateToProps,
  null
)(Home)
