<template>
  <div class="childstyle">
    <slot name="des">我是默认内容</slot>
    <slot name="title">我是默认内容1</slot>
  </div>
</template>
<script>
export default {
  name: "lwlistdiv",
  data() {
    return {
      info: {
        titel: "chengdu",
        des: "zhe shi yi duan huan"
      }
    };
  }
};
</script>
<style scoped>
.childstyle {
  color: red;
}
</style>