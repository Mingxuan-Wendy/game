import Vue from 'vue'
import App from './App.vue'
import '../plugins/element.js'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import router from './router'

// 关闭生产提示
Vue.config.productionTip = false
// 挂载到原型，可以全局使用
// 测试推送
Vue.prototype.axios = axios


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
