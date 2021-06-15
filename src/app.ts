import { Component } from 'react'
import Taro, { Config } from "@tarojs/taro";
import './app.scss'

class App extends Component {


  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children
  }
}

export default App
