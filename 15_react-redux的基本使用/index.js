import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./redux/store";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 入口文件订阅，监听store中的数据变化，重新渲染组件
store.subscribe(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
