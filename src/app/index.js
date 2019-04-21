import Vue from 'vue';
import VueResource from 'vue-resource';
import menu from './components/menu.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config();


Vue.use(VueResource);

console.log("hello from bundle.js")
console.log(process.env.SERVER_URL)

export default {
    components: { menu }
}


new Vue({
    render: h => h(menu),
}).$mount('#menu')

var app1 = new Vue({
    el: '#app1',
    data: {
        message: 'Hello from app1'
    },
    methods: {
        lookDetails: function(id) {
            var x = this.$http.get(process.env.SERVER_URL + '/hello').then((p) => {
                console.log(p.data)
                app1.message = p.data.mes
            })
        }
    }
})
var app2 = new Vue({
    el: '#app2',
    data: {
        message: 'Hello from app2 '
    }
})