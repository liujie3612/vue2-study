import Vue from 'vue'

// 构建数据中心
const state = {
	orderList:[],
	params:{}
}

const getters = {
	getOrderList: state => state.orderList
}

const actions = {
	fetchOrderList ({ commit,state }) {
		Vue.http.post('/api/getOrderList',state.params) 
		.then((res) => {
			commit('updateOrderList',res.data.list)
		},(err) => {

		})
	}
}

const mutations= {
	updateOrderList ( state,payload ) {
		state.orderList = payload
	},
	updateParams( state,{key,val} ) {
		//解构赋值
		state.params[key] = val
		console.log(state.params)
	}
}

export default {
	state,
	getters,
	actions,
	mutations
}