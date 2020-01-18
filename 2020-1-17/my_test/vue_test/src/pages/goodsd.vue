<template>
  <div class="transition">
    <button type="button" @click="isVisible = !isVisible">TOGGLE</button>
    <transition name="fade" appear>
      <h1 v-show="isVisible">Hello, World!</h1>
    </transition>
    <transition name="slide" appear>
      <h1 v-show="isVisible">Hello, World!</h1>
    </transition>
    <transition
      enter-active-class="animated flip"
      leave-active-class="animated jackInTheBox"
      appear
    >
      <h1 v-show="isVisible">Hello, World!</h1>
    </transition>
    <button @click="shuffle">Shuffle</button>
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <transition-group name="list-complete" tag="p">
      <span v-for="item in items" :key="item" class="list-complete-item">{{ item }}</span>
    </transition-group>
    <input v-model.number="number" type="number" step="20" />
    <p>{{ animatedNumber }}</p>
  </div>
</template>
<script>
import "animate.css";
import _ from "lodash";
import { TweenMax } from "gsap";
export default {
  name: "goodsd",
  data() {
    return {
      name: "Muzili",
      isVisible: true,
      items: [1, 2, 3, 4, 5, 6],
      nextNum: 7,
      number: 0,
      tweenedNumber: 0
    };
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 this
    // 因为当守卫执行前，组件实例还没被创建
    next(_this => {
      console.log(_this.name);
    });
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 this
    console.log(this, "beforeRouteUpdate"); //当前组件实例
    console.log(to, "组件独享守卫beforeRouteUpdate第一个参数");
    console.log(from, "组件独享守beforeRouteUpdate卫第二个参数");
    console.log(next, "组件独享守beforeRouteUpdate卫第三个参数");
    next();
    // console.log(to, from);
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 this
    const answer = window.confirm(
      "Do you really want to leave? you have unsaved changes!"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
  created() {
    window.console.log(this.$route.query);
  },
  watch: {
    number(newVal) {
      TweenMax.to(this.$data, 0.5, { tweenedNumber: newVal });
    }
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  methods: {
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1);
    },
    shuffle() {
      this.items = _.shuffle(this.items);
    }
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s linear;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
</style>