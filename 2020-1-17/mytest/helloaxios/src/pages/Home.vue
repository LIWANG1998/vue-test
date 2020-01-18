<template>
  <div class="pages home">
    <h1>this is home page</h1>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  created() {
    let islogin = false;
    if (!islogin) {
      this.$router.push({
        path: "/Login"
      });
    }
  }
};
</script>
<style>
</style>