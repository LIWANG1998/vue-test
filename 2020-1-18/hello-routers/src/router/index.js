import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Mine from '../views/Mine.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		name: 'home',
		component: Home,
		meta: {
			title: "主页"
		}
	},
	{
		path: '/search',
		name: 'search',
		component: Search,
		meta: {
			title: "搜索"
		}
	},
	{
		path: '/details',
		name: 'details',
		component: Details,
		meta: {
			title: "详情"
		}
	},
	{
		path: '/mine',
		name: 'mine',
		component: Mine,
		meta: {
			title: "个人中心"
		}
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
		meta: {
			title: "关于"
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	scrollBehavior (to, from, savedPosition) {
	  return { x: 0, y: 500 }
	}
})

export default router
