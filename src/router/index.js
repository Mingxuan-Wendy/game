import Vue from "vue";
import VueRouter from "vue-router";
import Router from 'vue-router'
import Login from '../views/Login/index.vue'

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
            },
            {
                path:'/invite',
                component: () => import('../views/invite'),
            },
            {
                path:'/settings',
                component: () => import('../views/accountSettings'),
            },
            {
                path:'/FAQ',
                component: () => import('../views/FAQ'),
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
]

const router = new VueRouter({
    routes
})
export default router