import './assets/main.css';

import {createApp} from 'vue';
import App from './App.vue';
import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Movies from '@/pages/Movies.vue';
import View from '@/pages/View.vue';

const app = createApp(App);

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/movies', component: Movies},
  {path: '/view/:id', component: View},
];

const router = createRouter(
  {
    history: createWebHistory(),
    routes,
  },
);

app.use(router);

app.mount('#app');