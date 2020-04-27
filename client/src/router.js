import Vue from 'vue';
import Router from 'vue-router';
import Tags from './views/Tags.vue';
import New from './views/New.vue';
import Show from './views/Show.vue';
import Edit from './views/Edit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/tags'
    },
    {
      path: '/tags',
      name: 'tags',
      component: Tags
    },
    {
      path: '/tags/new',
      name: 'new-tag',
      component: New
    },
    {
      path: '/tags/:id',
      name: 'show',
      component: Show
    },
    {
      path: '/tags/:id/edit',
      name: 'edit',
      component: Edit
    }
   
  ]
});