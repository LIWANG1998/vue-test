<template>
  <div class="home">
    <img alt="Vue logo" @click="isShow = !isShow" src="../assets/logo.png">
	<transition name="bounce">
		<h1 v-show="isShow" class="title">Hello, 2020!</h1>
	</transition>
	<transition
		enter-active-class="animated flip" 
		leave-active-class="animated jackInTheBox">
		<h1 v-show="isShow" class="title">Hello, 2020!</h1>
	</transition>
	
    <p>
		<router-link to="/details">跳转至详情页</router-link>
	</p>
  </div>
</template>

<script>
	
import 'animate.css'

export default {
  name: 'home',
  data() {
	  return {
		  isShow: true
	  }
  }
}
</script>

<style lang="less" scoped>
/*
.fade-enter-active,
.fade-leave-active {
	transition: all .5s linear;
}
	
.fade-leave-to,	
.fade-enter {
	transform: translateX(-200px);
	opacity: 0;
}
.fade-leave,
.fade-enter-to {
	transform: translateX(0);
	opacity: 1;
}*/

@keyframes bounce {
  0%   { transform: scale(0)   }
  50%  { transform: scale(1.5) }
  100% { transform: scale(1)   }
}

.bounce-enter-active {
    animation: bounce .6s linear;
}
.bounce-leave-active {
    animation: bounce .6s linear reverse;
}

</style>

