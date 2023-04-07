import Vue from "vue";
import Router from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            // 路由懒加载
            component:() => import('@/components/Home')
        }
    ],
    mode:'hash'
})