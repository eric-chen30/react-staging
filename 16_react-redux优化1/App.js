import React, { Component } from "react";
import Counter from "./containers/Count";
import store from "./redux/store";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递 store */}
        {/* <Counter store={store} /> */}
        <Counter />
      </div>
    );
  }
}
