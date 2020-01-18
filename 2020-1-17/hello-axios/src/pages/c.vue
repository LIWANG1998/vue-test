<template>
	<div class="page c">
		<h1>This is C page.</h1>
	</div>
</template>

<script>
	export default {
		name: "C",
		data() {
			return {
				
			}
		},
		created() {
			console.log(this.globalData.message);
			console.log(this.$route.query);
		}
	}
</script>

<style></style>

