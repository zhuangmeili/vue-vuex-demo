/**
 * Created by zhuangmeili on 2017/6/15 0014.
 */
/*
1、actions类似于 mutations （处理异步操作）
区别：
  Action提交的是mutation，而不是直接变更状态（mutation更改的是状态）
  Action可以包含任意异步操作（mutations必须同步执行）
2、触发
  store.dispatch('incrementAsyn');

3、组件中使用 this.$store.dispatch('xxx') 分发 action，
   或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：


* */
import * as types from "./mutation-types"
export default {

}
