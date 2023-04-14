/*
 * @Author: git_test 1694691263@qq.com
 * @Date: 2023-04-10 00:19:40
 * @LastEditors: git_test 1694691263@qq.com
 * @LastEditTime: 2023-04-10 00:20:21
 * @FilePath: \game_hww\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import '../plugins/element.js'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import router from './router'
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts

// 关闭生产提示
Vue.config.productionTip = false
// 挂载到原型，可以全局使用
// 测试推送1
Vue.prototype.axios = axios


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
