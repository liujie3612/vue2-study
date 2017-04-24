// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import Layout from './components/layout'
import index from './pages/index'
import Resource from 'vue-resource'

Vue.use(Router)
Vue.use(Resource)

Vue.config.productionTip = false

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: index
        }
    ]

})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router, 
    template: '<Layout/>',
    components: { Layout }
})
