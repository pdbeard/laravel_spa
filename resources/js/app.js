
require('./bootstrap');

// window.Vue = require('vue');


import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersIndex from './views/UsersIndex';

Vue.use(VueRouter)

import App from './views/App'
import Hello from './views/Hello'
import Home from './views/Home'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/users',
            name: 'users.index',
            component: UsersIndex,
        },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});




