import React, { Component } from 'react'

export default class About extends Component {
  render() {
    console.log('路由组件接收的默认props:', this.props);
    return (
      <div>About Page</div>
    )
  }
}
