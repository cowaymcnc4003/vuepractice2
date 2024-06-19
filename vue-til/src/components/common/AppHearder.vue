<template>
  <header>
    <div>
      <div class="logo">
        TIL
        <router-link :to="isLogLink"
          >by <span>{{ this.$store.state.username }}</span></router-link
        >
      </div>
    </div>
    <div class="navigations">
      <!-- 1 -->
      <template v-if="isLogin">
        <a href="javascript:;" class="logout-button" @click="logoutUser">
          Logout
        </a>
      </template>
      <!-- 2 -->
      <template v-else>
        <router-link :to="`/login`">로그인</router-link>
        <router-link :to="`/signup`">회원가입</router-link>
      </template>
    </div>
  </header>
</template>

<script>
import { deleteCookie } from '@/utils/cookies';

export default {
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    isLogLink() {
      return this.$store.getters.isLogin ? '/main' : '/login';
    },
  },
  methods: {
    logoutUser() {
      deleteCookie('til_auth');
      deleteCookie('til_user');
      this.$store.commit('clearToken');
      this.$store.commit('clearUserName');
      this.$router.push('/login');
    },
  },
};
</script>

<style scoped>
.username {
  color: white;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #927dfc;
  z-index: 2;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.05);
}

a {
  color: #dedede;
  font-size: 18px;
}

a.logo {
  font-size: 30px;
  font-weight: 900;
  color: white;
}

.logo > span {
  font-size: 14px;
  font-weight: normal;
}

.navigations a {
  margin-left: 10px;
}

.fixed {
  position: fixed;
  top: 0;
  width: 100%;
}

.logout-button {
  font-size: 14px;
}

a.router-link-exact-active {
  color: white;
  font-weight: bold;
}
</style>
