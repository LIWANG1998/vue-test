<template>
  <!-- template 中只能存在一个根标签 -->
  <div id="app">
    <component-a></component-a>
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>{{message}}</p>
    <label v-text="testfont"></label>
    <br />
    <p for>{{Twoway}}</p>
    <input type="text" v-model="Twowaybind" />
    <br />
    <label for>{{Twowaybind}}</label>
    <p for>{{Twoway}}</p>
    <p for>{{Navbar}}</p>
    <ul class="list">
      <li
        v-for="(item, index) in menus"
        :key="index"
        :class="index==selIndex?'sel':''"
        @click="selIndex=index"
      >{{item}}</li>
    </ul>
    <p for>{{Navbar}}</p>
    <p for>{{Search}}</p>
    <label for>{{reverseMsg}}</label>
    <input type="text" v-model="search_text" @input="search_fun" />
    <ul>
      <li v-for="(item, indexs) in search_res" :key="indexs">
        <label
          v-for="(item_s, index) in item"
          :key="index"
          :class="index=='name'?'font_s':''"
        >{{index|proobject}}: {{item_s}}{{index=="name"?'----':''}}</label>
      </li>
    </ul>
    <p>{{Search}}</p>
    <p>{{condition}}</p>
    <input type="text" placeholder="输入的年龄" v-model="age" />
    <input type="button" value="加一岁" @click="age+=1" />
    <input type="button" value="减一岁" @click="age-=1" />
    <div v-if="age>=18">你已经{{age}}岁了，可以自己做决定了</div>
    <div v-else-if="age<18">你已经{{age}}岁了，还不能自己做决定</div>
    <div v-else>你已经{{age}}岁了，不能可以自己做决定了</div>
    <p>{{condition}}</p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      message: "Hello,vue.js! " + new Date().toLocaleString(),
      testfont: "v-text：下面就是vue的一些练习",
      Twoway: "------用 v-model (双向绑定)------",
      Twowaybind: "这是个双向绑定的数据",
      Navbar:
        "------用 v-for 循环绑定menus 用 :class='index==selIndex?'sel':''' 三元运算添加className 用 @click='selIndex=index' 赋值当前下标------",
      menus: ["主页", "新闻", "社会", "科技", "娱乐"],
      selIndex: 0,
      Search: "搜索引擎",
      citys: [
        { name: "无极剑圣", skill: "你的剑就是我的剑" },
        { name: "无双剑姬", skill: "精准而优雅" },
        { name: "剑魔", skill: "天神下饭" },
        { name: "亚索", skill: "死亡如风，常伴吾生" }
      ],
      search_text: "",
      search_text_s: "",
      search_res: [],
      condition: "条件渲染",
      age: 0
    };
  },
  created() {},
  mounted() {
    window.console.log(this.menus);
  },
  directives: {},
  //方法钩子
  methods: {
    //搜索引擎
    search_fun() {
      // window.console.log(this.search_text);
      //filter() 过滤返回值
      this.search_res = this.citys.filter(item => {
        let red = new RegExp(this.search_text);
        return red.test(JSON.stringify(item));
      });
      window.console.log(this.search_res);
    }
  },
  //计算钩子
  //computed 的作用主要是对原数据进行改造输出。
  //改造输出：包括格式的编辑，大小写转换，顺序重排，添加符号等。
  computed: {
    //倒叙输出
    reverseMsg() {
      return this.search_text
        .split("")
        .reverse()
        .join("");
    }
  },
  //加工厂钩子
  filters: {
    //加工对象
    proobject(item) {
      return `${item == "name" ? "他的名字" : "他的口头禅"}`;
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
ul {
  padding: 0;
  list-style: none;
}
.list > li {
  display: inline-block;
  width: 120px;
  height: 35px;
  line-height: 35px;
  background: purple;
  color: #ffffff;
  cursor: pointer;
  text-align: center;
}
.list > li:hover {
  background: pink;
}
.list > li.sel {
  background: orange;
}
.font_s {
  color: red;
}
</style>
