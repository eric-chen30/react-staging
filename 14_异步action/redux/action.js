/* 
    专门为组件生成action对象
*/
import { INCREMENT, DECREMENT } from "./constant";

export const createIncrementAction = (data) => ({ type: INCREMENT, data });

export const createDecrementAction = (data) => ({ type: DECREMENT, data });

// 异步action， 就是指action的值为函数,异步action中一般会用到redux-thunk中间件
// 异步action不是必须的，可以根据需求选择是否使用异步action
export const createIncrementSyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data));
    }, time);
  };
};
