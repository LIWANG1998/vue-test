<template>
  <div class="pages B">
    <h1>this is B page</h1>
  </div>
</template>
<script>
export default {
  name: "B",
  data() {
    return {};
  },
  created() {
    window.console.log(this.$route.params);
  }
};
</script>
<style>
</style>