<template>
	<div id="category" ref="cate">

		<div class="search-t">
			<router-link to="/search">
			<div class="search">
				<x-icon class="fill-c" type="ios-search" size="20"></x-icon>
				<div class="search" placeholder="商品/店铺搜索"></div>
			</div>
			</router-link>
		</div>
		
		<div class="cate">
			<scroller lock-x scrollbar-y class="sroller" height="30rem">
				<div class="cate-group">
					<div class="cate-item"  @click="index = i" :class="{'active': i == index}" v-for="i in 20" :key="i">
						sdjk{{i}}
					</div>	
				</div>
			</scroller>
			<div class="sroller-view">
				<div class="sro">
					<div class="sro-hd col-3">header</div>
					<div class="sro-group">
						<div class="sro-item" v-for="i in 9" :key="i">
							<img src="http://placehold.it/100x100" alt="">
							<div class="sro-name col-6">三相交流</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<fast-nav></fast-nav>
	</div>
</template>

<script>
	/* 分类... */ 
	import {Scroller} from 'vux'
	import FastNav from '@/components/fastNav'
	export default {
		components: {
			Scroller,
			FastNav
		},
		data(){
			return {
				index: 1
			}
		},
		created() {
			
			
			
		},
		mounted() {
			let cate = this.$refs.cate
			let height = window.innerHeight
			
			cate.style.background = "#FFF"
			cate.style.height = window.innerHeight+'px'
			
		},
		methods: {
			
		}
	}
</script>

<style scoped>
.sro {}
.sro .sro-hd {font-size: 1rem;padding-left: .5rem;}
.sro-group {padding:0 .5rem;}
.sro-group .sro-item {display: inline-block;width:32%;padding-bottom: .25rem;margin-right:1%;}
.sro-group .sro-item img{width:100%;}
.sro-group .sro-item .sro-name {font-size: .8rem;text-align: center;}
.cate {display: flex;width: 100%;overflow: hidden;}
.sroller {width:25%;}
.cate-group {border-right: 1px solid #F4F4F9;background: #fbf9fe;}
.cate-item {padding: .5rem;text-align: center;border-bottom: 1px solid #F4F4F9;border-left: 2px solid #fbf9fe;}
.cate-item.active {background-color:#fbf9fe;border-left: 2px solid #0E6EB8;background: #FFFFFF;border-right:1px solid #FFFFFF;margin-right: -1px;}
.sroller-view {width:80%;background: #FFFFFF;overflow: hidden;overflow-y: scroll;height: 30rem;}
.search-t {padding: .5rem;}
.search {background: #FFFFFF;border-radius: 5px;display: flex;padding: .25rem .5rem;align-items: center;}
.search:before{
	content: attr(placeholder);   
	color:#666;
	font-size: .8rem;
}
.fill-c {fill: #666666;}
</style>