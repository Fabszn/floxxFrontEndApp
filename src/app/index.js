import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from './routeur-config.js';
import Dropdown from 'vue-simple-search-dropdown';



Vue.use(VueResource);
Vue.use(Router);
Vue.use(Dropdown);

Vue.component('dropdown', Dropdown)

console.log(BACKEND_URL)
console.log(process.env["NODE_ENV"])


const router = new Router({
    routes,
    mode: 'history',
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')