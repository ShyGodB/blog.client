import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import Layout from '@/Layout/Index.vue'

const routes = [
    {
        path: "/login",
        name: "Login",
        component: () => import('@/views/Login.vue')
    },
    {
        path: "/",
        name: "Home",
        component: Layout
    },
]

const router = new VueRouter({
    routes
})

export default router
