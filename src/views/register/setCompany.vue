<template>
	<div class="setCompany">
		<div class="title">{{$t('fillInfo')}}</div>
		<div class="form">
			<el-form ref="form" :model="form" label-width="80px">
			  <el-form-item label="活动名称">
					<el-row>
						<el-col :span="8">
							<el-select v-model="province" placeholder="请选择省份" @change='selectPro'>
							    <el-option
							      v-for="item in provinceData"
							      :key="item.value"
							      :label="item.label"
							      :value="item.children">
							    </el-option>
							</el-select>
						</el-col>
						<el-col :span="8">
							<el-select v-model="city" placeholder="请选择市" @change='selectCity'>
							    <el-option
							      v-for="item in cityData"
							      :key="item.value"
							      :label="item.label"
							      :value="item.children">
							    </el-option>
							</el-select>
						</el-col>
						<el-col :span="8">
							<el-select v-model="area" placeholder="请选择区">
							    <el-option
							      v-for="item in areaDate"
							      :key="item.value"
							      :label="item.label"
							      :value="item.value">
							    </el-option>
							</el-select>
						</el-col>
					</el-row>
			  </el-form-item>
			   <el-form-item label="请完善企业信息">
				   <el-input v-model="expressName"></el-input>
			   </el-form-item>
			   <el-form-item label="联系人">
			   		<el-input v-model="concatPeople"></el-input>
			   </el-form-item>
			   <el-form-item label="联系电话">
			   		<el-input v-model="phone"></el-input>
			   </el-form-item>
			   <el-form-item>
				   <el-button type="primary" class="big">直接登录</el-button>
				   <el-button type="primary" class="big">继续认证</el-button>
			   </el-form-item>
			</el-form> 
		 </div>
	</div>
</template>

<script>
	import cityData from "../../../src/unit/country-data.js";
	export default {
		name:"setCompany",
		data(){
			return {
				provinceData:cityData[0].children,
				cityData:[],
				areaDate:[],
				province:"",
				city:"",
				area:'',
				form:{
					expressName:'',
					concatPeople:"",
					phone:""
				}
			}
		},
		created() {
			console.log(cityData)
		},
		methods:{
			selectPro(value){
				console.log(value)
				this.cityData = value;
				this.city="";
			},
			selectCity(value){
				console.log(value)
				this.areaDate = value;
				this.area='';
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.setCompany{
			.title{
				margin-top: 100px;
				font-size: 48px;
				
			}
			.form{
				margin:80px auto 0;
				padding: 30px;
				width: 800px;
				border: 1px solid #dbdbdb;
				border-radius: 8px;
				.big{
					width: 200px;
					margin: 0 40px;
				}
			}
	}
</style>
