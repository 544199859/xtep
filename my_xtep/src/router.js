import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
	{
		path : '/category',
		name : 'category',
		component: () => import('./views/Category.vue')
	},
	{
		path : '/cart',
		name : 'cart',
		component: () => import('./views/Cart.vue')
	},
	{
		path : '/user',
		name : 'user',
		component: () => import('./views/User.vue')
	},
	{
		path : '/productList',
		name : 'productList',
		component: () => import('./views/ProductList.vue')
	},
	
	{
		path : '/details',
		name : 'details',
		component: () => import('./views/Details.vue')
	},
	

    // {
    //   path: '/shopcart',
    //   name: 'shopcart',
    //   component: () => import('./views/ShopCart.vue'),
    // },

    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },

    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue')
    },

    {
      path: '/userlist',
      name: 'userlist',
      component: () => import('./views/UserList.vue'),
    },



    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
