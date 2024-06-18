<template>
  <div class="app">
    <app-hearder></app-hearder>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHearder from './components/common/AppHearder.vue';
export default {
  components: { AppHearder },
};
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
