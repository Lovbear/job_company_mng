<template>
	<div class="jurisdiction">
		<div class="tablist flex_start_v">
			<div class="tab_item" 
				v-for="(item,index) in tabList" 
				:key='index'
				:class="{'active':index==curIndex}"
				>
				{{item}}
			</div>
		</div>
		<div class="table">
			  <el-table
			    :data="tableData"
			    style="width: 100%">
			    <el-table-column
			      label="账号"
			      >
			      <template slot-scope="scope">
						<div></div>
			      </template>
			    </el-table-column>
				<el-table-column
				  label="管理员昵称"
				  >
				  <template slot-scope="scope">
						<div></div>
				  </template>
				</el-table-column>
			    <el-table-column
			      label="角色"
			      >
			      <template slot-scope="scope">
			    		<div></div>
			      </template>
			    </el-table-column>
				<el-table-column
				  label="状态"
				  >
				  <template slot-scope="scope">
						<div></div>
				  </template>
				</el-table-column>
			    <el-table-column label="操作">
			      <template slot-scope="scope">
			        <el-button
			          size="mini"
			          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
			        <el-button
			          size="mini"
			          type="danger"
			          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
			      </template>
			    </el-table-column>
			  </el-table>
		</div>
		<div class="pagination">
			  <el-pagination
				small
				layout="prev, pager, next"
				:total="50">
			  </el-pagination>
		</div>
	</div>
</template>

<script>
	export default{
		name:'manaber',
		data(){
			return {
				tabList:['管理员列表','角色列表',"操作日志"],
				curIndex:2,
				tableData:[]
			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.jurisdiction{
		width: 100%;
		.tablist{
			.tab_item{
				padding: 8px 16px;
				&.active{
					color: #409EFF;
					border-bottom: 2px solid #409EFF;
				}
			}
		}
		.navbar{
			width: 100%;
			text-align: left;
		}
		.table{
			height: 600px;
			overflow-y: scroll;
		}
		.pagination{
			text-align: right;
		}
	}
</style>
