<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="10" class="flex-c">
        <el-input v-model="name"></el-input>
        <el-button type="primary" size="small" round>
          <router-link :to="{path:'/login',query:{name}}" class="sousuo">搜索</router-link>
        </el-button>
      </el-col>
    </el-row>
    <Swiper></Swiper>
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item, index) in 4" :key="index" >
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image" @click="sendParams"
          />
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Swiper from "../components/swiperHtml.vue";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      currentDate: new Date()
    };
  },
  components: {
    Swiper
  },
  methods: {
    sendParams() {
      this.$router.push({
        path: "goodsd",
        name: "goodsd",
        params: {
          id: 12,
          name: this.name
        }
        /*query: {  
                key: 'key',   
                msgKey: this.msg  
            }*/
      });
    }
  },
  created() {
    // window.console.log(this.globalvar);
    let islogin = this.globalvar.userinfo;
    if (!islogin) {
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>
<style scoped>
.flex-c {
  display: flex;
  justify-content: center;
  align-content: center;
}
.sousuo {
  width: 100%;
  height: 100%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
img {
  width: 100%;
}
</style>