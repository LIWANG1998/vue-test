<template>
  <div id="app">
    <lwbtn text="登录" :counts="12" />
    <lwbtn text="注册" :counts="124" />
    <lwbtn text="注销" :counts="125" />
    <lwinput></lwinput>
    <lwdiv text="wode" @getMsg="GetMsg" />
    <p>{{message}}</p>
    <lwlistdiv>
      <template #title>
        <h3>wodw</h3>
      </template>
      <template #des>
        <p>前端开发工程师</p>
      </template>
    </lwlistdiv>
    <lwlistdiv></lwlistdiv>
    <lwlistdiv2>
      <template #default="{info}">
        <h3>{{info.titel}}</h3>
        <h1>{{info.des}}</h1>
      </template>
    </lwlistdiv2>
    <button @click="pagename='Home'">Home</button>
    <button @click="pagename='News'">News</button>
    <keep-alive>
      <component :is="pagename"></component>
    </keep-alive>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <i class="el-icon-loading"></i>
      <el-progress :percentage="50" :text-inside="true" :stroke-width="20"></el-progress>
      <el-progress :percentage="100" :format="format"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="100" status="warning"></el-progress>
      <el-progress :percentage="70" status="exception"></el-progress>
    </el-row>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="./assets/01.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="./assets/02.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="./assets/03.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="./assets/04.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="./assets/05.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="./assets/06.jpg" alt />
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script>
//导入组件
import lwbtn from "./components/LW_Button";
import lwinput from "./components/LW_Input";
import lwdiv from "./components/Child";
import lwlistdiv from "./components/List";
import lwlistdiv2 from "./components/List_s";
import Home from "./pages/home";
import News from "./pages/news";

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "app",
  data() {
    return {
      message: "",
      city: "chengdu",
      pagename: "News",
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: ".swiper-pagination",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        scrollbar: {
          el: ".swiper-scrollbar"
        }
      }
      // format: ""
    };
  },
  //注册组件
  components: {
    lwbtn,
    lwinput,
    lwdiv,
    lwlistdiv,
    lwlistdiv2,
    Home,
    News,
    swiper,
    swiperSlide
  },
  methods: {
    GetMsg(data) {
      this.message = data;
      window.console.log(data);
    },
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  width: 100%;
}
</style>
