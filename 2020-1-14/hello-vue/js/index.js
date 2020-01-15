// model
// let model = {
// 	message: "Hello, vue.js!"
// }



// viewModel
let vm = new Vue({
	// 元素挂载
	el: "#app",
	// 挂载数据
	data: { 
		isTel: true,
		isLogin: false,
		username: "",
		password: "",
		className: "box",
		num: 10,
		message: "Hello, vue.js!",
		htmlStr: "<p>环球中心</p>",
		keywords: "",
		selIndex: 0,
		menus: [
			"主页", "新闻", "社会", "科技", "娱乐"
		],
		user: {
			name: "木子李"
		},
		goods: [
			{name: "iPhone11", price: 5499},
			{name: "macbookpro", price: 13999},
			{name: "Red Mi", price: 2999},
		],
		citys: [
			"北京", "成都", "上海",
			"广东", "广州", "广都"
		],
		res: []
	},
	// 生命周期
	mounted() {
		console.log(this);
		setTimeout(() => {
			console.log('123')
			this.$set(this.goods, 1, {name: "gg", price: 13999})
			// 1
			this.$set(this.user, "tel", "17398888669");
			// 2
			Vue.set(this.user, "job", "前端工程师");
			// 3
			this.user = Object.assign(this.user, {
				name: "木子李",
				tel: "17398888669",
				job: "前端工程师"
			});
			// 4
			this.user = {
				...this.user,
				address: "四川省成都市高新区"
			};
			console.log(this.user);
			
			
		}, 3000)
	},
	// 方法
	methods: {
		login(event) {
			console.log(event);
			// this => 指向vue实例
			console.log(this);
			// 判断是否登陆成功
			// this => 指向vue实例
			if(this.username === "admin" && this.password === "123") {
				alert("登陆成功!");
				this.isLogin = true;
			}else {
				alert("登陆失败!");
				this.isLogin= false;
			}
		},
		filterName() {
			// 根据搜索关键字过滤数据
			this.res = this.citys.filter(item => {
				// 创建正则表达式
				let reg = new RegExp(this.keywords);
				return reg.test(item);
			});
		}
	},
	// 过滤器/加工厂
	filters:{
		formRMB(price) {
			// $ 10
			return `$ ${price}`;
		}
	}	
	
});
