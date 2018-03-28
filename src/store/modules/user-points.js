/**
 * @auther zhuang
 * */

import * as types from '../mutation-types';

const state = {
  modleName:'变量来自user-points.js',
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
