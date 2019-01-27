import React from 'React'
class NotFound extends React.Component {
  componentWillMount() {
    const { staticContext } = this.props
    // console.log('404---props', this.props)

    // staticContext 服务端才有此属性
    staticContext && (staticContext.NOT_FOUND = true)
  }
  render() {
    return <div>404, sorry, not Found</div>
  }
}

export default NotFound
