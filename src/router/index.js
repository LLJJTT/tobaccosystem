import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import ResetPassWord from '@/components/resetpassword'
import Index from '@/components/index'
import Home from '@/components/home'
import NoHandle from '@/components/nohandle'
import AlreadyHandle from '@/components/alreadyhandle'
import ReturnGoods from '@/components/returngoods'
import Query from '@/components/query'
import Add from '@/components/add'
import LookStock from '@/components/lookstock'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:'/',
  		redirect:'/login'
  	},
    {
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/resetpassword',
      name: 'resetpassword',
      component: ResetPassWord
    },
    {
      path:'/index',
      component:Index,
      children:[
        {
          path:'',
          redirect:'/index/home'
        },{
          path:'home',
          name:'home',
          component:Home
        },{
          path:'nohandle',
          name:'nohandle',
          component:NoHandle
        },{
          path:'alreadyhandle',
          name:'alreadyhandle',
          component:AlreadyHandle
        },{
          path:'returngoods',
          name:'returngoods',
          component:ReturnGoods
        },{
          path:'query',
          name:'query',
          component:Query
        },{
          path:'add',
          name:'add',
          component:Add
        },{
          path:'lookstock',
          name:'lookstock',
          component:LookStock
        }
      ]
    }
  ]
})
