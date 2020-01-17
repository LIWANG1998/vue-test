import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import Mock from 'mockjs'
//导入路由
import router from './router/index.js'

Vue.config.productionTip = false

Vue.prototype.$axios = Axios;
Vue.prototype.$mock = Mock.mock;
Axios.defaults.baseURL = 'http://192.168.110.65:8090';
// 添加请求拦截器
Axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  console.log(config)
  return config;
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
Axios.interceptors.response.use(response => {
  // 对响应数据做点什么 
  console.log(response.data)
  return response;
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error);
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
