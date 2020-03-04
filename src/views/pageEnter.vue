<template>
	<div class="main">
		<headbar></headbar>
		<div class="container">
			<menubar></menubar>
			<router-view/>
		</div>
	</div>
</template>

<script>
	import headbar from "@components/header.vue"
	import menubar from "@components/menu.vue"
	
	export default {
		name:"pageEnter",
		components:{
			headbar,
			menubar
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style>
</style>
