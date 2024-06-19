import { registerUser, signupUser } from '@/api/auth';
import { fetchPost } from '@/api/post';
import {
  getAuthFromCookie,
  getUserFromCookie,
  saveAuthToCookie,
  saveUserToCookie,
} from '@/utils/cookies';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getAuthFromCookie || '',
    username: getUserFromCookie || '',
  },
  getters: {
    isLogin: state => state.username,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUserName(state, username) {
      state.username = username;
    },
    clearUserName(state) {
      state.username = '';
    },
    clearToken: state => {
      return (state.token = '');
    },
  },
  actions: {
    async LOGIN({ commit }, userData) {
      const { data } = await registerUser(userData);
      commit('setToken', data.token);
      commit('setUserName', data.user.nickname);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.nickname);
      return data;
    },
    async SIGNUP(context, userData) {
      const { data } = await signupUser(userData);
      return data;
    },
    async POSTLIST() {
      const { data } = await fetchPost();
      return data;
    },
  },
  modules: {},
});
