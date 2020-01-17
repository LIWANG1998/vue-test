import Vue from 'vue'
import App from './App.vue'

// 组件
import hw from './components/Count'
Vue.config.productionTip = false
Vue.component("app-head", hw)
// 组件

new Vue({
  render: h => h(App),
}).$mount('#app')
