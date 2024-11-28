import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/**
 * 使用react-redux，不需要在使用store.subscribe()监听state数据变化，逻辑在容器组件中（连接UI组件和store）
 */

// 入口文件订阅，监听store中的数据变化，重新渲染组件
// store.subscribe(() => {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// });
