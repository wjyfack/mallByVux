import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

//
axios.defaults.baseURL = 'http://localhost:3000'
var data = {
	"index": {
		"swiper_list": [{
			"url": "javascript:",
			"img": "http://placehold.it/100x100",
			"title": "送你一朵fua"
		}, {
			"url": "javascript:",
			"img": "http://placehold.it/100x100",
			"title": "送你一次旅行",
			"fallbackImg": "http://placehold.it/100x100"
		}, {
			"url": "javascript:",
			"img": "http://placehold.it/100x100",
			"title": "送你一次旅行",
			"fallbackImg": "http://placehold.it/100x100"
		}],
		"product_list": [{
			"id": 1,
			"pic": "http://placehold.it/100x100",
			"goods_name": "商品名称",
			"current_price": 99.00
		},{
			"id": 1,
			"pic": "http://placehold.it/100x100",
			"goods_name": "商品名称",
			"current_price": 99.00
		},{
			"id": 1,
			"pic": "http://placehold.it/100x100",
			"goods_name": "商品名称",
			"current_price": 99.00
		}],
		"new_list": [{
			"id": 2,
			"amity_time": "2018.07.22",
			"author": "吴xx",
			"content": "content//content//内容",
			"title": "标题",
			"read": 999,
			"sort": "分类",
			"pic": "http://placehold.it/100x100"
			
		}]
	},
	"news": [{
		"id": 1,
		"amity_time": "2018.07.22",
		"author": "吴xx",
		"content": "content//content//内容",
		"title": "标题",
		"read": 999,
		"sort": "分类",
		"pic": "http://placehold.it/100x100"
	}]
}
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
				//axios.get('./../api/db.json').then(res =>{
					console.log()
					commit('geSwiper',data.index.swiper_list)
					commit('geProduct', data.index.product_list)
					commit('geNew',data.index.new_list)
// 				}).catch(res => {
// 					console.log(res)
// 				})
				resolve()
			})
		},
		getNewsDetail({commit}, param) {
			return new Promise((resolve, reject) => {
// 				axios.get('/new',{
// 					params: {
// 						id: param.id
// 					}
// 				}).then(res => {
					commit('geNewDetail', data.news)
				// })
				resolve()
			})
		}
	}
})