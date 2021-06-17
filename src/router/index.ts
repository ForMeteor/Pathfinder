import { createRouter,createWebHistory} from "vue-router";

// 路由信息
const routes = [
    {
        path: "/",
        name: "home",
        component:  () => import('../views/home.vue'),
    },
    {
        path: "/home",
        name: "home",
        component:  () => import('../views/home.vue'),
    },
    {
        path: "/leef",
        name: "leef",
        component:  () => import('../views/leef.vue'),
    },
];

// 导出路由
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;