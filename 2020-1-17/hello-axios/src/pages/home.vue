<template>
	<div class="page home">
		<h1>This is Home page.</h1>
	</div>
</template>

<script>
	export default {
		name: "Home",
		data() {
			return {
				
			}
		},
		created() {
			let isLogin = true;
			this.globalData.message = "Hello, muzili!";
			if(!isLogin) {
				// 跳转至登录页面
				// location.href = ""
				this.$router.push({
					path: "/login"
				})
			}
		}
	}
</script>

<style></style>
