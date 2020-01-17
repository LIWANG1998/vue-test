<template>
  <button  @click="count+=1">这是一个按钮{{text}}{{counts}}</button>
</template>
<script>
export default {
  name: "lwbtn",
  data() {
    return {
      count: 0
    };
  },
  props: {
    text: {
      type: String,
      default: "按钮"
    },
    counts: {
      type: Number,
      required: true
    }
  }
};
</script>
<style scoped>
.lw-btn {
  display: inline-block;
  margin: 5px;
  width: 120px;
  height: 50px;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  border-radius: 25px;
  background: pink;
}
</style>