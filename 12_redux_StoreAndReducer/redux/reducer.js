/**
 * 这是一个 reducer 函数：接受当前 state 值和描述“发生了什么”的 action 对象，它返回一个新的 state 值。
 * reducer 函数签名是 : (state, action) => newState
 *
 * Redux state 应该只包含普通的 JS 对象、数组和原语。
 * 根状态值通常是一个对象。 重要的是，不应该改变 state 对象，而是在 state 发生变化时返回一个新对象。
 *
 * 你可以在 reducer 中使用任何条件逻辑。 在这个例子中，我们使用了 switch 语句，但这不是必需的。
 *
 */
function counterReducer(state = { count: 0 }, action) {
  console.log(state.count); // 0
  const { type, data } = action;
  switch (type) {
    case "counter/incremented":
      return { count: state.count + data };
    case "counter/decremented":
      return { count: state.count - data };
    default:
      return state;
  }
}

export default counterReducer;
