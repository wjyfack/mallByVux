<template>
<div class="login">
    <div class="avatar">
      
    </div>
	<div v-if="part">
		<div class="form" >
			<div class="group group-bt">
			<x-input v-model="user" placeholder="用户名/手机号/邮箱" class="x-input">
			</x-input>
			</div>
			<div class="group">
				<x-input v-model="pwd" placeholder="请输入验证码" class="x-input">
					<img slot="right" style="display:block;" src="http://placehold.it/50x24" width="60" height="24">
				</x-input>
			</div>
		</div>
		<div class="btn">
			<x-button @click.native="next" type="primary">下一步</x-button>
		</div>
	</div>
    <div v-else="part">
		<div class="form" >
			<div class="group group-bt">
				<x-input title="用户名:"  class="x-input" disabled :value="name">
				</x-input>
			</div>
			<div class="group group-bt">
				<x-input title="手机号码:" class="x-input" disabled :value="phone">
				</x-input>
			</div>
			<div class="group">
				<x-input placeholder="验证码" class="x-input">
					<span slot="right">发送验证码</span>
				</x-input>
			</div>
		</div>
		<div class="btn">
			<x-button @click.native="showPosition('middle')" type="primary">下一步</x-button>
		</div>
	</div>
	
	
    <div class="form-other">
     
    </div>
	<toast :value="show" :text="text" :type="type"></toast>
</div>
</template>

<script>
	import {Group, XInput,XButton, Toast} from 'vux'
    export default {
      name: "Login",
	  components: {Group, XInput, XButton, Toast},
      data() {
        return {
			part: true,
			text: 'kkk',
			show: false,
			type: 'text', 
			user: '',
			pwd: '',
			name: '123',
			phone: '1370xxxx'
		}
      },
      methods: {
		next: function() {
			this.part = !this.part;
		},
        showPosition: function(value) {
			
			this.showToast()
			console.log(this.user, this.pwd)
		},
		showToast: function() {
			let that = this;
			that.show = true
			setTimeout(()=>{
				that.show = false
			},2000);
		}
      }
    }
</script>

<style scoped>
  .login {

  }
.group {border:1px solid #D9D9D9;border-radius:5px;margin-top:0;}
.group-bt {margin-bottom: 1rem;}
.weui-cells {margin-top:0 !important;}
.x-input {border-radius: 5px;font-size: .8rem;}
.btn {padding: .5rem;}
.avatar {
	text-align: center;
    padding-top: 3rem;
}
.avatar img {
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
}
.form {
  border: 1px solid #DFDFDF;
  border-radius: 5px;
  margin: .5rem;
  padding: 1rem .5rem;
  background: #FFF;
}
.form-other {
  text-align: center;
}
.form-other span {
    margin: 0 .5rem;
    color: #666;
	font-size: .8rem;
}
 .col-b {
    color:#0e6eb8 !important;
}
</style>
