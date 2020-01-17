<template>
    <div class="hw">
      {{ name }}
    </div>
</template>
 
<!--JS区域-->
<script>
    export default {
        name: "hw",
      data(){
          return {
            name:"毛没齐"
        }
      }
    }
</script>
 
<!--css区域-->
<style scoped>
.hw{
  color: blue;
}
</style>
