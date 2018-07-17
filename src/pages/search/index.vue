<template>
	<div>
		<search >
			<x-icon @click="back" slot="left" type="ios-arrow-left" size="24" class="full"></x-icon>
		</search>
		<div class="sea-con">
			<div class="hot-sr">
				<div class="hd col-6">热门搜索</div>
				<span class="hot-item" v-for="i in 5">传动系统</span>
			</div>
			<div class="rent-sr">
				<div class="hd col-6"><span>最近搜索</span> <img src="./../../assets/delete.png" alt=""></div>
				<span class="rent-item" v-for="i in 5">传动系统</span>	
				<div class="no-more col-6 f-08">暂无搜索记录</div>
			</div>
		</div>
		
		<divider class="divider"><span class="col-6 f-08" @click="back">点击关闭搜索</span></divider>
	</div>
</template>

<script>
	import {Divider, Search} from 'vux'
	export default {
		components: {
			Divider,
			Search
		},
		methods: {
			back(){
				this.$router.back(-1);
			},
		}
	}
</script>

<style scoped>
.no-more {text-align: center;}
.sea-con {position: absolute;top:3rem;}
.hot-sr {padding: .5rem;min-height: 8rem;} 
.hot-sr .hot-item,.rent-sr .rent-item {display:inline-block;padding: .5rem;color: #1b242c;font-size: .8rem;background: #FFFFFF;margin-top: .5rem;border-radius: 5px;margin-right: .5rem;}
.rent-sr{padding:.5rem;}
.rent-sr .hd{display: flex;justify-content: space-between;align-items: center;}
.rent-sr .hd img {width: 1.5rem;}
.full {fill: #636363;}
.divider {position: fixed;bottom:.5rem;}
</style>