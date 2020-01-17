<template>
  <div>
    <input type="text" v-model="name" />
    <label for>{{name}}</label>
  </div>
</template>
<script>
export default {
  name: "lwinput",
  data() {
    return {
      name: "liwang"
    };
  }
};
</script>
<style>
</style>