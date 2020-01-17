<template>
  <div class="childstyle" @click="bunfun">我是子组件</div>
</template>
<script>
export default {
  name: "lwdiv",
  data() {
    return {};
  },
  methods: {
    bunfun() {
      //发送数据给父组件
      this.$emit("getMsg", "我是子组件来的");
    }
  },
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
.childstyle {
  color: red;
}
</style>