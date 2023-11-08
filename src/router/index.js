import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue'
import Portfolio from '../pages/Portfolio.vue'
import ProjectDetail from '../pages/ProjectDetail.vue'
import ProjectsByType from '../pages/ProjectsByType.vue'



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
        {
            path: '/portfolio/type/:type_id',
            name: 'projects-by-type',
            component: ProjectsByType
        },
    ]
})

export { router };