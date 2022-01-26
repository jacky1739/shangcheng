import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: '首頁',
        },
        component: () => import('../components/Home.vue'),
        redirect: '/welcome',
        children: [
            {
                path: '/welcome',
                name: 'welcome',
                meta: {
                    title: '歡迎頁面',
                },
                component: () => import('../components/Welcome.vue'),
            },
            {
                path: '/login',
                name: 'login',
                meta: {
                    title: '登入頁面',
                },
                component: () => import('../components/Login.vue'),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router