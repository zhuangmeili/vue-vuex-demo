/**
 * Created by zhuangmeili on 2017/6/15 0014.
 */

/*
由于使用单一状态树，应用中的所有状态都会集中到一个比较大的对象。当应用变得非常复杂时，
store对象就有可能变得非常臃肿

为了解决以上问题：
vuex允许我们将store分隔成模块（module）。每个模块拥有自己的
state  mutation  action  getter

* */

//state
const state = {
  mod1Name:'变量来自mod1.js',
  count:0
};

// getters
const getters = {

};

// actions
const actions = {

};

// mutations
const mutations = {
  INCREMENT(state,payload){
    //这里的state是模块的局部状态
    if(!!payload){
      state.count+=payload.amount;
    }else{
      state.count++;
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
