<template>
	<div>
		<div class="tab">
			<tab>
			  <tab-item selected>商品</tab-item>
			  <tab-item>详情</tab-item>
			  <tab-item>评论</tab-item>
			</tab>
		</div>
		<div class="swiper">
			<swiper :list="list" :show-dots="dots" :show-desc-mask="mask"></swiper>
		</div>
		<div class="goods-con">
			<div class="goods-title">
				<badge text="自营"></badge>
				<span>DJM型 单型胀套连接弹性膜片联轴器</span>
			</div>
			<div class="goods-price">
				<div class="price">
					<div class="price-red">$99.00</div>
					<div class="price-mask col-6 f-08">市场价格: <s>$199.00</s></div>
				</div>
				<div class="sell col-6 f-08">
					<span>销量0</span>
					<span>当前库存1000</span>
				</div>
			</div>
		</div>
		<div class="cell">
			<group>
				<popup-picker class="f-08" :title="title" :data="list3" :columns="3" v-model="value4" show-name :value-text-align="align"></popup-picker>
				<cell is-link>
					<span slot="title" class="col-6 f-08">已选 <span class="col-3">1</span></span>
				</cell>
				<cell is-link>
					<span slot="title" class="col-6 f-08">商品反馈</span>
				</cell>
			</group>
			
		</div>
		<div class="show-cate vux-1px-t">
			<div class="show">
				<div class="cate vux-1px-b">
					<div class="pro-img">
						<img  src="http://placehold.it/100x100" alt="">
					</div>
					<div class="con f-08">
						<div class="hd col-3">标题</div>
						<span class="price">$99.00</span>
						<span class="col-6">库存:1000</span>
					</div>
					<img class="close" src="./../../assets/close.png" alt="">
				</div>
				<div class="xnum">
					<div class="f-08 col-6">数量</div>
					<inline-x-number></inline-x-number>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {InlineXNumber,Tab, TabItem,Swiper,Badge, Cell,Group,PopupPicker} from 'vux'
	export default {
		components: {
			Tab,
			TabItem,
			Swiper,
			Badge,
			Cell,
			Group,
			PopupPicker,
			InlineXNumber 
		},
		data() {
			return {
				dots: false,
				mask: false,
				list: [{
					url: 'javascript:',
					img: 'http://placehold.it/100x100',
				},{
					url: 'javascript:',
					img: 'http://placehold.it/100x100',
				}],
				value4: [],
				align: 'left',
				title: '配送至:',
				list3: [{
					name: '中国',
					value: 'china',
					parent: 0
				  }, {
					name: '美国',
					value: 'USA',
					parent: 0
				  }, {
					name: '广东',
					value: 'china001',
					parent: 'china'
				  }, {
					name: '广西',
					value: 'china002',
					parent: 'china'
				  }, {
					name: '美国001',
					value: 'usa001',
					parent: 'USA'
				  }, {
					name: '美国002',
					value: 'usa002',
					parent: 'USA'
				  }, {
					name: '广州',
					value: 'gz',
					parent: 'china001'
				  }, {
					name: '深圳',
					value: 'sz',
					parent: 'china001'
				  }, {
					name: '广西001',
					value: 'gx001',
					parent: 'china002'
				  }, {
					name: '广西002',
					value: 'gx002',
					parent: 'china002'
				  }, {
					name: '美国001_001',
					value: '0003',
					parent: 'usa001'
				  }, {
					name: '美国001_002',
					value: '0004',
					parent: 'usa001'
				  }, {
					name: '美国002_001',
					value: '0005',
					parent: 'usa002'
				  }, {
					name: '美国002_002',
					value: '0006',
					parent: 'usa002'
				  }],
			}
		}
	}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.goods-con {
	padding: .5rem;
	background: #FFFFFF;
	margin-bottom: .5rem;
	.goods-title {
		line-height: 2rem;
	}
	.goods-price {
		.price {
			.price-red {color:#FF1800;font-weight: 500;font-size: 1.2rem;}
		}
		.sell {display: flex;align-items: center;justify-content: space-between;}
	}
}
.show-cate {
	background: #FFFFFF;
	position: fixed;
	width:100%;
	bottom: 0;
	z-index: 11;
	height:15rem;
	.show {
		position: relative;
		.pro-img {
			position: absolute;
			top: -1rem;
			left: 2rem;
			border: 1px solid #C7C7C7;
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
			box-sizing: border-box;
			img {
				border-top-left-radius: 5px;
				border-top-right-radius: 5px;
				width:5rem;
				height: 5rem;
				display: block;
				
			}
		}
		.con{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 9rem;
			padding-top: .25rem;
			padding-right: .25rem;
			padding-right: 3rem;
			box-sizing: border-box;
			min-height: 4rem;
			.price {
				color: #FF1800;
			}
			.hd {
				overflow: hidden;
				
			}
		}
		.close {
			width:1.5rem;
			height: 1.5rem;
			position: absolute;
			top: .25rem;
			right: .5rem;
		}
		.xnum {
			padding: .5rem;
		}
	}
}
</style>