<template>
	<div class="vedioMan">
		<div class="table">
			  <el-table
			    :data="tableData"
			    style="width: 100%">
			    <el-table-column
			      label="视频"
			      >
			      <template slot-scope="scope">
						<vedio src="" class='video-box'></vedio>
			      </template>
			    </el-table-column>
			    <el-table-column
			      label="视频标题"
			      >
			      <template slot-scope="scope">
					<div>精心策划</div>
			      </template>
			    </el-table-column>
			    <el-table-column label="操作">
			      <template slot-scope="scope">
			        <el-button
			          size="mini"
			          @click="handleEdit(scope.$index, scope.row)">上传</el-button>
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
		<addVedio @close='addvedioShow=false' v-if='addvedioShow'></addVedio>
	</div>
</template>

<script>
  import addVedio from "@components/form/addVedio.vue";
  export default {
	components:{ addVedio },
    data() {
      return {
		addvedioShow:false,
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
		this.addvedioShow=true;
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style lang="less">
	.vedioMan{
		width: 100%;
		.el-card{
			text-align: left;
		}
		.table{
			padding: 30px;
			max-height:636px;
			overflow-y: scroll;
			video-box{
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
