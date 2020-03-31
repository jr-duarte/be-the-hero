import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Logon from '../views/Logon.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Logon',
    component: Logon
  }
];

const router = new VueRouter({
  routes
});

export default router;
