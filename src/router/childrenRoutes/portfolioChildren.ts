import type { RouteRecordRaw } from "vue-router";

const portfolioChildren : RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../../views/HomeView/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../../views/AboutProjectView/AboutProjectView.vue')
  }

]

export default portfolioChildren