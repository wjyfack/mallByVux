<template>
	<div>
	<div class="backNav">
		<div>
			<div @click="back" class="back"><x-icon class="col-fill-w" type="ios-arrow-back" size="20"></x-icon></div>
			<div class="title">{{title}}</div>
		</div>
		
	</div>
	<div class="mar-t"></div>
	</div>
</template>

<script>
	export default {
		props:{title: String},
		methods: {
			back: function() {
				this.$router.back(-1);
			}
		}
	}
</script>

<style scoped>
.backNav {
	position: fixed;
	top:0;
	width:100%;
	background: #0E6EB8;
	padding: .5rem;
	box-sizing: border-box;	
}
.mar-t {margin-bottom: 2.5rem;}
.backNav>div {display: flex;align-items: center;}
.back{display: inline-flex;}
.col-fill-w{fill:#FFFFFF;vertical-align: middle;}
.title {flex:1; text-align: center;color:#FFFFFF;}
</style>