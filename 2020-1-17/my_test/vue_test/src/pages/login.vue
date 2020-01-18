<template>
  <el-row type="flex" class="row-bg" justify="center">
    <el-col :span="10">
      <div class="m_topbottom">
        <!-- <label for class="la">登录页面</label> -->
        <el-form label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="ruleForm.userpass"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="loginin">登录</el-button>
            <!-- <el-button>重置</el-button> -->
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      ruleForm: {
        username: "",
        userpass: ""
      }
    };
  },
  created() {
    window.console.log(this.$route.query);
    window.console.log(this.globalvar);
  },
  methods: {
    loginin() {
      let istrue = false;
      // console.log(this.username);
      if (!istrue) {
        let userinfo = { username: this.username, userpass: this.userpass };
        this.globalvar.userinfo = userinfo;
        this.$router.push({
          path: "/",
          name: "home",
          // params: {
          //   key: "key",
          //   msgKey: this.msg
          // }
          /*query: {  
                key: 'key',   
                msgKey: this.msg  
            }*/
        });
      }
    }
  }
};
</script>
<style scoped>
.m_topbottom {
  margin: 20px 0;
  text-align: center;
}
</style>