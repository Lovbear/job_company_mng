<template>
	<div class="form_fixed" @click.self="close">
		<div class="form">
			<div class="title">
				添加角色
			</div>
			<div class="close" @click="close">
				<i class="el-icon-close"></i>
			</div>
			<el-form label-width="100px">
				<el-form-item label="昵称">
					<el-input placeholder="请输入角色名称"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button>确定</el-button>
					<el-button>取消</el-button>
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
