import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler.js';

import Home from './Home.vue';
import Login from './auth/Login.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

const app = createApp({});

app.component('home-component', Home);
app.component('login-component', Login);

app.mount("#app");
