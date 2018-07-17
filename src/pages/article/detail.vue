<template>
	<div>
	<back-nav :title="title"></back-nav>
	<section class="com-nav article-list">
        <div class="art-tit-box padding-all">
            <h3 class="com-cont-box art-cont-box">{$article.title}</h3>
            <small>
                <time>时间：{$article.amity_time}</time>
                &nbsp;&nbsp;作者：<span>{$article.author}</span></small>
        </div>
        <div class=" dis-n-detail padding-all">
            <div class="detail article-content" style="max-height: none;">
				{$article.content}
			</div>
        </div>
    </section>
	<section>
        <div class="dis-box-hd">
            <h3 class="box-flex text-all-span my-u-title-size-1">推荐文章</h3>
        </div>
		<panel  :list="list" :type="type"></panel>
    </section>
	</div>
</template>

<script>
	import backNav from '@/components/backNav'
	import {Panel} from 'vux'
	export default {
		components: {Panel, backNav},
		data () {
    return {
			title: '文章详情',
      type: '1',
      list: [{
        src: 'http://somedomain.somdomain/x.jpg',
        fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题一',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: '/component/cell'
      }, {
        src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
        title: '标题二',
        desc: '由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。',
        url: {
          path: '/component/radio',
          replace: false
        },
        meta: {
          source: '来源信息',
          date: '时间',
          other: '其他信息'
        }
      }],
    }
  }
	}
</script>

<style scoped>
.padding-all {padding: .5rem;}
.article-list {background: #FFFFFF;}
.article-list h3 {font-size: 1.2rem;font-weight: 600;margin: 1rem 0 .5rem 0;}
.art-cont-box{display: -webkit-box; -webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;}
.article-list small {font-size: .8rem;color: #999999;}
.article-list small span{color: #607fa6;}
.dis-n-detail {width: 100%;box-sizing:border-box;word-wrap: break-word;font-size: .8rem;line-height: 1.2;}
.dis-box-hd {padding:.5rem;border-top: 1px solid #F6F6F9;border-bottom: 1px solid #F6F6F9;}
</style>