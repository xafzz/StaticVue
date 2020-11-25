// 可以根据路由模式的不同，后面俩可以只引用一个
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'


const Index = () => import(/* webpackChunkName: "index" */'@/pages/Index/page.vue')
// const List = () => import(/* webpackChunkName: "list" */'@/pages/List/List.vue')
// const Detail = () => import(/* webpackChunkName: "detail" */'@/pages/Detail/Detail.vue')


const router =new createRouter({
    // 使用 hash 模式构建路由（ url中带 # 号的那种)
    // history: createWebHashHistory(),
    // 使用 history 模式构建路由 （ url 中没有 # 号，但生产环境需要特殊配置）
    history: createWebHistory(),
    routes: [
        {path: '/', component: Index},
        {path: '/index', component: Index},
        // {path: '/list', component: List},
        // {path: '/detail', component: Detail},
    ]
})
export default router
