import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login, // Eager Loading of view
    }, {
      path: '/dash-home',
      name: 'home',
      component: () => import('./views/Home'), // Lazy Loading of view
      children: [
        {
          path: '/d',
          name: 'D',
          component: () => import('./views/D'), // Lazy Loading of view
        }, {
          path: '/i',
          name: 'i',
          component: () => import('./views/I'), // Lazy Loading of view
        }, {
          path: '/s',
          name: 's',
          component: () => import('./views/S'), // Lazy Loading of view
        }, {
          path: '/help',
          name: 'help',
          component: () => import('./views/Help'), // Lazy Loading of view
        },
      ],
    }, {
      path: '/contact',
      name: 'contactus',
      component: () => import('./views/ContactUs'), // Lazy Loading of view
    },
  ],
});
