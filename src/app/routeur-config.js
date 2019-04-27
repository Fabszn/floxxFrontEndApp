import login from './components/login.vue'
import choose from './components/typeConfChoose.vue'

const Foo = { template: '<div>logged ! </div>' }


export const routes = [{
    path: '/',
    component: login,
    children: [],
}, {
    path: '/selectTypeConf',
    component: choose,
    children: [],
}];