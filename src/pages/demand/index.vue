<template>
<div class="demand"> 
  <div class="con" style="background:#F4F4F4;">
    <section class="index-headers ts-2 bg-col">
      <!--search-->
      <section class="search box ts-3">
       <div class="text-all position-rel dis-box j-text-all">

         <div class="dis-box search-logo-up"><div class="onelist-hidden" id="j-lbs-city"><img src="../../assets/images/logo.jpg"></div></div>

         <div class="box-flex input-text bg-w">
           <a href="" class="a-search-input"></a>
           <div class="j-input-text nav-soso"><icon type="search"></icon>搜索求购产品、企业</div>
         </div>
         <div class="sear-side f-03">
           <a href=""><i class="el-icon-service"></i><span>我的</span></a>
           <a href=""><i class="el-icon-edit-outline"></i><span>发布</span></a>
         </div>
        </div>
      </section>
    </section>
    <div class="article_info">
      <div class="article-list m-top08 article-list-crosswise  b-color-f">
        <!--三图模式-->
        <a href="">
          <div class="dis-box">
            <div class="article-left dis-box dis-box-j">
              <h4 class="f-06 col-3">subject</h4>
            </div>
          </div>
          <div class="article-img-list dis-box m-top08">

            <div class="img-list"><img src="http://placehold.it/100x100"></div>

          </div>
          <div class="dis-box add-box bord-b">
            <span><img src="../../assets/images/demand.png">求购量：<span class="col-red">123</span> </span>
            <span>已报价<span class="col-red">123</span>条</span>
          </div>
          <div class="dis-box add-box f-03">
            <span class="col-9">联系人：<span class="col-3">contact_name</span> </span>
            <span class="col-9">发布时间:<span class="col-3">add_time</span></span>
          </div>
          <div class="dis-box add-box f-03">
            <span class="col-9">联系电话：<span class="col-3">contact_phone</span> </span>
            <span class="col-9">剩余时间：<span class="col-3">remaining_days天</span></span>
          </div>
          <div class="dis-box add-box">
            <span class="col-3 f-01 de-ele"> <span class="bord-piont">会员</span><div class="element"></div> nick_name</span>
            <span class="f-01 bord-now">立即报价</span>
          </div>
        </a>
      </div>


      <div class="next-more f-03 col-3">
        <a class="pre active" href="">上一页</a>
        <a  class="next active" href="">下一页</a>
      </div>

    </div>
  </div>
	<fast-nav></fast-nav>
</div>
</template>

<script>
	import FastNav from '@/components/fastNav'
	import {Icon} from 'vux'
	export default {
		components: {Icon, FastNav},
		data() {
			return {
				
			}
		}
	}
</script>

<style scoped>
	
.text-all {display:flex;font-size: .8rem;}
	
	
 .article_info {margin-top:3.5rem;}
  .box-flex {display:flex;}
  .dis-box-j {display:flex; width:100%;justify-content: space-between;padding: .5rem 0;}
  .col-r {color: red; font-weight: 500;}
  .p-05 {padding: .5rem 0;}
  .text-conter {text-align: center;}
  .position-rel {display:flex;height: 2rem;padding:.5rem;}
  .input-text {
    flex:1;
    display: flex;
    align-items: center;
  }
.bg-col {background-color: #0e6eb8;}
  .bg-w {background-color:#FFFFFF !important;}
  .search-logo-up {line-height: 2rem;padding-right: .5rem;}
  .search-logo-up img{width:2rem;}
  .sear-side {display: flex;}
  .sear-side a{display: flex;flex-direction: column;align-items: center;justify-content: center;color: #ffffff;padding: 0 .5rem;}
  .top-50 {margin-top: 5rem;}
  .add-box {display:flex; align-items: center;justify-content: space-between; padding:.5rem 0;}
  .bord-b {border-bottom: 1px dashed #636363; color: #333;}
  .bord-b img{width: 1rem; margin-right: .5rem;vertical-align:bottom;}
  .col-red {color: #ff1800;}
  .bord-piont {background-color: #0e6eb8; color: #FFFFFF; padding: .1rem 0; padding-right: .5rem;  }
  .element{
    width: 0px;
    height: 0px;
    border-top: .71rem solid transparent;
    border-right: 1rem solid transparent;
    border-bottom: .71rem solid transparent;
    border-left: 1rem solid #0e6eb8;
  }
  .de-ele {display: flex;align-items: center;}
  .bord-now {background-color: #0e6eb8; color: #FFFFFF; padding: .1rem 1rem; }
  .article-img-list .img-list{ width: 5rem;padding: .25rem;border: 1px solid #c4c4c4; border-radius: 5px; }
  .article-img-list .img-list img{ width:100%; display: block;}
  .next-more {display: flex;padding: 1rem;align-items: center; justify-content: center;text-align: center;background-color: #FFFFFF;border-top:1px solid #c4c4c4;}
  .next-more .active { color: #0e6eb8 !important; }
  .next-more .pre,.next-more .next {width:50%;}
  .index-headers {position: fixed;width: 100%;top: 0;z-index: 20;display:table;}
  .hd-nav { padding: 1rem; text-align: center;border-bottom: 1px solid #DFDFDF;background-color: #0e6eb8;}
  .hd-nav .hd-nav-left {float: left;}
  .hd-nav a {color:#FFFFFF;}
  .forms .form-group textarea {display: block; width:100%; height: 8rem;border:0;box-shadow: 0 0;}
  .forms .form-control:focus {box-shadow: 0 0;}
  .forms .form-group input {border-bottom: 1px solid #DFDFDF;border-radius:0;}
  .article-list {
    padding: .5rem;
    background: #FFF;
		font-size: .8rem;
  }
</style>