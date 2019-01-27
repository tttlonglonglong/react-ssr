import React from 'react'

// 生成高阶组件的函数，返回一个高阶组件
export default (DecorateComponent, styles) => {
  return class NewComponent extends React.Component {
    componentWillMount() {
      // 服务器端渲染：才有的方法
      // console.log('NewComponent---->', this.props)
      if (this.props.staticContext && styles._getCss) {
        this.props.staticContext.css.push(styles._getCss())
      }
    }
    render() {
      return <DecorateComponent {...this.props} />
    }
  }
}
