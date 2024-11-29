import React, { Component } from "react";
import {
  increment,
  decrement,
  incrementAsync,
} from "../../redux/actions/count";
import { connect } from "react-redux";

// 定义UI组件
class Counter extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    this.props.increment(parseInt(value));
  };

  decrement = () => {
    const { value } = this.selectNumber;
    this.props.decrement(parseInt(value));
  };

  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.increment(parseInt(value));
    }
  };

  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.incrementAsync(parseInt(value), 1000);
  };

  render() {
    console.log("count组件接收的props:", this.props);
    return (
      <div>
        <h1>我是Count组件</h1>
        <h2>
          当前求和为: {this.props.count}, 下方Person组件总人数为:
          {this.props.personNumber}
        </h2>
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
  // 这里需要注意！！！
  // 现在的state是一个对象{ count: number, persons: [...] }
  (state) => ({ count: state.count, personNumber: state.persons.length }),
  {
    increment: increment,
    decrement: decrement,
    incrementAsync: incrementAsync,
  }
)(Counter);
