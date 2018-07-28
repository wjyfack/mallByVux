<template>
  <div>   
		<div class="nav-list nav-post"  v-show="isShow">
			<ul class="nav-list-ul">
				<li class="nav-list-item">
					<router-link to="/category">
						<img src="http://placehold.it/100x100" alt="">
						<span class="col-6">分类</span>
					</router-link>
				</li>
				<li class="nav-list-item">
					<router-link to="/cate">
						<img src="http://placehold.it/100x100" alt="">
						<span class="col-6">购物车</span>
					</router-link>
				</li>
				<li class="nav-list-item">
					<router-link to="/search">
						<img src="http://placehold.it/100x100" alt="">
						<span class="col-6">搜索</span>
					</router-link>
				</li>
			</ul>
		</div>
    <div class="nav-full" v-show="isShow"></div>

    <footer class="footer-nav dis-box" id="footer-nav">
      <router-link to="/" class="box-flex nav-list active">
		<img src="./../assets/home.png" alt="">
        <span>首页</span>
      </router-link>
      <router-link to="/demand" class="box-flex nav-list">
			<img src="./../assets/cate.png" alt="">
			<span>求购</span>
      </router-link>
      <a href="javascript:void(0);" class="box-flex nav-list">
        <div class="fot-more-img" :class="{'fot-more-roate':isActive}" @click="moreActive"><img src="./../assets/more.png"><div><!--更多--></div></div>
      </a>
      <router-link to="category" class="box-flex position-rel nav-list">
		  <img src="./../assets/flow.png" alt="">
        <span>分类</span>
      </router-link>
      <a href="javascript:;" @click="islogin()" class="box-flex nav-list">
		  <img src="./../assets/user.png" alt="">
          <span>我</span>
      </a>
    </footer>
  </div>
</template>

<script>

export default {
   name:'footerNav',
   components: {},
   data: function () {
        return {
          isShow: false,
          isActive: false
        }
      },
      methods: {
        moreActive: function(event){
					event.stopPropagation()
          this.isActive = !this.isActive
          this.isShow   = !this.isShow
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
	.nav-full{position: fixed;width:100%;height: 100%;background: rgba(0,0,0,.6);top:0;}
	.footer-nav {
		background-color: rgba(254, 253, 252, 1);
		left: 0;
		right: 0;
		position: fixed;
		margin: 0 auto;
		bottom: 0;
		z-index: 55;
		box-shadow: 1px 5px 15px rgba(50,50,50,0.3);
		border-top: 1px solid #f6f6f9;
	 /* padding: 0.5rem 0;*/
	}
	.footer-nav .nav-list img {
		width: 2rem;
		height: 2rem;
	}
	.footer-nav .nav-list {
		font-size: .8rem;
		display: block;
		text-align: center;
		padding-top: 0rem;
		color: #595959;
		text-decoration: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.footer-nav .nav-list.active {
		color:#0e6eb8;
	}

	.box-flex {
		-webkit-box-flex: 1;
		-moz-box-flex: 1;
		-ms-box-flex: 1;
		box-flex: 1;
		display: block;
		width: 100%;
	}
	.dis-box {
		display: -webkit-box;
		display: -moz-box;
		display: -ms-box;
		display: box;
	}
	.fot-more-roate img {
		transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-moz-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		-o-transform: rotate(45deg);
	}
	.fot-more-img {position: absolute;/*top:-1.25rem;*/left: 50%;transform: translateX(-50%);}
	.fot-more-img img{padding: 0.02rem;width: 2.5rem !important;height: 2.5rem !important;background: #fff; border-radius: 1.36rem;margin: 0 auto;-webkit-box-shadow: 0px -0.05rem 0.1rem #EEEEEE;box-shadow: 0px -0.05rem 0.1rem #EEEEEE;border-radius: 50%;}
	.fot-more-roate img{transform: rotate(45deg);-ms-transform: rotate(45deg);-moz-transform: rotate(45deg);-webkit-transform: rotate(45deg);-o-transform: rotate(45deg);}
	.nav-post {
		position: fixed;
		bottom: 3rem;
		width:100%;
		padding:.5rem;
		background: #FFF;
		z-index: 44;
		/*border-bottom: 1px solid #F4F4F4;*/
	}
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
		box-sizing: border-box;
		text-align: center;
		font-size: .6rem;}
	.nav-list .nav-list-ul .nav-list-item img {width: 100%;
		-webkit-border-radius: 50%;
		-moz-border-radius: 50%;
		border-radius: 50%;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}
</style>
