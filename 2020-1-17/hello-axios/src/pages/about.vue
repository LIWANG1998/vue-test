<template>
	<div class="page about">
		<h1>This is About page.</h1>
		<ul class="list">
			<li>
				<router-link to="/about/a">A</router-link>
			</li>
			<!-- <li><router-link to="/about/b/henry/1001">B</router-link></li> -->
			<li>
				<router-link :to="{name:'B', params:{name:'lihy', id:'1001'}}">B</router-link>
			</li>
			<li>
				<!-- <router-link to="/about/c?job=web&city=chengdu">C</router-link> -->
				<router-link :to="{path:'/about/c', query:{name:'lihy', city:'beijing'}}">C</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: "About",
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	a {
		color: blue;
	}

	a.router-link-active {
		color: orange;
	}
</style>
