<template>
	
	<div id="openList">
		
		<top-head></top-head>
		<div class="mt50">
			{{msg}}
			<br />
			你好
		</div>
		<!--<tabbar></tabbar>-->
		
	</div>
	
	
</template>

<script>
	
	import tabbar from './tabbar.vue'
	import topHead from './topHead.vue'
	
	export default {
		name:"openList",
		data(){
			return {
				msg:"这是openList"
			}
		},
		components:{
			tabbar,
			topHead
		}
	}
	
</script>

<style>
	
</style>