/* eslint-disable no-underscore-dangle */
import api from '@/api';

const _state = {
  userInfo: [],
  userFeed: [],
};

export default {
  namespaced: true,

  state: () => _state,

  getters: {},

  mutations: {
    SET_USER_FEED(state, userFeed) {
      state.userFeed = userFeed;
    },

    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
    },
  },

  actions: {
    setUserFeed({ commit }, userFeed) {
      commit('SET_USER_FEED', userFeed);
    },

    setUserInfo({ commit }, userInfo) {
      commit('SET_USER_INFO', userInfo);
    },

    async getUserFeed({ dispatch }, userName) {
      let data = [];

      // I have only 100 free requests, localStorage can solve this problem

      if (localStorage.getItem(`userFeed_${userName}`)) {
        data = JSON.parse(localStorage.getItem(`userFeed_${userName}`));
      } else {
        const response = await api.user.getFeed(userName);
        data = response.data;

        localStorage.setItem(`userFeed_${userName}`, JSON.stringify(data));
      }
      console.log('user feed', data);
      dispatch('setUserFeed', data);
    },

    async getUserInfo({ dispatch }, userName) {
      let data = [];

      // I have only 100 free requests, localStorage can solve this problem

      if (localStorage.getItem(`userInfo_${userName}`)) {
        data = JSON.parse(localStorage.getItem(`userInfo_${userName}`));
      } else {
        const response = await api.user.getInfo(userName);
        data = response.data;

        localStorage.setItem(`userInfo_${userName}`, JSON.stringify(data));
      }
      console.log('user info', data);
      dispatch('setUserInfo', data);
    },
  },

};
