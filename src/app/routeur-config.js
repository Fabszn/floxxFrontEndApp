import login from './components/login.vue'
import choose from './components/typeConfChoose.vue'
import overflow from './components/selections/overflow.vue'
import rooms from './components/selections/rooms.vue'

export const routes = [{
    path: '/',
    component: login,
    children: [],
}, {
    path: '/selectTypeConf',
    component: choose,
    children: [],
}, {
    path: '/rooms',
    component: rooms,
    children: [],
}, {
    path: '/overflow',
    component: overflow,
    children: [],
}];