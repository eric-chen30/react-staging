import React, { Component } from "react";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementSyncAction,
} from "../../redux/action";
import { connect } from "react-redux";

// 定义UI组件
class Counter extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(parseInt(value));
  };

  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(parseInt(value));
  };

  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2!== 0) {
      this.props.jia(parseInt(value));
    }
  };

  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.jiaSync(parseInt(value), 1000);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>当前求和为: {this.props.count}</h1>
        &nbsp;
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}

// 使用connect()()创建并暴露一个Counter容器组件
export default connect(
  (state) => state,
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaSync: createIncrementSyncAction,
  }
)(Counter);
