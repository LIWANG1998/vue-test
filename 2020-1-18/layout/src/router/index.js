import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Mine from '../views/Mine.vue'
import ShoppingCart from '../views/ShoppingCart.vue'
import About from '../views/About.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	meta: {
		title: "主页"
	}
  },
  {
    path: '/about',
    name: 'About',
    component: About,
	meta: {
		title: "关于"
	}
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: ShoppingCart,
	meta: {
		title: "购物车"
	}
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine,
	meta: {
		title: "我的"
	}
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
