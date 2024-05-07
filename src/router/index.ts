import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from "@/views/BlogView.vue";
import JobView from "@/views/JobView.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            children: [{
                // 工作详情弹框
                path: '/job-detail/:jobName',
                name: 'job-detail',
                component: HomeView
            }]
        }, {
            // Blog Path -> /blog/year/month/day/postName
            path: '/blog',
            name: 'blog',
            component: BlogView,
            children: [{
                path: ':year',
                name: 'blog-year',
                component: BlogView,
                children: [{
                    path: ':month',
                    name: 'blog-month',
                    component: BlogView,
                    children: [{
                        path: ':day',
                        name: 'blog-day',
                        component: BlogView,
                        children: [{
                            path: ':post',
                            name: 'blog-post',
                            component: BlogView
                        }]
                    }]
                }]
            }]
        }, {
            path: '/jobs/:jobName',
            name: 'job-name',
            component: JobView
        }, {
            path: '/about',
            name: 'about',
            component: AboutView
        }
    ]
})

export default router
