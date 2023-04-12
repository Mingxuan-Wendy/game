import Vue from "vue";
import VueRouter from "vue-router";
import Router from 'vue-router'
import Login from '../views/Login/index.vue'
import Account from '../views/Account/index.vue'
import Collection from '../views/collection/index.vue'

Vue.use(Router)

const routes = [
    {
        path: '/homeContent',
        component: () => import('../views/layout'),
        children: [
            {
                path: '/',
                component: () => import('../views/homeContent'),
            },
            {
                path: '/community',
                component: () => import('../views/community'),
            },
            {
                path:'/collection',
                component: () => import('../views/collection'),
            }
        ]
    },
    {
        path:'/',
        name:'homeContent',
        redirect:'/homeContent'
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
    },
    {
        path:'/collection',
        name:'Collection',
        component:Collection
    }
]

const router = new VueRouter({
    routes
})
export default router