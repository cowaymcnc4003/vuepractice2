<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form class="form" @submit.prevent="signupSubmit">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="text" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button
          type="submit"
          class="btn"
          :disabled="!validateCheckEmail || !password || !nickname"
        >
          회원 가입
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation';

export default {
  data() {
    return {
      username: '',
      password: '',
      nickname: '',
      logMessage: '',
    };
  },
  methods: {
    async signupSubmit() {
      const userData = {
        username: this.username,
        password: this.password,
        nickname: this.nickname,
      };
      try {
        const res = await this.$store.dispatch('SIGNUP', userData);
        this.logMessage = `환영합니다 ${res.nickname}`;
      } catch (error) {
        console.log(error);
      } finally {
        this.initFrom();
      }
    },
    initFrom() {
      this.username = '';
      this.password = '';
      this.nickname = '';
    },
  },
  computed: {
    validateCheckEmail() {
      return validateEmail(this.username);
    },
  },
};
</script>

<style scoped>
.color-red {
  color: red;
}
</style>
