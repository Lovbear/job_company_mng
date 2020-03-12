<template>
	<div class="form_fixed" @click.self="close">
		<div class="form">
			<div class="title">
				添加招聘岗位
			</div>
			<div class="close" @click="close">
				<i class="el-icon-close"></i>
			</div>
			<el-form label-width="100px">
				<el-form-item label="岗位名称">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="经验要求">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="学历要求">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="工作地点">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="薪资待遇">
					<el-row>
						<el-col :span="5">
							<el-input v-model="lowMoney">
								 <template slot="suffix">K</template>
							</el-input>
						</el-col>
						<el-col :span="2">
							-
						</el-col>
						<el-col :span="5">
							<el-input>
								 <template slot="suffix">K</template>
							</el-input>
						</el-col>
					</el-row>
				</el-form-item>
				<el-form-item label="招聘人数">
					<el-input></el-input>
				</el-form-item>
				<el-form-item label="工作地点">
					<el-input type="textarea" :rows="4"></el-input>
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
