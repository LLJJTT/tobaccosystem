import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Register from '@/components/register'
import ResetPassWord from '@/components/resetpassword'
import Index from '@/components/index'
import Home from '@/components/home'
import AllSale from '@/components/allsale'
import ReturnGoods from '@/components/returngoods'
import Query from '@/components/query'
import Add from '@/components/add'
import Delete from '@/components/delete'

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
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
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
          path:'allsale',
          name:'allsale',
          component:AllSale
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
          path:'delete',
          name:'delete',
          component:Delete
        }
      ]
    }
  ]
})
