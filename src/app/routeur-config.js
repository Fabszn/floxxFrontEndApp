import login from './components/login.vue'
import choose from './components/typeConfChoose.vue'
import hol from './components/selections/hol.vue'
import overflow from './components/selections/overflow.vue'
import confs from './components/selections/confs.vue'

const Foo = { template: '<div>logged ! </div>' }


export const routes = [{
    path: '/',
    component: login,
    children: [],
}, {
    path: '/selectTypeConf',
    component: choose,
    children: [],
}, {
    path: '/confs',
    component: confs,
    children: [],
}, {
    path: '/hol',
    component: hol,
    children: [],
}, {
    path: '/overflow',
    component: overflow,
    children: [],
}];