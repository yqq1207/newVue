<template>
	
	<div id="messageList">
		
		<top-head></top-head>
			
		
		<div class="mt50">
			
			<ul class="message-item">
				
				<li v-for="item in messageList" class="message-list displayFlexStart">
					<img src="../assets/logo.png"/>
					<div class="pl5 message-content">
						<p class="f16">{{item.personInfo}}</p>
						<p class="f14 overflowEll1 c90">{{item.messageInfo}}</p>
					</div>
					<div class="messageTime">
						<p class="f12">{{item.messageTime}}</p>
						<span class="f12 border-radius5" style="float: right;">12</span>
					</div>
				</li>
			</ul>
			
		</div>
		
		<!--<tabbar></tabbar>-->
	</div>
	
	
</template>

<script>
	
	console.log(window.innerHeight);
//	document.getElementsByClassName('message-item')[0].style.height = 500+'px';

	import tabbar from './tabbar.vue'
	import topHead from './topHead.vue'
	
	export default {
		name:"messageList",
		data(){
			return {
				msg:"这是messageList",
				messageList:[
					{
						personInfo:'1',
						messageInfo:'你好',
						messageTime:"12.53"
					},
					{
						personInfo:'2',
						messageInfo:'你好222',
						messageTime:"12.53"
					},{
						personInfo:'3',
						messageInfo:'你好333',
						messageTime:"12.53"
					},{
						personInfo:'4',
						messageInfo:'你好444你好444你好444你好444你好444你好444你好444你好444',
						messageTime:"12.53"
					},{
						personInfo:'1',
						messageInfo:'你好',
						messageTime:"12.53"
					},
					{
						personInfo:'2',
						messageInfo:'你好222',
						messageTime:"12.53"
					},{
						personInfo:'3',
						messageInfo:'你好333',
						messageTime:"12.53"
					},{
						personInfo:'4',
						messageInfo:'你好444',
						messageTime:"12.53"
					},{
						personInfo:'1',
						messageInfo:'你好',
						messageTime:"12.53"
					},
					{
						personInfo:'2',
						messageInfo:'你好222',
						messageTime:"12.53"
					},{
						personInfo:'3',
						messageInfo:'你好333',
						messageTime:"12.53"
					},{
						personInfo:'4',
						messageInfo:'你好444',
						messageTime:"12.53"
					},
					{
						personInfo:'2',
						messageInfo:'你好222',
						messageTime:"12.53"
					},{
						personInfo:'3',
						messageInfo:'你好333',
						messageTime:"12.53"
					},{
						personInfo:'4',
						messageInfo:'你好444',
						messageTime:"12.53"
					}
				]
			}
		},
		components:{
			tabbar,
			topHead
		}
	}
	
</script>

<style>
	.message-item{
		overflow: scroll;
	}
	.message-item{
		overflow: auto;
	}
	.message-list{
		padding-left: 10px;
		padding-right: 10px;
		padding-top: 5px;
		padding-bottom: 5px;
		border-bottom: 1px solid #ddd;
	}
	.message-list img{
		width: 30px;
		height: 30px;
	}
	.message-content{
		width: calc(100% - 80px);
	}
	.border-radius5{
		padding: 2px 3px;
		border-radius: 15px;
		background: #a4d5ed;
	}
</style>