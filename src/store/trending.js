/* eslint-disable no-underscore-dangle */
import api from '@/api';
import returnAndSaveInLocalStor from '@/helper/returnAndSaveInLocalStor';

const _state = {
  trendingFeed: [],
};

export default {
  namespaced: true,

  state: () => _state,

  getters: {},

  mutations: {
    SET_TRENDING_FEED(state, trendingFeed) {
      state.trendingFeed = trendingFeed;
    },
  },

  actions: {
    setTrendingFeed({ commit }, trendingFeed) {
      commit('SET_TRENDING_FEED', trendingFeed);
    },

    async getTrendingFeed({ dispatch }) {
      let data = [];
      // I have only 100 free requests, returnAndSaveInLocalStor can help with this problem
      data = await returnAndSaveInLocalStor('trendingFeed', api.trending.get);

      dispatch('setTrendingFeed', data);
    },
  },
};
