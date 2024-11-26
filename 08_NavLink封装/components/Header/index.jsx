import React, { Component } from "react";

export default class Header extends Component {
  render() {
    console.log('普通组件接收的porps: ', this.props);
    return (
      <div>
        <h2>React Router Demo</h2>
      </div>
    );
  }
}
