import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import messageList from '@/components/messageList'
import friendList from '@/components/friendList'
import nearMessageList from '@/components/nearMessageList'
import openList from '@/components/openList'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/',
  		redirect:'/friendList'
  	},{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
    	path:'/friendList',
    	name:'friendList',
    	component:friendList,
    	meta:{
    		title:"好友列表",
    		isHide:false,
    		isShow:true
    	}
    },{
    	path:'/nearMessageList',
    	name:'nearMessageList',
    	component:nearMessageList,
    	meta:{
    		title:"最近会话",
    		isHide:true,
    		isShow:false
    	}
    },{
    	path:'/openList',
    	name:'openList',
    	component:openList,
    	meta:{
    		title:"空间动态",
    		isHide:true,
    		isShow:false
    	}
    },{
    	path:"/messageList",
    	name:'messageList',
    	component:messageList,
    	meta:{
    		title:'消息列表',
    		isHide:true,
    		isShow:false
    	}
    }
  ]
})
