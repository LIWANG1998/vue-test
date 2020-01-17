<template>
  <div id="app">
    <!-- toubu -->
    <header>
      <ul class="list">
        <li>
          <router-link to="/">主页</router-link>
        </li>
        <li>
          <router-link to="/news">新闻</router-link>
        </li>
      </ul>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Qs from "qs";
export default {
  name: "app",
  created() {
    const url = `/login?`;
    // this.$axios
    //   .get(url, {
    //     params: {
    //       id: 1,
    //       size: 10,
    //       city: "chengdu"
    //     }
    //   })
    //   .then(res => {
    //     window.console.log(res);
    //   })
    //   .catch(res => {
    //     window.console.log(res.message);
    //   });
    //   this.$axios
    //     .post(
    //       url,
    //       Qs.stringify({
    //         userName: "haokaa",
    //         password: "123456"
    //       })
    //     )
    //     .then(res => {
    //       window.console.log(res);
    //     })
    //     .catch(res => {
    //       window.console.log(res.message);
    //     });
    let data = this.$mock({
      symbol: '@string("symbol", 5)',
      time: '@datetime("yyyy-MM-dd A HH:mm:ss")',
      "list|1-10": [
        {
          "id|+1": 1,
          name: "@cname",
          "string|1-5": "★"
        }
      ]
    });
    console.log(data);
  },
  components: {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
header {
  height: 64px;
  background: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
a {
  color: #ffffff;
  text-decoration: none;
}
main {
  height: calc(100%-64px);
}
</style>
