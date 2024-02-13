import { createRouter, createWebHistory } from 'vue-router'
import portfolioChildren from './childrenRoutes/portfolioChildren'
import { usePageTransitionStore } from '@/stores/pageTransitionStore'

// Routes children name must match in translate.json

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Portfolio',
      component: () => import('../layouts/PortfolioLayout.vue'),
      children: portfolioChildren
    }
  ]
})

router.beforeEach(() => {
  const pageTransitionStore = usePageTransitionStore()
  pageTransitionStore.isPageLoading = true
})

router.afterEach(() => {
  setTimeout(() => {
    const pageTransitionStore = usePageTransitionStore()
    pageTransitionStore.isPageLoading = false
    console.info(pageTransitionStore.isPageLoading)
  }, 2000)
})

export default router
