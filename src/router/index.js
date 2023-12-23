import { createRouter, createWebHistory } from 'vue-router'
import home from "@/views/home/home-main.vue"
const routes = [
  {
    path: '/home',
    name: 'home-main',
    component: home
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
