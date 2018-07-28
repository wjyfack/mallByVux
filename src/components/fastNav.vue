<template>
	<div class="fastNav">
	<div class="commom-nav dis-box ts-5" :class="{'active': show}">
	  <div class="left-icon">
	      <div class="nav-icon" @click.stop="bindRemv">
						<x-icon class="x-icon" :class="{'icon-act': show}" type="ios-arrow-left" size="20"></x-icon> 
						<span>快速导航</span>
					</div>
	      <!-- <div class="filter-top filter-top-index" id="scrollUp">
	          <i class="iconfont icon-jiantou"></i>
	          <span>顶部</span>
	      </div>  -->
	  </div>
	  <div class="right-cont box-flex">
	      <div class="nav-cont">
	          <div class="nav-cont-list">
	                <router-link to="/">
	                  <img src='./../assets/home.png' ></img>
	                  <!-- <i class="iconfont icon-home"></i> -->
	                  <p>首页</p>
	                </router-link>  
	          </div>
	          <div class="nav-cont-list">
	              <router-link to="/search">
	                    <img src='./../assets/banner_search.png' ></img>
	                    <!-- <i class="iconfont icon-sousuo"></i> banner_search.png-->
	                    <p>搜索</p>
	              </router-link>  
	          </div>
	          <div class="nav-cont-list">
	                <router-link to="/category">
	                <img src='./../assets/cate.png' ></img>
	                    <!-- <i class="iconfont icon-caidan"></i> -->
	                    <p>分类</p>
	                </router-link> 
	          </div>
	          <div class="nav-cont-list">
	                <router-link to="/cate">
	                    <img src='./../assets/flow.png' ></img>
	                    <!-- <i class="iconfont icon-gouwuche"></i> -->
	                    <p>购物车</p>
	                </router-link> 
	          </div>
	          <div class="nav-cont-list" @click="islogin()">
	              
	                    <img src='./../assets/user.png' ></img>
	                    <!-- <i class="iconfont icon-geren"></i> -->
	                    <p>个人中心</p>
	              
	          </div>
	      </div>
	  </div>
	</div>
	
		<div class="common-show" :class="{'active':show}"></div>
	
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		},
		methods: {
			bindRemv: function() {
				// console.log(this.show)
				this.show = !this.show
			},
				islogin: function() {
					let userInfo = this.$store.state.userInfo
					console.log(userInfo)
					if(userInfo.info == '') {
						this.$router.push({path:'/user/login'})
					}else {
						this.$router.push({path: '/user/home'})
					}
				}
		}
	}
</script>

<style scoped>
/*快捷导航*/
.dis-box {display: flex;}
.x-icon{fill: #FFFFFF;vertical-align: middle;}
.commom-nav{position:fixed;right:-14rem;top:66%;z-index:12;}
/*.nav-active-enter-active, .nav-active-leave-active {right: 0;}
.nav-active-enter, .nav-active-leave-to {transition: right -13rem;}*/
.fastNav>.active {animation: anv ease-in .3s;animation-fill-mode: forwards;}
@keyframes anv {
	from {right: -14rem;}
	to   {right: 0;}
}
.icon-act {animation: arrow ease-in .3s;animation-fill-mode: forwards;}
@keyframes arrow {
	from {transform: rotate(0deg);}
	to {transform: rotate(180deg);}

}
.commom-nav.active .left-icon img {transform: rotate(0deg);}
.commom-nav .left-icon .nav-icon{position:relative; width:5rem;background:rgba(0,0,0,0.7);border-radius:0.5rem 0 0 0.5rem;font-size:.8rem;color:#fff; padding: 1rem .5rem 1rem .5rem; margin-top: 3rem;}
.commom-nav .left-icon img {position: absolute; width:30rpx;height: 30rpx;left:20rpx;top:48rpx;transform: rotate(-180deg);}

.commom-nav .left-icon .icon-jiantou1{position: absolute;left:.4rem;top:28.6%;color:#fff;font-size:1rem;-moz-transform: rotate(-180deg);-webkit-transform: rotate(-180deg);-ms-transform: rotate(-180deg);-o-transform: rotate(-180deg);transform: rotate(-180deg);}
.commom-nav .left-icon .icon-jiantou1.active{-moz-transform: rotate(0deg);-webkit-transform: rotate(0deg);-ms-transform: rotate(0deg);-o-transform: rotate(0deg);transform: rotate(0deg);}
.commom-nav .right-cont{background:#fff;border-radius:0.5rem 0 0 0.5rem;padding:.5rem;width:13rem;}
.commom-nav .right-cont .nav-cont{overflow:hidden;}
.commom-nav .right-cont .nav-cont .nav-cont-list{width:25%;float:left;text-align: center;    padding: 0.2rem 0;}
.commom-nav .right-cont .nav-cont .nav-cont-list i{font-size:2rem;color:#666;    font-weight: 600;}
.commom-nav .right-cont .nav-cont .nav-cont-list img{width: 2rem;height: 2rem;}
.commom-nav .right-cont .nav-cont .nav-cont-list p{font-size:.8rem; color:#666;margin-top: .1rem;text-overflow:ellipsis; overflow:hidden; white-space:nowrap;}
.common-show{position:fixed; width:100%;height:100%; left:100%; right:0; top: 0; bottom: 0; z-index: 11; background:rgba(0,0,0,0.4);display:none}
.common-show.active{display:block;left:0;animation: opt ease-in .3s;animation-fill-mode: forwards;}
@keyframes opt{
  from {opacity: 0}
  to   {opacity: .6}
}
.filter-top span{font-size:.8rem;display: block;text-align: center;padding-top: .7rem;color:#fff;}

</style>