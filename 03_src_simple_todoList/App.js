// 创建容器组件
import React, { Component } from "react";
import MyList from "./components/MyList";

export default class App extends Component {
  render() {
    const toDos = ["Listen to Hot Mulligan", "Drink hot cocoa", "Eat hot cheetos"]
    return (
      <div>
        <MyList theList={toDos} />
      </div>
    );
  }
}

