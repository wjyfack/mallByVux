import Vue from 'vue'
import Router from 'vue-router'

// 加载页面
import index from '@/pages/index/index'
import demand from '@/pages/demand/index'
import article from '@/pages/article/index'
import ArtDetail from '@/pages/article/detail'
import Login from '@/pages/user/login'
import Register from '@/pages/user/register'
import Forget from '@/pages/user/forget'
import Home from '@/pages/user/home'
import Order from '@/pages/user/order'
import UserIndex from '@/pages/user/index'
import My from '@/pages/user/my'
import Category from '@/pages/category/sort'
import Search from '@/pages/search/index'
import Cate from '@/pages/cate/index'
import Goods from '@/pages/product/goods'

Vue.use(Router)

export default new Router({
  routes: [
	  {
		  path: '/',
		  name: 'index',
		  component: index
	  },
    {
      path: '/demand',
      name: 'demand',
      component: demand
    },
		{
			path: '/article',
			component: article,
			children: []
		},
		{
			path: '/article/detail',
			name: 'ArtDetail',
			component: ArtDetail
		},{
			path: '/category',
			name: 'category',
			component: Category
		},{
			path: '/search',
			name: 'search',
			component: Search
		},{
			path: '/cate',
			name: 'cate',
			component: Cate
		},{
			path: '/goods',
			name: 'goods',
			component: Goods
		},
		{
			path: '/user',
			name: 'user',
			component: UserIndex,
			children : [{
				path: 'order',
				name: 'order',
				component: Order
			},{
				path: 'forget',
				name: 'forget',
				component: Forget
			},{
				path: 'home',
				name: 'home',
				component: Home
			},{
				path: 'register',
				name: 'register',
				component: Register
			},{
				path: 'my',
				name: 'my',
				component: My
			},{
				path: 'login',
				name: 'login',
				component: Login
			}]
		},
  ]
})
