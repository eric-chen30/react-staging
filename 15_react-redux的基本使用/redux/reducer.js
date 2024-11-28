import { INCREMENT, DECREMENT } from "./constant"
function counterReducer(state = { count: 0 }, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return { count: state.count + data };
    case DECREMENT:
      return { count: state.count - data };
    default:
      return state;
  }
}

export default counterReducer;
