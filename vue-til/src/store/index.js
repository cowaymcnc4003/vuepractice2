import { registerUser, signupUser } from '@/api/auth';
import {
  fetchPosts,
  fetchPostCreate,
  fetchPost,
  fetchPostEdit,
} from '@/api/post';
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
    token: getAuthFromCookie() || '',
    username: getUserFromCookie() || '',
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
    async POSTLISTS() {
      const { data } = await fetchPosts();
      return data;
    },
    async POSTCREATE(context, postData) {
      const { data } = await fetchPostCreate(postData);
      return data;
    },
    async POSTLIST(context, id) {
      const { data } = await fetchPost(id);
      return data;
    },
    async POSTEDIT(context, postData) {
      const { data } = await fetchPostEdit(postData);
      return data;
    },
  },
  modules: {},
});
