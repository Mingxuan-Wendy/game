import Vue from "vue";
import VueRouter from "vue-router";
import Router from 'vue-router'
// import Home from '../views/layout/home.vue'
import Login from '../views/Login/index.vue'
import Account from '../views/Account/index.vue'
// Vue.prototype.$message = Message

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: () => import('../views/layout'),
        children: [
        {
            path: '/',
            component: () => import('../views/homeContent'),
        },
        ]
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