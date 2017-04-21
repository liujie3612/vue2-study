// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import Vuex from 'vuex'

Vue.use(Router)
Vue.use(Vuex)


let store = new Vuex.Store({
    state: {
        totalPrice: 10
    },
    getters: {
        getTotal(state) {
           return state.totalPrice
        }
    },
    //同步操作 依次向下进行操作
    mutations: {
        increment(state,price) {
            state.totalPrice += price
        },
        decrement(state,price) {
            state.totalPrice -= price
        }
    },
    //异步操作 例如 ajax操作
    actions: {
        increase (context, price) {
            context.commit('increment', price)
        }
    }
})

// Vue.config.productionTip = false

// let router = new Router({
//     // 不需要在url里加#号来实现hash
//     mode: 'history',
//     routes: [
//         {
//             path: '/apple',
//             component: Apple,
//             children: [
//                 {
//                     path: 'red',
//                     component: redApple
//                 }
//             ]
//         },
//         {
//             path: '/banana',
//             component: Bababa
//         },
//     ]
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  store,
  template: '<App/>',
  components: { App }
})
