import './bootstrap';

import { createApp } from 'vue';
import { routers } from './routers'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import App from './App.vue';

const app = createApp(App);
app.use(routers)
app.mount("#app");
