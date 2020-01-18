import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 移动端布局
// 标题栏
// 内容
// 尾部
router.beforeEach((to, from, next) => {
	 console.log(to, from );
	 console.log(to.meta.title);
	 if(to.name == "mine") {
		 let login = false;
		 if(!login)  {
			 alert("您当前未登陆!");
			 next(false)
		 }
		 return;
	 }
	 next();
});


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
