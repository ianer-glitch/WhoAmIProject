import { createRouter, createWebHistory } from 'vue-router'
import portfolioChildren from './childrenRoutes/portfolioChildren'

// Routes children name must match in translate.json

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Portfolio',
      component: () => import('../layouts/PortfolioLayout.vue'),
      children: portfolioChildren,
    },
  ]
})

export default router
