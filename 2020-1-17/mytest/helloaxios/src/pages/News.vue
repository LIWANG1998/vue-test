<template>
  <div class="pages news">
    <h1>this is news page</h1>
    <ul class="list">
      <li>
        <router-link to="/news/a">A</router-link>
      </li>
      <li>
        <router-link to="/news/b/liwang/18">B</router-link>
        <!---<router-link :to="{name:'b',params:{name:'lihy', age:'web'}}">B</router-link>-->
      </li>
      <li>
        <!-- <router-link to="/news/c?job=wedb&city=chengdu">C</router-link> -->
        <router-link :to="{path:'c',query:{job:'wedb', city:'chengdu'}}">C</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {};
  }
};
</script>
<style scoped>
a {
  color: blue;
}
a.router-link-active {
  color: rgb(195, 255, 0);
}
</style>>
