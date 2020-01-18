import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../pages/login.vue';
import Home from '../pages/Home.vue';
Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',			 // => 设置路径		
            name: 'login',		 // => 命名路由
            component: Login      // => 关联组件
        },
        {
            path: '/',			 // => 设置路径		
            name: 'home',		 // => 命名路由
            component: Home      // => 关联组件
        }
        ,
        {
            path: '/goodsd/:id/:name',			 // => 设置路径		
            name: 'goodsd',		 // => 命名路由
            component: Home      // => 关联组件
        }
    ]
})