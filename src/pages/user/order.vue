<template>
	<!--<div>
	   <tab bar-active-color="#0E6EB8" active-color="#0E6EB8" :line-width="1">
		  <tab-item selected @on-item-click="headler">全部订单()</tab-item>
		  <tab-item @on-item-click="headler">待付款()</tab-item>
		  <tab-item @on-item-click="headler">待收货()</tab-item>
		</tab>
	</div>-->
	<div>
       <tab :line-width="1" bar-active-color="#0E6EB8" active-color="#0E6EB8" v-model="index">
			<tab-item class="vux-center" :selected="tabT === item" v-for="(item, index) in tabList" @click="tabT = item" :key="index">{{item}}</tab-item>
		</tab>
		<swiper v-model="index" :show-dots="false" aspect-ratio>
			<swiper-item v-for="(item, index) in tabList" :key="index">
			  <div class="tab-swiper vux-center">{{item}} Container</div>
			  <no-order></no-order>
			</swiper-item>
	    </swiper>
    </div>
</template>

<script>
	import NoOrder from '@/components/noOrder'
	import { Tab, TabItem, Swiper, SwiperItem } from 'vux'
	export default {
		components: {
			Tab,
			TabItem,
			Swiper,
			SwiperItem,
			NoOrder
		},
		data() {
			return {
				tabT: '全部订单',
				tabList: ['全部订单','待付款','待收货'],
				index: 0,
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>

</style>