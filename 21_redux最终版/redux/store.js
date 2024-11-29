import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// 引入汇总后的reducers
import reducer from "./reducers";

// 创建redux store对象
let store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// 导出store对象
export default store;
