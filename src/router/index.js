import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/editor'
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('@/views/editor/index.vue')
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/'
    }
  ]
})

export default router
