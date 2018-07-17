<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
 *{padding:0;margin:0;}
body {
	padding:0;margin:0;
  background-color: #fbf9fe;
}
 a{text-decoration: none;}
  .col-3 {color: #333333;}
  .col-6 {color: #666666;}
  .col-9 {color: #999999;}
	.f-08 {font-size: .8rem;}
@import '~vux/src/styles/reset.less';
</style>
