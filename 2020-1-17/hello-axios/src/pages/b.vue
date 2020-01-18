<template>
	<div class="page b">
		<h1>This is B page.</h1>
	</div>
</template>

<script>
	export default {
		name: "B",
		data() {
			return {
				
			}
		},
		created() {
			// 访问路由参数
			console.log(this.$route.params);
		}
	}
</script>

<style></style>

