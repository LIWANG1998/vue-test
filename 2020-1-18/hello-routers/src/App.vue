<template>
	<div id="app">
		<!-- 头部 -->
		<header>
			<ul class="menu-list">
				<li v-for="(item, index) in routes" :key="index">
					<router-link :to="item.path">{{item.text}}</router-link>
				</li>
			</ul>`
		</header>
		<!-- 内容 -->
		<transition 
		enter-active-class="animated flip" 
		leave-active-class="animated jackInTheBox">
			<router-view />
		</transition>
		<!-- 尾部 -->
		<footer>
			<small>CopyRight &copy; 2019. 版权归「李鸿耀」所有</small>
		</footer>
	</div>
</template>

<script>
	import 'animate.css'
	export default {
		name: "App",
		data() {
			return {
				routes: [{
						path: "/",
						text: "主页"
					},
					{
						path: "/about",
						text: "关于"
					},
					{
						path: "/search",
						text: "搜索"
					},
					{
						path: "/mine",
						text: "我的"
					},
				]
			}
		}
	}
</script>

<style lang="less">
	#app {
		text-align: center;
	}

	* {
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
	}

	ul {
		list-style: none;
	}

	.menu-list {
		background: #333333;
		padding: 35px 0;
		text-align: center;

		li {
			display: inline-block;
			margin: 0 12px;

			a {
				color: #ffffff;

				&:hover {
					color: orange;
				}
			}
		}
	}


	footer {
		line-height: 50px;
		color: #ffffff;
		background: #333333;
		text-align: center;
	}
</style>
