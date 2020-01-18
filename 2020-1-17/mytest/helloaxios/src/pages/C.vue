<template>
  <div class="pages C">
    <h1>this is C page</h1>
  </div>
</template>
<script>
export default {
  name: "C",
  data() {
    return {};
  },
  created() {
    console.log(this.$route.query);
  }
};
</script>
<style>
</style>