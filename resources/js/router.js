import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './pages/home.vue'
import AboutView from './pages/about.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;