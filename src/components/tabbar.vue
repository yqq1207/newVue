<template>
	
	<div id="tabbar" class="">
		
		<ul class="displayFlex p0 tabbarContent">
			<li>
				<router-link to="/messageList">消息</router-link>
			</li>
			<li>
				<router-link to="/friendList">好友</router-link>
			</li>
			<li>
				<router-link to="/nearMessageList">最近消息</router-link>
			</li>
			<li>
				<router-link to="/openList">空间</router-link>
			</li>
		</ul>
		
		<router-view></router-view>
		
	</div>
	
</template>

<script>
	
	export default {
		name:"tabbar",
		data(){
			return {
				
			}
		}
	}
	
</script>

<style>
	*{
		margin: 0;
		padding: 0;
	}
	.displayFlex{
		display: flex;
		flex-flow: row;
		flex-wrap: nowrap;
		justify-content: space-around;
	}
	.p0{
		padding: 0;
	}
	.tabbarContent{
		/*background-image: linear-gradient(180deg,#000,#999);*/
		background-color: #fafafa;
		margin: 0;
		line-height: 50px;
		height: 50px;
		box-shadow: #68B8F8;
	}
	.tabbarContent li{
		list-style: none;
	}
	.tabbarContent li a{
		text-decoration: none;
		/*color: #ddd;*/
		color: #939499;
	}
	.tabbarContent li a.router-link-active{
		/*color: #aaa;*/
		color: #68b8f8;
	}
	.tabbarContent{
		width: 100%;
		position: fixed;
		bottom: 0;
		z-index: 2;
	}
	.mt50{
		margin-top: 41px;
	}
	#topHead{
		padding-left: 10px;
	    padding-right: 10px;
	    box-sizing: border-box;
	}
	.displayFlexStart{
		display: flex;
		flex-grow: inherit;
		flex-flow: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
	}
	.f12{
		font-size: 12px;
	}
	.f14{
		font-size: 14px;
	}
	.f16{
		font-size: 16px;
	}
	.overflowEll{
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.overflowEll1{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}
	.overflowEll2{
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.pl5{
		padding-left: 5px;
	}
	.c90{
		color: #909091;
	}
</style>