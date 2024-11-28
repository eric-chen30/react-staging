import CountUI from "../../components/Count";
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementSyncAction,
} from "../../redux/action";
import { connect } from "react-redux";

export default connect(
  (state) => state,

  /* 1.mapDispatchToProps的一般写法 */
  // (dispatch) => ({
  //   jia: (number) => dispatch(createIncrementAction(number)),
  //   jian: (number) => dispatch(createDecrementAction(number)),
  //   jiaSync: (number, time) =>
  //     dispatch(createIncrementSyncAction(number, time)),
  // })

  /* 2.mapDispatchToProps的简写法 react-redux内部API会调用dispatch处理action */
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaSync: createIncrementSyncAction,
  }
)(CountUI);
