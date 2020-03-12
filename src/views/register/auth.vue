<template>
	<div class="hasAuth">
		<div class="title">{{$t("请上传企业营业执照")}}</div>
		<div class="upPic">
			<el-upload
			  class="avatar-uploader"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :show-file-list="false"
			  :on-success="handleAvatarSuccess"
			  :before-upload="beforeAvatarUpload">
			  <img v-if="imageUrl" :src="imageUrl" class="avatar">
			  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			</el-upload>
			<el-button type="primary" class="loginBtn">确定登录</el-button>
		</div>
	</div>
</template>

<script>
	  export default {
	    data() {
	      return {
	        imageUrl: ''
	      };
	    },
	    methods: {
	      handleAvatarSuccess(res, file) {
	        this.imageUrl = URL.createObjectURL(file.raw);
	      },
	      beforeAvatarUpload(file) {
	        const isJPG = file.type === 'image/jpeg';
	        const isLt2M = file.size / 1024 / 1024 < 2;
	
	        if (!isJPG) {
	          this.$message.error('上传头像图片只能是 JPG 格式!');
	        }
	        if (!isLt2M) {
	          this.$message.error('上传头像图片大小不能超过 2MB!');
	        }
	        return isJPG && isLt2M;
	      }
	    }
	  }
</script>

<style lang="less" scoped="scoped">
	.hasAuth{
		.title{
			padding-top: 100px;
			font-size:36px;
			margin-bottom:40px;
		}
	}
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width:500px;
	    height:300px;
	    line-height: 300px;
	    text-align: center;
	  }
	  .avatar {
	    width: 500px;
	    height: 300px;
	    display: block;
	  }
	  .loginBtn{
		  margin-top:60px;
		  width: 500px;
	  }
</style>
<style>
	.hasAuth .el-upload{
		border:1px solid #dbdbdb;
	}
</style>
