import { createStore, applyMiddleware } from "redux";
import counterReducer from "./reducer";
import { thunk }   from 'redux-thunk'

// 创建redux store对象
let store = createStore(counterReducer, applyMiddleware(thunk));

// 导出store对象
export default store;
