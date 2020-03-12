<template>
	<div class="compayInfo">
		<div class="form">
			<el-form :model="form" label-width="70px">
				<el-form-item label="LOGO">
					<div class="uploadPic">
					<el-upload
					  class="avatar-uploader"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :show-file-list="false"
					  :on-success="handleAvatarSuccess"
					  :before-upload="beforeAvatarUpload">
					  <img v-if="imageUrl" :src="imageUrl" class="avatar">
					  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					</el-upload>
					</div>
				</el-form-item>
				<el-form-item label="公司名称">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="标签">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="公司介绍">
					<el-input type="textarea" :rows="4"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">添加招聘岗位</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default{
		name:'compayInfo',
		data(){
			return {
				form:{
					
				},
				imageUrl:''
			}
		},
		methods:{
			handleAvatarSuccess(){
				
			},
			beforeAvatarUpload(){
				
			}
		}
	}
</script>

<style>
	.compayInfo  .avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  
	 
	.compayInfo  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	.compayInfo  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 178px;
	    height: 178px;
	    line-height: 178px;
	    text-align: center;
	  }
	.compayInfo  .avatar {
	    width: 178px;
	    height: 178px;
	    display: block;
	  }
</style>
<style lang="less" scoped="scoped">
	.compayInfo{
		.form{
			margin-left:100px;
			width:600px;
			padding:30px;
			.uploadPic{
				width: 178px;
			}
			
		}
	}
</style>
