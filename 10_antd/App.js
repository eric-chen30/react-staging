import React, { Component } from "react";
import "./index.css";
import { Button, FloatButton } from "antd";

export default class App extends Component {
  render() {
    return (
      <div className="box">
        <Button type="primary">Click me</Button>
        <FloatButton onClick={() => console.log('onClick')} />
      </div>
    );
  }
}
