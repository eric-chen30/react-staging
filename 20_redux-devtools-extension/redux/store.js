import { createStore, applyMiddleware, combineReducers } from "redux";
import counterReducer from "./reducers/count";
import personReducer from "./reducers/person";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// 合并多个reducer
const allReducers = combineReducers({
  // counterReducer返回值是一个值，这个值存在count的变量中，这里key的名称是count组件中this.props.key
  count: counterReducer,
  // personReducer返回值是一个对象数组，这个对象存在person的变量中，这里key的名称是person组件中this.props.key
  persons: personReducer,
});

// 创建redux store对象
let store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

// 导出store对象
export default store;
