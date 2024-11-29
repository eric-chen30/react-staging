import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 此处需要用Provider包裹App组件，目的是让App所有后代容器都能接收到store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
