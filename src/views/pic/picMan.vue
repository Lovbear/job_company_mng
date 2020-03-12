<template>
	<div class="picMan">
		<el-card>
			<el-button @click="addpic">添加</el-button>
		</el-card>
		<div class="table">
			  <el-table
			    :data="tableData"
			    style="width: 100%">
			    <el-table-column
			      label="图片"
			      >
			      <template slot-scope="scope">
						<img src="" class="pic_man" />
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="权重"
			      >
			      <template slot-scope="scope">
			        <el-popover trigger="hover" placement="top">
			          <p>姓名: {{ scope.row.name }}</p>
			          <p>住址: {{ scope.row.address }}</p>
			          <div slot="reference" class="name-wrapper">
			            <el-tag size="medium">{{ scope.row.name }}</el-tag>
			          </div>
			        </el-popover>
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
			  <div class="pagination">
				  <el-pagination
				    small
				    layout="prev, pager, next"
				    :total="50">
				  </el-pagination>
			  </div>
		</div>
		<addPic v-if='addpicShow' @close='addpicShow=false'></addPic>
	</div>
</template>

<script>
  import addPic from "@components/form/addPic.vue";
  export default {
	components:{ addPic },
    data() {
      return {
		addpicShow:false,
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
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
	  addpic(){
		  this.addpicShow=true;
	  }
    }
  }
</script>

<style lang="less">
	.picMan{
		width: 100%;
		.el-card{
			text-align: left;
		}
		.table{
			padding: 30px;
			max-height:636px;
			overflow-y: scroll;
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
</style>
