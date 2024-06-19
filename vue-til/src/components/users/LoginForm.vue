<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form class="form" @submit.prevent="registerSubmit">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <p v-if="!validateCheckEmail" class="validation-text">
            <span class="warning"> Please enter an email address </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="text" v-model="password" />
        </div>
        <button type="submit" class="btn">로그인</button>
      </form>
      <p class="log"></p>
    </div>
  </div>
</template>

<script>
import { validateEmail } from '@/utils/validation.js';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  computed: {
    validateCheckEmail() {
      return validateEmail(this.username);
    },
  },
  methods: {
    async registerSubmit() {
      const userData = {
        username: this.username,
        password: this.password,
      };
      try {
        const res = await this.$store.dispatch('LOGIN', userData);
        this.$router.push('/main');
        console.log(res);
      } catch (error) {
        console.log(error);
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.username = '';
      this.password = '';
    },
  },
};
</script>

<style>
.btn {
  color: white;
}
</style>
