<template>
	<div class="login">
		<div class="title">{{ $t('title') }}</div>
		<div class="form">
			<el-form :model="ruleForm" :rules="rules" ref='ruleForm'>
				<el-form-item prop="userName">
					<el-input :placeholder="$t('placeHolder.phone')" v-model="ruleForm.userName"  ></el-input>
				</el-form-item>
				<el-form-item prop="verCode">
					<el-input :placeholder="$t('placeHolder.verCode')" v-model="ruleForm.verCode" >
						<template slot="append" class="initStyle">
							<div class="setVerCode fontblue" @click="setVerCode">
								{{!isSend?$t('sendVerCode'):(countDown+'s') }}
							</div>
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input type="password" :placeholder="$t('placeHolder.setPass')" v-model="ruleForm.password"  ></el-input>
				</el-form-item>
				<el-form-item prop="confirmPass">
					<el-input type="password" :placeholder="$t('placeHolder.confirmPass')" v-model="ruleForm.confrimPass"  ></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="submit" @click='submitForm("ruleForm")'>{{ $t('login.relexLogin') }}</el-button>
					<div class="info flex_start_v fontblue">
						<div class="blue" @click="toLogin">{{ $t('rightNowLogin') }}</div>
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
			          callback(new Error(this.$t('errInfo.nameNull')));
			        } else if(value.length>10){
						callback(new Error(this.$t('errInfo.nameleng')));
			        }else{
						callback();
					}
			      };
				  var checkCode = (rule, value, callback) => {
			        if (value === '') {
			          callback(new Error(this.$t('errInfo.codeNull')));
			        } else {
			          callback();
			        }
			      };
			      var checkPass = (rule, value, callback) => {
			        if (value === '') {
			          callback(new Error(this.$t('errInfo.passNull')));
			        } else if (value < 8 || value > 20) {
			          callback(new Error(this.$t('errInfo.passLeng')));
			        } else {
			          callback();
			        }
			      };
				  var checkcomfrimPass = (rule, value, callback) => {
			        if (value === '') {
			          callback(new Error(this.$t('errInfo.comfrimPass')));
			        } else if (value !== this.ruleForm.pass) {
			          callback(new Error(this.$t('errInfo.comfrimPass1')));
			        } else {
			          callback();
			        }
			      };
				  
			return {
				isSend:false,
				countDown:0,
				ruleForm:{
					userName:'',
					verCode:'',
					password:'',
					confrimPass:''
				},
				rules:{
					 userName: [
						{ validator: checkName, trigger: 'blur' }
					  ],
					  verCode:[
						{ validator: checkCode, trigger: 'blur' }
					  ],
					  password: [
						{ validator: checkPass, trigger: 'blur' }
					  ],
					  confrimPass:[
						  { validator: checkcomfrimPass, trigger: 'blur' }
					  ]
				}
			}
		},
		methods:{
			toLogin(){
				this.$router.replace({
					path:"/login"
				})
			},
			setVerCode(){
				if(!this.isSend){
					this.countDown=60;
					this.isSend=true;
					requestAnimationFrame(this.reduceTime)
				}
			},
			reduceTime(){
				setTimeout(()=>{
					if(this.countDown>0){
						this.countDown--;
						this.reduceTime();
					}else{
						this.countDown=0;
						this.isSend=false;
						cancelAnimationFrame(this.reduceTime);
					}
				},1000)
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
		.setVerCode{
			
		}
	}
</style>
