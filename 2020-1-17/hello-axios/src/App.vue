<template>
	<div id="app">
		<!-- 头部 -->
		<header>
			<ul class="list">
				<li><router-link exact :to="{name: 'Home'}">主页</router-link></li>
				<li><router-link to="/about">关于</router-link></li>
			</ul>
		</header>
		<!-- 内容 -->
		<main>
			<router-view></router-view>
		</main>
	</div>
</template>

<script>
	import Qs from 'qs';
	export default {
		name: 'app',
		created() {
			/*
			const URI = "http://192.168.110.65:8090/info";
			this.$axios.get(URI, {
				params: {
					id: 1,
					city: "chengdu"
				}
			}).then(res => {
				console.log(res);
			}).catch(err => {
				console.log(err.message);
			});*/
			/*
			this.$axios.post("/login", Qs.stringify({
				username: "lihy",
				password: "123"
			})).then(res => {
				console.log(res);
			}).catch(err => {
				console.log(err.message)
			});*/
			let data = this.$mock({
				"city":'@county(true)',
				"date":'@datetime("yyyy-MM-dd HH:mm:ss")',
				"list|10": [{
					"id|+1": 1,
					"name": "@cname",
					"star|1-5":"☆"
				}]
			})
			console.log(data);

		},
		components: {

		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	ul {
		list-style: none;
	}
	header {
		height: 64px;
		background: #333333;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.list {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.list li {
		margin: 0 12px;
	}
	a {
		color: #ffffff;
	}
	main {
		height: calc(100% - 64px);
	}
	a.router-link-active {
		color: orange;
	}
	
</style>
