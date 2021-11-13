/* eslint-disable no-underscore-dangle */
import api from '@/api';

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

      // I have only 100 free requests, localStorage can solve this problem

      if (localStorage.getItem('trendingFeed')) {
        data = JSON.parse(localStorage.getItem('trendingFeed'));
      } else {
        const response = await api.trending.get();
        data = response.data;

        localStorage.setItem('trendingFeed', JSON.stringify(data));
      }
      console.log('main tranding', data);
      dispatch('setTrendingFeed', data);
    },
  },
};
