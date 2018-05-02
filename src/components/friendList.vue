<template>
	
	<div id="friendList">
		<top-head></top-head>
		<div class="mt50">
			{{msg}}
			<br />
			你好
		</div>
		<input type="text" v-model="tel" />
		<span @click="sendTel1">点击1</span>
		<span @click="sendTel2">点击2</span>
		<p>{{tel}}</p>
		<!--<tabbar></tabbar>-->		
	</div>
	
	
</template>

<script>
	
	import tabbar from './tabbar.vue'
	import topHead from './topHead.vue'
	
	export default {
		name:"friendList",
		data(){
			return {
				msg:"这是friendList",
				tel:''
			}
		},
		components:{
			tabbar,
			topHead
		},
		methods:{
			"sendTel1":function(){
				console.log(this)
			},
			"sendTel2":() =>{
				console.log(this)
			}
//			
//			
		}
	}
	
</script>

<style>
	
	/*#friendList{
		padding-left: 15px;
		padding-right: 15px;
	}*/
</style>