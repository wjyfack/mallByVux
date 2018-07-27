<template>
<div class="login">
    <div class="avatar">
      <img src="./../../assets/images/get_avatar.png" alt="">
    </div>
    <div class="form">
        <div class="group group-bt">
		  <x-input v-model="user" placeholder="请输入您的用户名/手机号" class="x-input">
			<img slot="label" style="padding-right:10px;display:block;" src="./../../assets/account.png" width="24" height="24">
		  </x-input>
		</div>
		<div class="group">
			<x-input v-model="pwd" placeholder="请输入6-20为登录密码" class="x-input">
				<img slot="label" style="padding-right:10px;display:block;" src="./../../assets/password.png" width="24" height="24">
			</x-input>
		</div>
    </div>
	<div class="btn">
		 <x-button @click.native="showPosition('middle')" type="primary">立即登录</x-button>
	</div>
    <div class="form-other">
      <router-link to="/forget"><span>忘记密码</span></router-link>
      <router-link to="/register"><span class="col-b">新用户注册</span></router-link>
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
			text: 'kkk',
			show: false,
			type: 'text', 
			user: '',
			pwd: ''
		}
      },
      methods: {
        showPosition: function(value) {
				// 检测数据正确性， 数据不校验了有空再写
				if(this.user.trim() == ''){
					this.text = '请输入用户名/手机号';
					this.showToast()
					return;
				}
				if(this.pwd.trim() == '') {
					this.text = '请输入密码';
					this.showToast()
					return;
				}
				// 放进store里
				var data = {info: 'yes',username: this.user,pwd: this.pwd}
				this.$store.commit('setUserInfo',data);
				// 跳转到个人首页
				this.$router.push({path: '/home'})
			  //console.log(this.user, this.pwd)
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
