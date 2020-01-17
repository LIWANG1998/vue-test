import Vue from 'vue'
import App from './App.vue'

import { Button, Icon,Progress } from 'element-ui';
Vue.use(Button).use(Icon).use(Progress);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
