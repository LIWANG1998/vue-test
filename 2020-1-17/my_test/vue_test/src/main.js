import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import App from './App.vue'
// import router from './router/index.js'

import router from './router'
// 移动端布局
// 标题栏
// 内容
// 尾部
router.beforeEach((to, from, next) => {
  console.log(to, from);
  console.log(to.meta.title);
  if (to.name == "mine") {
    let login = false;
    if (!login) {
      alert("您当前未登陆!");
      next(false)
    }
    return;
  }
  next();
});

Vue.config.productionTip = false
Vue.prototype.globalvar = {};
Vue.use(ElementUI).use(VueAwesomeSwiper);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
