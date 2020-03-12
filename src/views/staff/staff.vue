<template>
	<div class="staff">
		<el-card>
				<el-row>
					<el-col :span='10' class="flex_start">
						  <el-input
							placeholder="请输入内容"
							suffix-icon="el-icon-date"
							v-model="input1">
						  </el-input>
						  <el-button type="primary" icon='el-icon-search' class="ml20">搜索</el-button>
						  <el-button icon="el-icon-download" class="ml20">数据导出</el-button>
					</el-col>
					
					
					<el-col :span='2' :offset="11">
						<el-button type="primary" @click='addmember'>添加</el-button>
					</el-col>
				</el-row>
		</el-card>
		<div class="table">
			  <el-table
			    :data="tableData"
			    style="width: 100%">
			    <el-table-column
			      label="岗位名称"
			      >
			      <template slot-scope="scope">
						<div></div>
			      </template>
			    </el-table-column>
				<el-table-column
				  label="经验要求"
				  >
				  <template slot-scope="scope">
						<div></div>
				  </template>
				</el-table-column>
			    <el-table-column
			      label="学历要求"
			      >
			      <template slot-scope="scope">
			    		<div></div>
			      </template>
			    </el-table-column>
				<el-table-column
				  label="工作地点"
				  >
				  <template slot-scope="scope">
						<div></div>
				  </template>
				</el-table-column>
				<el-table-column
				  label="薪资待遇"
				  >
				  <template slot-scope="scope">
						<div></div>
				  </template>
				</el-table-column>
				<el-table-column
				  label="招聘人数"
				  >
				  <template slot-scope="scope">
						<div></div>
				  </template>
				</el-table-column>
				<el-table-column
				  label="发布时间"
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
		<addStaff v-if='staffshow' @close='staffshow=false'></addStaff>
	</div>
</template>

<script>
  import addStaff from "@components/form/addStaff.vue";
  export default {
	components:{ addStaff },
    data() {
      return {
		staffshow:false,
		searchFrom:{
			date:''
		},  
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
	  addmember(){
		  this.staffshow=true;
	  },
      handleEdit(index, row) {
        console.log(index, row);
		this.staffshow=true;
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style lang="less">
	.staff{
		width: 100%;
		.el-card{
			text-align: left;
		}
		.table{
			padding: 30px;
			height:600px;
			overflow-y: scroll;
			border: 1px solid #bdbdbd;
			border-radius: 4px;
			.pic_man{
				width:140px;
				height:100px;
			}
		}
		.pagination{
			margin-top: 10px;
			text-align: right;
		}
	}
	.ml20{
		margin-left: 20px;
	}
</style>
