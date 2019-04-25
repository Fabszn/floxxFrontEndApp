import login from './components/login.vue'

const Foo = { template: '<div>logged ! </div>' }


export const routes = [{
    path: '/',
    component: login,
    children: [],
}, {
    path: '/test',
    component: Foo,
    children: [],
}];