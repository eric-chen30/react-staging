/**
 * 该文件用于汇总所有的reducer，并将它们合并到一起
 */
import { combineReducers } from "redux";
import countReducer from "./count";
// 为Person组件创建reducer
import personReducer from "./person";

// 合并多个reducer
export default combineReducers({
  // counterReducer返回值是一个值，这个值存在count的变量中，这里key的名称是count组件中this.props.key
  count: countReducer,
  // personReducer返回值是一个对象数组，这个对象存在person的变量中，这里key的名称是person组件中this.props.key
  persons: personReducer,
});
