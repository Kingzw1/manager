import { createWebHashHistory, createRouter } from 'vue-router'

import Layout from '@/layout/index.vue'
import component from 'element-plus/es/components/tree-select/src/tree-select-option.mjs'


const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '首页', icon: 'icon-home', isShow: true
                },
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('@/views/user/index.vue'),
                meta: {
                    title: '用户', icon: 'icon-user', isShow: true
                }
            }
            ,
            {
                path: '/feedback',
                name: 'feedback',
                component: () => import('@/views/feedback/index.vue'),
                meta: {
                    title: '意见反馈', icon: 'icon-message', isShow: true
                }
            },
            {
                path: '/setting',
                name: 'seting',
                component: () => import('@/views/setting/index.vue'),
                meta: {
                    title: '系统设置', icon: 'icon-system', isShow: true
                },


            }

        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            icon: '', isShow: false
        }
    },
    {
        path: '/:pathMatch(.*)*',  // 通配符，匹配所有未定义路径
        name: 'NotFound',
        component: () => import('@/views/404/index.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router