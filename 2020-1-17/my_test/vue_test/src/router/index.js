import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../pages/login.vue';
import Home from '../pages/Home.vue';
import goodsd from '../pages/goodsd.vue';
Vue.use(VueRouter)

const routes = [
    {
        path: '/',			 // => 设置路径		
        name: 'home',		 // => 命名路由
        component: Home,      // => 关联组件
        meta: {
            title: "主页"
        }
    }, {
        path: '/login',			 // => 设置路径		
        name: 'login',		 // => 命名路由
        component: Login,      // => 关联组件
        meta: {
            title: "登录页面"
        }
    }, {
        path: '/goodsd/:id',			 // => 设置路径		
        name: 'goodsd',		 // => 命名路由
        component: goodsd,      // => 关联组件
        meta: {
            title: "详情页面"
        }
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
export default router

// export default new VueRouter({
//     mode: 'history',
//     routes: [
//         {
//             path: '/login',			 // => 设置路径		
//             name: 'login',		 // => 命名路由
//             component: Login      // => 关联组件
//         },
//         {
//             path: '/',			 // => 设置路径		
//             name: 'home',		 // => 命名路由
//             component: Home      // => 关联组件
//         }
//         ,
//         {
//             path: '/goodsd/:id/:name',			 // => 设置路径		
//             name: 'goodsd',		 // => 命名路由
//             component: Home      // => 关联组件
//         }
//     ]
// })