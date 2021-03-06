import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routes from '@/routes'
import msToMm from '@/filters/ms-to-mm'
import blur from '@/directives/blur'
import EventBus from '@/plugins/event-bus'

Vue.use(VueRouter)
Vue.use(msToMm)
Vue.use(blur)
Vue.use(EventBus)

const router = new VueRouter({
    routes,
    mode: 'history'
})

new Vue({
    el: '#app',
    render: h => h(App),
    router
})
