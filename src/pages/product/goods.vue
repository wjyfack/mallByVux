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
				<cell is-link  @click.native="openTap()">
					<span slot="title" class="col-6 f-08">已选 <span class="col-3">{{num}}</span></span>
				</cell>
				<cell is-link>
					<span slot="title" class="col-6 f-08">商品反馈</span>
				</cell>
			</group>
			
		</div>
		<div class="content">
			<div class="content-hd">商品详情</div>
			<div class="cont">
				sjisjijsi
			</div>
		</div>
		<div class="show-cate vux-1px-t" :class="{'show': status}">
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
					<img @click="colseTap" class="close" src="./../../assets/close.png" alt="">
				</div>
				<div class="xnum">
					<div class="f-08 col-6">数量</div>
					<inline-x-number v-model="num"></inline-x-number>
				</div>
				
			</div>
			<div class="btn-g">	
				<div class="btn-g-l ot-col ">立即购买</div>
				<div class="btn-g-l">确定</div>
			</div>
		</div>
		<div class="bot-bar">
			<div class="flex-left">
				<img src="./../../assets/user/collection.png" alt="">
				收藏
			</div>
			<div class="flex-right">
				<div class="flex-btn btn-col">加入购物车</div>
				<div class="flex-btn">立即购买</div>
			</div>
		</div>
		<div class="all-tap" :class="{'show': status}"></div>
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
				status: false,
				dots: false,
				mask: false,
				num: 1,
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
		},
		methods: {
			colseTap() {
				this.status = false
			},
			openTap() {
				console.log('sss')
				this.status = true
			}
		}
	}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@col-btn: #EC5151;
@col-btn-ot: #ff9600;
.content {
	background: #FFFFFF;
	margin-top: .5rem;
	padding: .5rem;
	.cont {
		font-size: .9rem;
		color: #333;
	}
}
.all-tap {
	width:100%;
	height: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
	z-index: 22;
	background: rgba(0,0,0,.6);
	display: none;
}
.show {display: block !important;}
.bot-bar {
	width: 100%;
	position:fixed;
	bottom: 0;
	display: flex;
	.flex-left {
		display: flex;
		flex-direction: column;
    align-items: center;
		font-size: .8rem;
		color: #666666;
		padding: 0 .5rem;
		img { width: 1.5rem;height: 1.5rem;}
	}
	.flex-right {
		flex:1;
		display: flex;
		justify-content: center;
		align-items: center;
		.flex-btn {
			width: 50%;
			text-align: center;
			color:#FFFFFF;
			background: @col-btn;
			padding: .5rem 0;
			&.btn-col {
				background: @col-btn-ot;
			}
		}
		
	}
}
.btn-g {
	width: 100%;
	position: absolute;
	bottom: 0;
	.btn-g-l {
		float: left;
		width: 50%;
		text-align: center;
		padding: .5rem;
		box-sizing: border-box;
		background: @col-btn;
		color:#FFFFFF;
	 &.ot-col {background: @col-btn-ot;}
	}
}

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
	display: none;
	z-index: 33;
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