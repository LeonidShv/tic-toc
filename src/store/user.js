/* eslint-disable no-underscore-dangle */
import api from '@/api';
import staticUserFeed from '@/assets/userFeed.json';
import returnAndSaveInLocalStor from '@/helper/returnAndSaveInLocalStor';

const _state = {
  userInfo: {},
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
      // I have only 100 free requests, returnAndSaveInLocalStor can help with this problem
      data = await returnAndSaveInLocalStor(`userFeed_${userName}`, api.user.getFeed, userName);

      dispatch('setUserFeed', data);
    },

    getStaticUserFeed({ dispatch }) {
      dispatch('setUserFeed', staticUserFeed.itemList);
    },

    async getUserInfo({ dispatch }, userName) {
      let data = [];
      // I have only 100 free requests, returnAndSaveInLocalStor can help with this problem
      data = await returnAndSaveInLocalStor(`userInfo_${userName}`, api.user.getInfo, userName);

      dispatch('setUserInfo', data);
    },
  },

};
