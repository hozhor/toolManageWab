import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userInfo: window.sessionStorage.getItem('ytf-userInfo'),
  token: window.sessionStorage.getItem('ytf-token'),
  loginPop:false
};

const mutations = {
  // 状态变更
  SET_TOKEN: (state, data) => {
    state.token = data;
    window.sessionStorage.setItem('ytf-toke', data);
  },
  SET_USER_INFO: (state, data) => {
    state.userInfo = data;
    window.sessionStorage.setItem('ytf-userInfo', data);
  },
  SET_LoginPop: (state, data) => {
    state.loginPop = data;
  }
};
  
const getters = {
  GET_USER_INFO: state => {
    return state.userInfo
  },
  GET_LoginPop: state => {
    return state.loginPop
  }
}

const actions = {

};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
