# Getting Started with Create React App
    1. 拆分组件、实现静态组件，注意className和style的写法
    2. 动态初始化列表，如何确定将数据放在哪个组件的state中？
       ——某个组件使用： 放在其自身state
       ——某些组件使用： 放在共同父组件的state中，通过props传递给子组件（状态提升）
    3. 关于父子组件之间的通信：
       ——父组件通过props向子组件传递数据
       ——子组件通过回调函数向父组件传递数据（父组件提前给子组件传递一个函数）
    4. 注意defaultChecked和checked的区别，类似的还有defaultValue和value
    5. 状态在哪里，操作状态的方法就在哪里
    