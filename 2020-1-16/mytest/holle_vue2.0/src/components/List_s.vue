<template>
  <div class="childstyle">
     <slot :info="info">{{info.titel}}</slot>
  </div>
</template>
<script>
export default {
  name: "lwlistdiv2",
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