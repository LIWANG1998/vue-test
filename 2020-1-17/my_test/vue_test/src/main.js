import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import App from './App.vue'
import router from './router/index.js'
Vue.config.productionTip = false
Vue.prototype.globalvar = {};
Vue.use(ElementUI).use(VueAwesomeSwiper);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
