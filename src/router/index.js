import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/login',
    name: 'login',
    component:()=> import("../views/login/login.vue")
  },
  {
    path: '/register',
    name: 'register',
    component:()=> import("../views/register/register.vue")
  },
  {
    path: '/forgetPass',
    name: 'forgetPass',
    component:()=> import("../views/forgetPass/forgetPass.vue")
  },
  {
    path: '/setCompany',
    name: 'setCompany',
    component:()=> import("../views/register/setCompany.vue")
  },
  {
    path: '/auth',
    name: 'auth',
    component:()=> import("../views/register/auth.vue")
  }
]

export const mainRouters=[
	{
	  path: '/',
	  name:'pageEnter',
	  redirect:'/picMan',
	  component:()=> import("../views/pageEnter.vue"),
	  children:[
		 {
			 path:"/picMan",
			 name:'picMan',
			 component:()=>import("../views/pic/picMan.vue"),
			 meta:{ index:1 }
		 },
		 {
			 path:"/vedioMan",
			 name:'vedioMan',
			 component:()=>import("../views/vedio/vedioMan.vue"),
			  meta:{ index:2 }
		 },
		 {
			 path:"/postMan",
			 name:'postMan',
			 component:()=>import("../views/postMan/postMan.vue"),
			  meta:{ index:3 }
		 },
		 {
			 path:"/staff",
			 name:'staff',
			 component:()=>import("../views/staff/staff.vue"),
			  meta:{ index:4 }
		 },
		 {
			 path:"/compayMan",
			 name:'compayMan',
			 redirect:'/compayInfo',
			 component:()=>import("../views/compayMan/index.vue"),
			  meta:{ index:6 },
			 children:[
				 {
					 path:"/compayInfo",
					 name:'compayInfo',
					 component:()=>import("../views/compayMan/compayInfo.vue"),
					  meta:{ index:'6-1' }
				 },
				 {
					 path:"/interview",
					 name:'interview',
					 component:()=>import("../views/compayMan/interview.vue"),
					 meta:{ index:'6-2' }
				 }
			 ]
		 },
		 {
			 path:"/Jurisdiction",
			 name:'Jurisdiction',
			 redirect:'/mamber',
			 component:()=>import("../views/Jurisdiction/index.vue"),
			 meta:{ index:'7' },
			 children:[
				 {
					 path:"/mamber",
					 name:'mamber',
					 component:()=>import("../views/Jurisdiction/mamber.vue"),
					  meta:{ index:'7-1' }
				 },
				 {
					 path:"/role",
					 name:'role',
					 component:()=>import("../views/Jurisdiction/role.vue"),
					  meta:{ index:'7-2' }
				 },
				 {
					 path:"/log",
					 name:'log',
					 component:()=>import("../views/Jurisdiction/log.vue"),
					  meta:{ index:'7-3' }
				 }
			 ]
		 }
	  ]
	}
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
