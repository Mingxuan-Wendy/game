import Vue from "vue";
import VueRouter from "vue-router";
import Router from 'vue-router'
import Login from '../views/Login/index.vue'
import gameSearchResults from "@/views/gameSearchResults/index.vue";

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
                path:'/shopping',
                component: () => import('../views/shopping'),
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
    {
        path:'/gameSearchResults/:input_value',
        name: 'gameSearchResults',
        component: gameSearchResults,
    },
]

const router = new VueRouter({
    routes
})
export default router