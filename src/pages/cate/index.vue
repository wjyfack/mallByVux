<template>
	<div>
		<div class="cate-group">
			<div class="cate-hd">
				<check-icon type="plain" >
					<img class="cate-img" src="./../../assets/store.png" alt="">
					<span>店铺名称</span>
				</check-icon>
			</div>
			<div class="cate-item vux-1px-b">
				<check-icon class="cate-icon">
					<div class="cate-con">
						<img class="cate-con-img" src="http://placehold.it/100x100" alt="">
						<div class="cate-title">
							<span class="hd">标题</span>
							<span class="price">$222.00</span>
							<inline-x-number :min="0" width="2rem" ></inline-x-number>
						</div>
					</div>
					<img class="del" src="./../../assets/delete.png" alt="">
				</check-icon>
			</div>
			<div class="cate-item">
				<check-icon class="cate-icon">
					<div class="cate-con">
						<img class="cate-con-img" src="http://placehold.it/100x100" alt="">
						<div class="cate-title">
							<span class="hd">标题</span>
							<span class="price">$222.00</span>
							<inline-x-number :min="0" width="2rem" ></inline-x-number>
						</div>
					</div>
					<img class="del" src="./../../assets/delete.png" alt="">
				</check-icon>
			</div>
		</div>
		<div class="recom">
			<div class="recom-hd col-3">推荐商品</div>
			<div class="recom-group">
				<div class="recom-item">
					<img class="recom-img" src="http://placehold.it/100x100" alt="">
					<div class="recom-con">
						<div class="hd col-3">DJM型 单型胀套连接弹性膜片联轴器</div>
						<div class="price">$99.00</div>
					</div>
				</div>
				<div class="recom-item">
					<img class="recom-img" src="http://placehold.it/100x100" alt="">
					<div class="recom-con">
						<div class="hd col-3">DJM型 单型胀套连接弹性膜片联轴器</div>
						<div class="price">$99.00</div>
					</div>
				</div>
				<div class="recom-item">
					<img class="recom-img" src="http://placehold.it/100x100" alt="">
					<div class="recom-con">
						<div class="hd col-3">DJM型 单型胀套连接弹性膜片联轴器</div>
						<div class="price">$99.00</div>
					</div>
				</div>
			</div>
		</div>
		<footer-nav></footer-nav>
	</div>
</template>

<script>
	import { CheckIcon,InlineXNumber } from 'vux'
	import footerNav from '@/components/footerNav'
	export default {
		components: {
			InlineXNumber,
			CheckIcon,
			footerNav
		},
		data() {
			return {
				check : true,
			}
		}
	}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
.cate-group {
	.cate-hd {padding:.5rem;background-color:#FFFFFF;}
	.cate-img {width:1.25rem;height: 1.25rem;vertical-align: middle;margin-top:-2px;}
	.cate-item {
		position: relative;
		padding:.5rem;
		
		.cate-icon {
			display: flex;
			align-items: center;
			width:100%;
			.cate-con {
				display: flex;
				justify-content: space-between;
				.cate-con-img {width:6rem;}
				.cate-title {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					padding: .5rem;
					.hd {overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;}
					.price {color:#EC5151;font-size: .8rem;}
				}
				
			}
			.del {width: 1.5rem;height: 1.5rem;position:absolute;right: .5rem;bottom:0;}
		}
		
	}
}
.recom {
	background: #FFFFFF;
	margin-bottom: 4rem;
	.recom-hd {padding:.5rem;text-align: center;}
	.recom-group {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		width:100%;
		background: #F4F4F9;
		.recom-item {
			width:49%;
			box-sizing: border-box;
			padding:.5rem;
			background: #FFFFFF;
			margin-top: .5rem;
			.recom-img {
				width:100%;
			}
			.hd {padding:.25rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}
			.price {font-size: .8rem;color:#FF1800;}
		}
	}
}
</style>