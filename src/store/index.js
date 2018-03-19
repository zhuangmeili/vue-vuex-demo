/**
 * Created by zhuangmeili on 2017/6/15 0014.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
//引入模块
import demo from './modules/demo'
import mod1 from './modules/mod1'
import form from './modules/form'

//使用vuex
Vue.use(Vuex);
const debug=process.env.NODE_ENV!=="production";
//导出
export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state:{
    test:"我是测试的状态",
    count:999,
  },
  modules:{
    demo,mod1,form
  },
  strict:debug?[createLogger()]:[]
})
/*
方案二：
modules:{
  a:mod1,
  b:cart
}
//
store.state.a //=>mod1的状态
store.state.b //=> cart的状态

*/

