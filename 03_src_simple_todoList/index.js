// 引入React和 ReactDOM
import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import App from "./App";

/* 
    旧版本脚手架： 可以通过ReactDOM.render()方法渲染组件到页面上，但这种方式已被React官方废弃，
    新版本脚手架推荐使用ReactDOM.createRoot()方法创建ReactRoot实例，并通过该实例渲染组件。
*/

// 渲染App组件到id为root的div元素上
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
