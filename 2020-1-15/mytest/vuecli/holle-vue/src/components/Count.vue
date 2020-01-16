<template lang="pug">
  <div>{{name}}</div>
</template>
<script>
export default {
  name: "HelloWor",
  // 全局组件里data属性必须是函数，这样才会独立，
  // 在组件改变状态的时候不会影响其他组件里公用的这个状态
  data() {
    return {
      name: "我是全局组件"
    };
  }
};
</script>
<style lang="stylus" scoped></style>