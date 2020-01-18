import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let title;
router.beforeEach((to, from, next) => {
	title = to.meta.title;
	next()
});

new Vue({
  router,
  render: h => h(App),
  data: {
	  title
  }
}).$mount('#app')
