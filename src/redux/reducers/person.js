import { ADD_PERSON } from "../constant";

const initialState = [{ id: "001", name: "JacksonYee", age: "24" }];

export default function personReducer(preState = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return preState;
  }
}
