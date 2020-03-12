<template>
	<div class="form_fixed" @click.self="close">
		<div class="form">
			<div class="title">
				请上传企业营业执照
			</div>
			<div class="close" @click="close">
				<i class="el-icon-close"></i>
			</div>
			<div class="picbox">
				<el-upload
				  class="upload-demo"
				  drag
				  action="https://jsonplaceholder.typicode.com/posts/"
				  @on-success="upSucess"
				  multiple>
				  <i class="el-icon-upload"></i>
				  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
				  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</div>
			<el-button type="primary">确定</el-button>
		</div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
        fileList: []
      };
    },
    methods: {
	  close(){
		  this.$emit("close")
	  },
	  upSucess(response,file,fileList){
		  console.log(response)
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
