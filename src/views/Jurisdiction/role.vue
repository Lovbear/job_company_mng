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
		<el-card class="navbar">
			<el-button @click="addRoles">添加</el-button>
		</el-card>
		<div class="tablelist">
			<div class="flex_between_v list">
				<div class="title">
					角色
				</div>
				<div class="option flex_start_v">
					<el-button size="small">
						权限
					</el-button>
					<el-button size="small">
						编辑
					</el-button>
					<el-button size="small">
						删除
					</el-button>
				</div>
			</div>
		</div>
		<addroles v-if='formShow' @close='formShow=false'></addroles>
	</div>
</template>

<script>
	import addroles from "@components/form/addroles.vue"
	export default{
		components:{ addroles },
		name:'role',
		data(){
			return {
				formShow:false,
				tabList:['管理员列表','角色列表',"操作日志"],
				curIndex:1,
				tableData:[]
			}
		},
		methods:{
			addRoles(){
				this.formShow=true;
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
		.tablelist{
			padding: 0 30px;
			.list{
				padding:10px;
				border-bottom: 1px solid #bdbdbd;
			}
		}
	}
</style>
