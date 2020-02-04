import login from './components/login.vue'
import menu from './components/menu.vue'
import overflow from './components/selections/overflow.vue'
import rooms from './components/selections/rooms.vue'
import fill from './components/fillPercentage.vue'
import metrics from './components/metrics.vue'
import attendee from './components/attendee.vue'
import statistiques from './components/statistiques.vue'

export const routes = [{
    path: '/',
    component: login,
    children: [],
}, {
    path: '/menu',
    component: menu,
    children: [],
}, {
    path: '/rooms',
    component: rooms,
    children: [],
}, {
    path: '/overflow',
    component: overflow,
    children: [],
}, {
    path: '/fill/:slotid',
    component: fill,
    children: [],
}, {
    path: '/metrics',
    component: metrics,
    children: [],
}, {
    path: '/attendee',
    component: attendee,
    children: [],
}, {
    path: '/statisques',
    component: statistiques,
    children: [],
}];