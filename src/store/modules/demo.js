/**
 * Created by Administrator on 2017/7/20 0020.
 */
/*
 由于使用单一状态树，应用中的所有状态都会集中到一个比较大的对象。当应用变得非常复杂时，
 store对象就有可能变得非常臃肿

 为了解决以上问题：
 vuex允许我们将store分隔成模块（module）。每个模块拥有自己的
 state  mutation  action  getter


模块中的 mutation 和getter，接收的第一个参数是模块的局部状态对象 state
根节点的状态 rootState
 * */
//在store中初始化所有的状态
const state={
  demoName:'变量来自demo.js',
  count:10,
  todos:[
    { id: 1, text: '测试 1 true', done: true },
    { id: 2, text: '测试 2 false', done: false },
    { id: 3, text: '测试 3 true', done: true },
    { id: 4, text: '测试 4 false', done: false },
    { id: 5, text: '测试 5 true', done: true },
    { id: 6, text: '测试 6 false', done: false }
  ]
};
// getters（有时候我们需要从state中派生出一些状态
// 注意：根节点的状态 作为第三个参数暴露出来；（必须为第三个参数）
const getters = {
  filterTodoCount:(state,getters,rootState)=>{
    console.log(" 模块 count="+state.count+"，rootState count="+rootState.count); //index中的 count
    return state.todos.filter(item=> item.done);
  }
};

// mutations（更改 state状态的唯一方法是提交mutation/只能执行同步操作）
const mutations = {
//方案一
  // INCREMENT(state){
  //   state.count++;
  // }
  //方案二 提交载荷
  INCREMENT(state,payload){
    //如果不传递值是undefined
    if(!!payload){
      state.count+=payload.amount;
    }else{
      state.count++;
    }

  },

  //减少
  DECREMENT(state,payload){
    if(!!payload){
      state.count-=payload.amount;
    }else{
      state.count--;
    }
  }
};


// actions(提交的是mutaion，可以包含任意的异步操作)
const actions = {
  incrementAsyn({state,commit,rootState}){
    console.log('异步操作,count='+ state.count +", rootState count="+rootState.count);
    //方案一
    //commit('INCREMENT')

    //方案二
    setTimeout(()=>{
      commit('INCREMENT');
      console.log("延迟执行===== count="+state.count);
    },3000);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
