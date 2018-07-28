<template>
	<div class="mar-t-04">
	<div class="nav-header">
      <div class="nav-cont">
        <div class="nav-add">佛山<x-icon class="col-f1" type="ios-arrow-down" size="20"></x-icon></div>
        <div class="nav-input" @click="search"><icon type="search"></icon>输入要搜索的内容</div>
        <div class="nav-notice"></div>
      </div>
    </div>
    <!--轮播图-->
	<swiper :list="swiper_list" auto ></swiper>
    <div class="nav-list">
      <ul class="nav-list-ul">
        <li class="nav-list-item">
          <img src="http://placehold.it/100x100" alt="">
          <span>店铺街</span>
        </li>
      </ul>
    </div>
		
		<div class="box title inx-ms" >
        <div class="b-color-f p-r">
            <img class="img" src="./../../assets/images/guangao.png">
            <a href=""><div class="index-jt-more jinpin-bg"><span>更多</span><x-icon class="col-w" type="ios-arrow-right" size="20"></x-icon></div></a>   
        </div>
        <section class="product-list-medium product-list-mediums">
            <ul>
              <li v-for="best in product_list">
                <router-link :to="'/goods?id='+best.id" class="product-div">
                  <img class="product-list-img" :src="best.pic" />
                  <div class="product-text  index-product-text">
                      <div class="cont">{{best.goods_name}}</div>
                      <p><span class="p-price color-red"><span class="dole">￥</span>{{best.current_price}}</span></p>
                    </div>
                </router-link>
              </li>

            </ul>
        </section>
    </div>
		
    <div class="clearfix">
			<div class="artcle-hds">新闻列表</div>
      <ul class="article-group">
        <li class="article-list-other" v-for="item in new_list" @click="toArtl(1)">
            <div class="content">
              <div class="hd">{{item.title}}</div>
              <div class="read">阅读量： {{item.read}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.sort}}</div>
            </div>
            <div class="img-list">
              <img class="img-al" :src="item.pic">
            </div>
        </li>
      </ul>
    </div>
	 <Divider>你到世界的尽头了>_<</Divider>
	 <footer-nav></footer-nav>
	</div>	
</template>
<script>
import FooterNav from '@/components/footerNav'
import {Divider, Swiper, Icon} from 'vux'
export default {
	name: 'index',
	components: {Divider, Swiper, Icon, FooterNav},
	created() {
		// 获取index数据
		this.$store.dispatch('getIndexData')
			
	},
	computed: {
		swiper_list() {
			return this.$store.state.swiper_list
		},
		product_list() {
			return this.$store.state.product_list
		},
		new_list() {
				return this.$store.state.new_list
		}
		
	},
	data() {
		return {
			
		}
	},
	methods: {
		toArtl: function(id) {
			this.$router.push({path:'/article/detail',query:{id: id}})
		},
		search() {
			this.$router.push({path: '/search'})
		}
	}
}
</script>
<style scoped>
.dots-class {color: #0E6EB8;}
.clearfix{clear: both;}
.mar-t-04 {
    margin: 2.5rem 0 3.5rem 0;
  }
.col-f1{fill: #C4C4C4;vertical-align:middle;}
	.img {
    width: 100%;
    height: auto;
    display: block;
}
.index-jt-more {
    border-radius: 50rem;
    position: absolute;
    padding:  0 .7rem;
    height: 1.5rem;
    line-height: 1.5rem;
    right: 1.1rem;
    top: 50%;
    margin-top: -.9rem;
    font-size: .8rem;
    color: #fff;
		background: #54d016;
}

.p-r {position: relative;background: #FFFFFF;}
.col-w {fill:#FFFFFF;vertical-align: text-top;}
.product-list-medium{padding:0rem 0rem;}
.product-list-medium ul li{float:left; width:50%; padding:.2rem 0;box-sizing: border-box;}
.product-list-medium ul li:nth-child(2n-1){padding-right:0.2rem;}
.product-list-medium ul li:nth-child(2n){padding-left:0.2rem;}
.product-list-medium .product-text{padding:.5rem;background: #FFFFFF;}
.product-list-medium .product-text .cont {color:#333;}
.product-list-medium .p-t-remark{font-size:.8rem; padding-top:.2rem; display: none;/*隐藏库存销量*/}
.product-list-medium .p-price{font-size:.7rem;}
.product-list-medium .p-price small{margin-left:.6rem; display:none;/*隐藏市场价*/}
.product-list-medium .icon-flow-cart{ right:.6rem; bottom:.6rem;width:2.8rem; height:2.8rem; line-height:2.8rem; display: none;/*隐藏商品列表购物按钮*/}
.product-div img {
    width: 100%;
    display: block;
}
.product-list-mediums .cont {
    font-size: .8rem;
    height: 2.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.product-list-mediums .p-price .dole {
    font-size: .6rem;
    font-weight: 500;
}
.color-red {
    color: #ec5151;
}
.nav-header {
  position:fixed;
  top:0;
  left: 0;
  right: 0;
  width:100%;
  z-index: 22;
}
.artcle-hds {
		margin-top: .5rem;
    background-color: #FFFFFF;
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid #f1f1f1;
}
  .el-input .el-input__inner {
    height: 35px;}
  .nav-header .nav-cont {
  display:flex;
  align-self: center;
  justify-content: space-between;
  background: #0e6eb8;
  color:#fff;
  padding:.5rem 0;
	font-size: .8rem;
}
.nav-header .nav-add{padding: 0 .5rem;
  align-self: center;}
.nav-header .nav-input{flex: 1;background: #FFFFFF;padding:.25rem .5rem;color:#666666;}

  .nav-header .nav-notice {padding: 0 1rem 0 .5rem;align-self:center;}
  .nav-header .nav-notice i {font-size:1.2rem;}
  .nav-list .nav-list-ul {
  list-style-type: none;
  width:100%;
  display:flex;
  align-items: center;
  flex-wrap: wrap;
  padding:0;
  margin:0;
}
.nav-list .nav-list-ul .nav-list-item {width:20%; padding:.5rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;text-align: center;font-size: .8rem;}
.nav-list .nav-list-ul .nav-list-item img {width: 100%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.article-group {/*padding:.5rem 0;*/background-color: #F4F4F4;}

.article-group .article-list .img-list img{width:32%;}
.article-group .article-list .read{font-size: 1rem;color:#666666;padding:.5rem 0;}
.article-list-other {padding:.5rem;border-bottom: 1px solid #DFDFDF; width:100%;
  background: #FFF;box-sizing:border-box;}
.article-list-other {display: flex;flex-wrap: nowrap; justify-content: space-between;}
.article-list-other .content {display: flex;flex-direction: column;}
.article-list-other .content .hd{padding:.5rem 0;font-size: 1rem;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}
.article-list-other .content .read{padding:.5rem 0;font-size: .8rem;color:#666;}
</style>