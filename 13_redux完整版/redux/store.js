import { createStore } from "redux";
import counterReducer from "./reducer";

// 创建redux store对象
let store = createStore(counterReducer);
// 订阅
store.subscribe(() => console.log(store.getState()));
// 导出store对象
export default store;
