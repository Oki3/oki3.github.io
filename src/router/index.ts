import { createRouter, createWebHistory, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'Home | Casual & Code' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta: { title: 'About | Casual & Code' }
    },
    {
      path: '/toolkits',
      name: 'toolkits',
      component: () => import('../views/Toolkits.vue'),
      meta: { title: 'Toolkits | Casual & Code' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue'),
      meta: { title: 'Projects | Casual & Code' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue'),
      meta: { title: 'Contact | Casual & Code' }
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/Posts.vue'),
      meta: { title: 'Blog Posts | Casual & Code' }
    },
    {
      path: '/posts/:slug',
      name: 'post-details',
      component: () => import('../views/PostDetails.vue'),
      meta: { title: 'Post | Casual & Code' }
    }
  ]
})

// Update document title on route change
router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  document.title = to.meta.title as string || 'Casual & Code'
  next()
})

export default router 