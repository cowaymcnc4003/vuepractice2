import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/users/LoginPage.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/users/SignupPage.vue'),
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/views/main/MainPage.vue'),
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/views/posts/PostCreatePage.vue'),
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('@/views/posts/PostEditPage.vue'),
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('@/components/common/NotFoundPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
