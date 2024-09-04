import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path: "/",
        redirect:'/1'
    },
    {
        path: '/1',
        component: () => import('@/views/首页.vue'),
    },
    {
        path: '/2',
        component: () => import('@/views/五四运动.vue'),
    },
    {
        path: '/3',
        component: () => import('@/views/五四精神.vue'),
    },
    {
        path: '/4',
        component: () => import('@/views/五四人物.vue'),
    },
    {
        path: '/5',
        component: () => import('@/views/攀大五四.vue'),
    }

]

const router = new VueRouter({
    mode: "hash",
    routes
})

export default router
