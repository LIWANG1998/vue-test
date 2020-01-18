<template>
  <div id="app">
    <!-- 导航栏 -->
	<header class="navigationBar">
		<h3 class="title">{{title}}</h3>
	</header>
	<!-- 内容 -->
    <router-view/>
	<!-- 尾部 -->
	<footer class="tabBar">
		<router-link to="/">主页</router-link>
		<router-link to="/about">关于</router-link>
		<router-link to="/shopping-cart">购物车</router-link>
		<router-link to="/mine">我的</router-link>
	</footer>
  </div>
</template>

<script>
	// import router from './router/index.js';
	// router.beforeEach((to, from, next) => {
	// 	next(vm => {
	// 		this.title = to.meta.title;
	// 	})
	// });
	export default {
		name: "App",
		watch:{ 
			
			$route(route) {
				console.log(route)
				let names = ["Home", "About", "ShoppingCart", "Mine"];
				if(names.indexOf(route.name) != -1) {
					this.title = route.meta.title;
				}
				
			}
		},
		data() {
			return {
				title: "主页"
			}
		}
	}
</script>
<style lang="less">
* {margin: 0; padding: 0;}
a {text-decoration: none;}

html, body, #app {
	height: 100%;
}

.navigationBar {
	height: 64px;
	background: #333333;
	color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
}

.page {
	height: calc(100% - 49px - 64px);
	overflow-y: scroll;
}
.tabBar {
	height: 49px;
	background: #333333;
	display: flex;
	justify-content: center;
	align-items: center;
	a {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 25%;
		height: 100%;
		color: #ffffff;
		box-sizing: border-box;
		&:not(:last-child) {
			border-right: 1px #f5f5f5 solid;
		}
	}
}


</style>
