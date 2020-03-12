<template>
	<div class="form_fixed" @click.self="close">
		<div class="form">
			<div class="title">
				添加展示图
			</div>
			<div class="close" @click="close">
				<i class="el-icon-close"></i>
			</div>
			<el-form label-width="80px">
				<el-form-item label="列表">
					<div class="textLeft">
					<el-upload
					  class="upload-demo"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :on-preview="handlePreview"
					  :on-remove="handleRemove"
					  :file-list="fileList"
					  list-type="picture">
					  <el-button size="small" type="primary">点击上传</el-button>
					  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
					</el-upload>
					</div>	
				</el-form-item>
				<el-form-item label="权重">
					<el-input></el-input>
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
        fileList: []
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
