import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue'
import Portfolio from '../pages/Portfolio.vue'
import ProjectDetail from '../pages/ProjectDetail.vue'



const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/project-detail/:id',
            name: 'project-detail',
            component: ProjectDetail
        },
    ]
})

export { router };