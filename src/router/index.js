import { createRouter, createWebHistory } from 'vue-router'
import home from "@/views/home/home-main.vue"
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  
  {
    path: '/home',
    name: 'home-main',
    component: home,
    meta: {
      title: 'CAMPZIN | HOME'
    }
  },
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to?.meta?.title ?? 'CAMPZIN'}`
  next();
})

export default router
