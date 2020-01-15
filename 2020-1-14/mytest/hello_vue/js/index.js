//model
// let model = {
//     message: "Hsolle,vue.js"
// }
//viewModel



let vmtwo;
let vm = new Vue({
    // 元素的挂载
    el: "#app",
    //挂载数据
    data: {
        isTel: true,
        isLogin: false,//记录用户是否登录
        username: "",//记录账号
        password: "",//记录密码
        className: "num",
        num: 10,
        message: "Hsolle,vue.js",
        htmlStr: "<p>环球中心</p>",
        user: {
            name: "liwang"
        },
        goods: [
            { name: "iphone11", price: 5499 },
            { name: "macbookpro", price: 13999 },
            { name: "RedMi", price: 3999 },
        ],

        citys: [
            "北京",
            "成都",
            "上海",
            "广东",
            "广州",
            "广都"
        ],
        res: [],
        keywords: "",

        selIndex: 0,//选中的下标
        menus: ["主页", "新闻", "社会", "科技", "娱乐"]
    },
    // 在生命周期 beforeCreate里面改变this指向
    beforeCreate() {
        vmtwo = this;
    },
    //生命周期方法
    mounted() {
        this.gg = 123;
        setTimeout(() => {
            this.$set(this.goods, 1, { name: "macbookpro", price: 55000 });
            //第1种
            this.$set(this.user, "tel", "12345689")
            //第2种
            Vue.set(this.user, "job", "quanduan")
            //第3种
            this.user = Object.assign(this.user, {
                name: "liwang",
                tel: "211",
                job: "wa"
            });
            //第4种es6 对象合并
            this.user = {
                ...this.user,
                address: "zainali"
            }
        }, 3000)

    },
    //方法
    methods: {
        loginin(e) {
            console.log(e)
            //判断时候登陆成功
            //this=>指向的是vue实例
            console.log(this);
            if (this.username === "admin" && this.password === "123") {
                this.isLogin = true;
                console.log("登陆成功")
            }
            else {
                this.isLogin = false;
                console.log("登陆错误")
            }
        },
        filterName() {
            //根据搜索关键字过滤数据
            console.log(this.keywords);
            this.res = this.citys.filter(item => {
                //创建正则表达式
                //以什么开头
                let red = new RegExp(`^${this.keywords}`);
                //模糊查询
                let reds = new RegExp(this.keywords);
                return reds.test(item);
            })
            // console.log(res);
        }
    },
    //过滤器/加工厂
    filters: {
        //加工人名币符号
        formRMB(price) {
            console.log(vmtwo.num)
            console.log(price)
            //$ 10
            return `$ ${price + vmtwo.num}`;
        }
    }
})
vm.goods.push({ name: "liwang", price: "wujiao" })