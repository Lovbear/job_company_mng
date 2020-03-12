<template>
	<div class="form_fixed" @click.self="close">
		<div class="form">
			<div class="title">
				添加/编辑
			</div>
			<div class="close" @click="close">
				<i class="el-icon-close"></i>
			</div>
			<el-form label-width="100px">
				<el-form-item label="昵称">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="账号">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="角色">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="状态">
					<el-input></el-input>
				</el-form-item>
				<el-form-item>
					<el-button>确定</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>
<script>
  export default {
    data() {
      return {
		lowMoney:'',
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
