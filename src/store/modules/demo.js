/**
 * Created by Administrator on 2017/7/20 0020.
 */
/*
 由于使用单一状态树，应用中的所有状态都会集中到一个比较大的对象。当应用变得非常复杂时，
 store对象就有可能变得非常臃肿

 为了解决以上问题：
 vuex允许我们将store分隔成模块（module）。每个模块拥有自己的
 state  mutation  action  getter

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
// getters
const getters = {
  filterTodoCount:(state)=>{
    return state.todos.filter(item=> item.done);
  }
};

// mutations
const mutations = {
//方案一
  // INCREMENT(state){
  //   state.count++;
  // }
  //方案二 提交载荷
  INCREMENT(rootState,payload){
    //如果不传递值是undefined
    if(!!payload){
      rootState.count+=payload.amount;
    }else{
      rootState.count++;
    }

  }
};


// actions
const actions = {
  incrementAsyn({commit ,state}){
    console.log('异步操作');
    //方案一
    //commit('INCREMENT')

    //方案二
    setTimeout(()=>{
      console.log("延迟执行==================");
      commit('INCREMENT')
    },3000);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
