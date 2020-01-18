import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.vue'
import A from '../pages/a.vue'
import B from '../pages/b.vue'
import C from '../pages/c.vue'
import Login from '../pages/login.vue'

Vue.use(Router);


// 导出路由配置
export default new Router({
	mode: "history",
	routes: [{
		path: '/', // => 设置路径		
		name: 'Home', // => 命名路由
		component: Home
	}, {
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../pages/about.vue'),
		redirect: "/about/a",
		// 子路由
		children: [
			{path: "a", name: "A", component: A},
			{path: "b/:name/:id", name: "B", component: B},
			{path: "c", name: "C", component: C}
		]
	},{
		name: "login",
		path: "/login",
		component: Login
	}],
	
});
