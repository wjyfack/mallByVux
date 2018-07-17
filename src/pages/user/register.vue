<template>
<div class="login">
    <div class="avatar">
      <span>快速注册</span>
    </div>
    <div class="form">
       <div class="group group-bt">
		  <x-input placeholder="请输入验证码" v-model="check">
			<img slot="right-full-height" src="http://placehold.it/20x10" >
		  </x-input>
		</div>
		<div class="group group-bt">
			<x-input v-model="phone" placeholder="请输入手机号" class="x-input">
				<x-button slot="right" type="primary" mini>{{GetSMSCode}}</x-button>
			</x-input>
		</div>
		<div class="group group-bt">
			<x-input  v-model="SMSCode" placeholder="请输入短信验证码">	
			</x-input>
		</div>
		<div class="group">
			<x-input v-model="pwd" placeholder="请输入6-20为登录密码" type="password" class="x-input">
				<img slot="right" style="vertical-align:middle;" src="./../../assets/eye.png" width="24" height="24">
			</x-input>
		</div>
    </div>
	<div class="btn">
		 <x-button @click.native="showPosition" type="primary">注册</x-button>
	</div>
    <div class="form-other">
      <span>注册即视为同意《用户注册协议》</span>
    </div>
	<toast :value="show" :text="text" :type="type"></toast>
</div>
</template>

<script>
	import {Group, XInput,XButton, Toast} from 'vux'
    export default {
      name: "Register",
	  components: {Group, XInput, XButton, Toast},
      data() {
        return {
			text: 'kkk',
			show: false,
			type: 'text', 
			check: '',
			phone: '',
			SMSCode: '',
			pwd: '',
			GetSMSCode: '获取短信验证码',
		}
      },
      methods: {
        showPosition: function() {
			
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
.avatar span {color:#0E6EB8;}
.form {
  border: 1px solid #DFDFDF;
  border-radius: 5px;
  margin: .5rem;
  padding: 1rem .5rem;
  background: #FFF;
}
.form-other {
 
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
