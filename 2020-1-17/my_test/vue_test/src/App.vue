<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="6" v-for="(item, index) in routes" :key="index">
            <div class="grid-content bg-purple">
              <router-link :to="item.path">{{item.text}}</router-link>
            </div>
          </el-col>
          <!-- <el-col :span="6">
            <div class="grid-content bg-purple-light">
              <router-link to="/login">login</router-link>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <router-link to="/login">logins</router-link>
            </div>
          </el-col>-->
        </el-row>
      </el-header>
      <el-main>
        <transition enter-active-class="animated flip" leave-active-class="animated jackInTheBox">
          <router-view></router-view>
        </transition>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "app",
  data() {
    return {
      routes: [
        {
          path: "/",
          text: "主页"
        },
        {
          path: "/login",
          text: "登录"
        },
        {
          path: "/goodsd/2",
          text: "商品"
        }
      ]
    };
  },
  components: {}
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #303133;
}
ul {
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
}

.el-header,
.el-footer {
  padding: 0;
  background-color: #409eff;
  color: #303133;
  text-align: center;
  line-height: 64px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  // padding: 10px 0;
  background-color: #f9fafc;
}
</style>
