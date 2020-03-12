<template>
	<div class="form_fixed" @click.self="close">
		<div class="form">
			<div class="title">
				上传视频
			</div>
			<div class="close" @click="close">
				<i class="el-icon-close"></i>
			</div>
			<el-form label-width="100px">
				<el-form-item label="视频标题">
					<el-input></el-input>
				</el-form-item>
				<el-form-item>
					 <el-radio v-model="type" label="1">视频地址</el-radio>
					 <el-radio v-model="type" label="2">文件上传</el-radio>
				</el-form-item>
				<el-form-item label="视频上传地址" v-if="type==1">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="列表" v-else>
					<div class="textLeft">
					<el-upload
					  class="upload-demo"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :on-preview="handlePreview"
					  :on-remove="handleRemove"
					  :file-list="fileList"
					  list-type="picture">
					  <el-button size="small" type="primary">点击上传</el-button>
					</el-upload>
					</div>	
				</el-form-item>
				<el-form-item>
					<el-button>确定</el-button>
					<el-button @click="close">取消</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        fileList: [],
		type:"1"
      };
    },
    methods: {
	  close(){
		  this.$emit("close")
	  },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>

<style>
	.textLeft{
		text-align: left;
	}
</style>
