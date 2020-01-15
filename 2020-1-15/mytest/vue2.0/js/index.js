// 注册一个全局自定义指令 v-focus
Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时
    inserted(el, binding, vnode) {
        // 获取焦点
        el.focus();
        console.log(binding)
        console.log(vnode)
    },
    // bind(el, binding, vnode) {

    // }
});
let vm = new Vue({
    el: ".app",
    data: {
        message: "wodeqode",
        firname: "",
        lasname: "",
        res: "",
        classname: "ggg",
        background: "blue",
        a: 0,
        b: 0
    },
    directives: {
        color: {
            inserted(el, binding) {
                el.style.color = binding.value;
            }
        }
    },
    watch: {
        message(value) {
            this.res = value.split("").reverse().join("");
        }
    },
    computed: {
        //计算属性的getter
        fullname() {
            return this.firname + " " + this.lasname;
        },
        reverseMsg() {
            return this.message.split("").reverse().join("");
        }
    },
    methods: {
        reverseM() {
            return this.message.split("").reverse().join("");
        }
    },
})