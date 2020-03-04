<template>
	<div class="header flex_between_v">
		<div class="title">
			{{ $t("title") }}
		</div>
		<div class="right flex_start_v">
			<div class="userInfo">
				<i class='el-icon-user-solid'></i>
				admin
			</div>
			<div class="hasAuth fontRed">
				{{$t('noAuth')}}
			</div>
			<div class="relexPass">
				{{$t('relaxPass')}}
			</div>
			<div class="loginOut">
				{{$t('loginOut')}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'headerbar'
	}
</script>

<style lang="less" scoped="scoped">
	.header{
		background: #bdbdbd;
		padding: 0 30px;
		height: 80px;
		line-height: 80px;
		.title{
			font-size:30px;
		}
		.right{
			div{
				padding: 0 10px;
				color: #fff;
				cursor: pointer;
			}
		}
		
	}
</style>
