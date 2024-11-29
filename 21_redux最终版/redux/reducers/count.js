import { INCREMENT, DECREMENT } from "../constant";

const initialState = 0;

function counterReducer(preState = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}

export default counterReducer;
