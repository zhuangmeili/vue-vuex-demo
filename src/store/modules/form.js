/**
 * Created by Administrator on 2017/7/20 0020.
 */
//state
const state={
  formObj:{
    title:'',
    detail:''
  }
};
//getters
const getters = {

};

// mutations
const mutations = {
  updateFormObj(state,payload){
    state.formObj.title=payload.title;
    state.formObj.detail=payload.detail;
  }
};


// actions
const actions = {

};

export default {
  state,
  getters,
  actions,
  mutations
}
