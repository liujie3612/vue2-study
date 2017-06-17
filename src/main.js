// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import Layout from './components/layout'
import index from './pages/index'
import detail from './pages/detail'
import orderListPage from './pages/orderList'

import detailAnalysis from './pages/details/analysis'
import detailCount from './pages/details/count'
import detailForecast from './pages/details/forecast'
import detailPublish from './pages/details/publish'


import Resource from 'vue-resource'
import store from './store'
Vue.use(Router);
Vue.use(Resource);

Vue.config.productionTip = false;

let router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: index
    }, {
        path: '/detail',
        component: detail,
        redirect: '/detail/analysis',
        children: [{
                path: 'forecast',
                component: detailForecast
            }, {
                path: 'analysis',
                component: detailAnalysis
            }, {
                path: 'count',
                component: detailCount
            }, {
                path: 'publish',
                component: detailPublish
            },

        ]
    }, {
        path: '/orderList',
        component: orderListPage
    }]

});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<Layout/>',
    components: { Layout }
});
