import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
Vue.use(VueRouter)
// import News from '../pages/News.vue';
//导出路由配置
export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',			 // => 设置路径		
            name: 'home',		 // => 命名路由
            component: Home      // => 关联组件
        },
        {
            path: '/news',			 // => 设置路径		
            name: 'news',		 // => 命名路由
            component: () => import(/* webpackChunkName: "about" */ '../pages/News.vue')
        }
    ]
});