<template>
	<div class="form_fixed" @click.self="close">
		<div class="form">
			<div class="title">
				添加员工
			</div>
			<div class="close" @click="close">
				<i class="el-icon-close"></i>
			</div>
			<el-form label-width="100px">
				<el-form-item label="姓名">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="电话">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="性别">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="部门">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="岗位">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="招聘人数">
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
