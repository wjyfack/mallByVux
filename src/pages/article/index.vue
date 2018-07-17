<template>
	<div>
		123
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				id: ''
			}
		},
		methods: {
			get: function() {
				
				console.log(this.$route.query.id)
					//this.id = this.$route.query.id
				}
		}
	}
</script>

<style scoped>
.ddd{background: #0E6EB8;}
</style>