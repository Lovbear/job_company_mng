<template>
	<div class="login">
		<div class="title">{{ $t('title') }}</div>
		<div class="form">
			<el-form :model="ruleForm" :rules="rules" ref='ruleForm'>
				<el-form-item prop="userName">
					<el-input type="password" :placeholder="$t('placeHolder.account')" v-model="ruleForm.userName"  ></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type="password" :placeholder="$t('placeHolder.pass')" v-model="ruleForm.password" ></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="submit" @click='submitForm("ruleForm")'>{{ $t('login.login') }}</el-button>
					<div class="info flex_start_v fontblue">
						<div class="blue borderR" @click="forgetPass">{{ $t('login.forgetPass') }}</div>
						<div class="blue" @click="register">{{ $t('login.register') }}</div>
					</div>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Login",
		data() {
			      var checkName = (rule, value, callback) => {
			        if (value === '') {
			          callback(new Error('请输入密码'));
			        } else {
			          if (this.ruleForm.checkPass !== '') {
			            this.$refs.ruleForm.validateField('checkPass');
			          }
			          callback();
			        }
			      };
			      var checkPass = (rule, value, callback) => {
			        if (value === '') {
			          callback(new Error('请再次输入密码'));
			        } else if (value !== this.ruleForm.pass) {
			          callback(new Error('两次输入密码不一致!'));
			        } else {
			          callback();
			        }
			      };
				  
			return {
				ruleForm:{
					userName:'',
					password:''
				},
				rules:{
					 userName: [
						{ validator: checkName, trigger: 'blur' }
					  ],
					  password: [
						{ validator: checkPass, trigger: 'blur' }
					  ]
				}
			}
		},
		methods:{
			register(){
				this.$router.push({
					path:'/register'
				})
			},
			forgetPass(){
				this.$router.push({
					path:'/forgetPass'
				})
			},
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
				  if (valid) {
					alert('submit!');
				  } else {
					console.log('error submit!!');
					return false;
				  }
				});
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.login{
		.title{
			margin-top:20%;
			font-size: 48px;
		}
		.form{
			margin:100px auto 0;
			width:300px;
		}
		.submit{
			width: 100%;
		}
		
		.info{
			justify-content:flex-end;
			.blue{
				padding: 0 10px;
			}
		}
	}
</style>
