import Vue from "vue";
import VueRouter from "vue-router";
import Router from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/Login/index.vue'
import Account from '../views/Account/index.vue'
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
    {
        path:'/Login',
        name:'Login',
        component:Login
    },
    {
        path:'/Account',
        name:'Account',
        component:Account
    }
]

const router = new VueRouter({
    routes
})
export default router