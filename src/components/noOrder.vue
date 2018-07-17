<template>
	<div class="no-more">
		<img class="w-5" src="./../assets/user/noOrder.png" alt="">
		<span class="col-6 f-08">{{title? title: '亲，还没有订单哦～！'}}</span>
	</div>
</template>

<script>
	export default {
		props:{title:String},	
	}
</script>

<style scoped>
.no-more {background: #FFFFFF;display: flex;flex-direction: column;align-items: center;padding: .5rem;}
.w-5 {width:5rem}
</style>