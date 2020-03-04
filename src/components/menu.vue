<template>
	<div class="menubar">
		  <el-col :span="24">
		    <el-menu
		      default-active="2"
		      class="el-menu-vertical-demo"
		      @open="handleOpen"
		      @close="handleClose"
		      background-color="#545c64"
		      text-color="#fff"
		      active-text-color="#ffd04b">
			  <div v-for="(item,i) in mainRouters" :key='i'>
				  <el-submenu :index="item.meta.index+''" v-if="item.children">
					<template slot="title">
					  <i class="el-icon-location"></i>
					  <span>{{ $t('menu.'+item.name)}}</span>
					</template>
					<el-menu-item-group v-if="item.children.length">
					  <el-menu-item v-for="(it,n) in item.children" :key='n' :index="it.meta.index">
						  {{ $t('menu.'+it.name)}}
					  </el-menu-item>
					</el-menu-item-group>
				  </el-submenu>
				  <el-menu-item :index="item.meta.index+''" v-else>
					<i class="el-icon-menu"></i>
					<span slot="title">{{ $t('menu.'+item.name)}}</span>
				  </el-menu-item>
			  </div>
		    </el-menu>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	import { mainRouters } from '../router'
	export default {
		name:'menuBar',
		data(){
			return {
				mainRouters:mainRouters[0].children
			}
		},
	    methods: {
	      handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	      },
	      handleClose(key, keyPath) {
	        console.log(key, keyPath);
	      }
	    }
	  }
</script>

<style lang="less">
	.menubar{
		width: 240px;
		height: 100%;
		background-color: rgb(84, 92, 100);
		.el-menu{
			text-align: left;
		}
	}
</style>
