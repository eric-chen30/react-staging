import React, { Component } from "react";
import store from "../../redux/store";

export default class Counter extends Component {
  /*  
    为了监听redux中的变化，从而根据数据重新渲染页面 
    但每个页面都写很麻烦，直接在入口文件订阅
  */

  // componentDidMount() {
  //   // 检测redux中状态的变化，只要变化，就调用render方法重新渲染
  //   this.unsubscribe = store.subscribe(() => {
  //     this.forceUpdate();
  //     // this.setState({});  // setState方法也可以触发重新渲染，但是不推荐
  //   });
  // }

  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch({ type: "counter/incremented", data: parseInt(value) });
  };

  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch({ type: "counter/decremented", data: parseInt(value) });
  };

  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (store.getState().count % 2 !== 0) {
      store.dispatch({ type: "counter/incremented", data: parseInt(value) });
    }
  };

  incrementAsync = () => {
    const { value } = this.selectNumber;
    setTimeout(() => {
      store.dispatch({ type: "counter/incremented", data: parseInt(value) });
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
