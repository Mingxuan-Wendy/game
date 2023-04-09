import Vue from "vue";
import VueRouter from "vue-router";
import Router from 'vue-router'
import Home from '../views/home.vue'
// Vue.prototype.$message = Message

Vue.use(Router)

// export default new Router({
//     routes:[
//         {
//             path:'/',
//             // 路由懒加载
//             // component:() => import('@/components/Home')
//         }
//     ],
//     mode:'hash'
// })

const routes = [
    {
        path: '/',
        name: 'Home',
        component:Home
    },
]

const router = new VueRouter({
    routes
})
export default router