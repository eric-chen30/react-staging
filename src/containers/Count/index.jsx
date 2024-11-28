// 引入UI组件
import CountUI from "../../components/Count";
import { createIncrementAction, createDecrementAction, createIncrementSyncAction } from '../../redux/action'
// 引入connect用于连接UI组件和store
import { connect } from "react-redux";

// mapStateToProps函数返回的是一个对象
// 返回对象中的key，value就作为传递给UI组件props的value
// mapStateToProps 用于传递状态
function mapStateToProps(state) {
  return state
}

// mapDispatchToProps函数的返回值作为状态传递给UI组件propsd的key，value就作为传递给UI组件props的value——操作状态的方法
function mapDispatchToProps(dispatch) {
  return { 
    jia: number => dispatch(createIncrementAction(number)),
    jian: number => dispatch(createDecrementAction(number)),
    jiaSync: (number, time) => dispatch(createIncrementSyncAction(number, time))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
