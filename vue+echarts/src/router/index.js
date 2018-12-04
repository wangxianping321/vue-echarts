import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource';
import home from '../components/home.vue';

Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path:'/',
      component:home
    }
  ]
})
