<template>
	
	<div id="topHead" class="displayFlex">
		
		<img src="../assets/logo.png"  alt="" />
		<p>{{this.$route.meta.title}}</p>
		<p v-if="this.$route.meta.isShow">添加</p>
		<p v-if="this.$route.meta.isHide">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
		
	</div>
	
</template>

<script>
	
	export default {
		name:"topHead",
		data(){
			return {
				
			}
		}
	}
	
</script>

<style>
	body{
		margin: 0;
	}
	#topHead{
		color:white;
	}
	#topHead.displayFlex{
		display: flex;
		flex-flow: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items:center;
	}
	#topHead{
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 2;
		background-image: linear-gradient(90deg, #5D99F9 0%, #61B9F9 100%);
	}
	#topHead img{
		width: 40px;
		height: 40px;
		border-radius: 100%;
	}
	
</style>