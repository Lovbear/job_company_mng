<template>
	<div class="interview">
		<div class="title">
			面试时间设置/每日
		</div>
		<div class="form_item">
			<el-time-picker
			    is-range
			    v-model="value1"
			    range-separator="至"
			    start-placeholder="开始时间"
			    end-placeholder="结束时间"
			    placeholder="选择时间范围">
			  </el-time-picker>
			  <el-button type="primary" class="big">确定保存</el-button>
		</div>
	</div>
</template>

<script>
	 export default {
	    data() {
	      return {
	        value1: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
	      };
	    }
	  }
</script>

<style lang="less" scoped="scoped">
	.interview{
		.title{
			margin: 20px;
			font-size: 30px;
			text-align: left;
		}
		.form_item{
			margin-left: 20px;
			.big{
				margin-left: 10px;
			}
		}
	}
</style>
