<template>
	<div class="compayInfo">
		<router-view></router-view>
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
	  
	  .compayInfo{
		  width: 100%;
	  }
</style>
