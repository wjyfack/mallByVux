import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//
axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)
export default new Vuex.Store({
	state: {
		userInfo: {info: ''}, // 用户信息
		swiper_list: [],
		product_list: [],
		new_list: [],
		newDetail: {}
	},
	getters: {
		
	},
	mutations: {
		geSwiper(state, statu) {
			state.swiper_list = statu
		},
		geProduct(state, statu) {
			state.product_list = statu
		},
		geNew(state, statu) {
			state.new_list = statu
		},
		geNewsDetail(state, statu) {
			state.newDetail = statu
		},
		setUserInfo(state,statu){
			state.userInfo = statu
		}
	},
	actions: {
		getIndexData({commit}){
			return new Promise((resolve, reject) => {
				axios.get('index').then(res =>{
					commit('geSwiper',res.data.swiper_list)
					commit('geProduct', res.data.product_list)
					commit('geNew',res.data.new_list)
				}).catch(res => {
					console.log(res)
				})
				resolve()
			})
		},
		getNewsDetail({commit}, param) {
			return new Promise((resolve, reject) => {
				axios.get('/new',{
					params: {
						id: param.id
					}
				}).then(res => {
					commit('geNewDetail', res.data.news)
				})
				resolve()
			})
		}
	}
})