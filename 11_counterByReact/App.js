import React, { Component } from "react";
import { Button, FloatButton, Col, Row } from "antd";
import Counter from "./components/Count";

export default class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <Counter />
          </Col>
        </Row>
        <FloatButton onClick={() => console.log("I am a float button")} />
      </div>
    );
  }
}
