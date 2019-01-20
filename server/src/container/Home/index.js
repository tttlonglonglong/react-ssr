import React from 'React'
import Header from '../../components/Header'
export default class Home extends React.Component {
  componentDidMount() {
    console.log('HOME---componentDidMount')
  }
  render() {
    return (
      <div>
        <Header />
        <div> Home </div>
      </div>
    )
  }
}

//  Home
