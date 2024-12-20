import React, { Component } from "react";
import store from "../../redux/store";
// 引入actionCreater 专门用于创建action对象
import { createIncrementAction, createDecrementAction } from "../../redux/action";

export default class Counter extends Component {

  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(parseInt(value)));
  };

  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(parseInt(value)));
  };

  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (store.getState().count % 2 !== 0) {
      store.dispatch(createIncrementAction(parseInt(value)));
    }
  };

  incrementAsync = () => {
    const { value } = this.selectNumber;
    setTimeout(() => {
      store.dispatch(createIncrementAction(parseInt(value)));
    }, 1000);
  };

  render() {
    return (
      <div>
        <h1>当前求和为: {store.getState().count}</h1>
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
