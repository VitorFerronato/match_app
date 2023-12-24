import { createRouter, createWebHistory } from 'vue-router'
import home from "@/views/home/home-main.vue"

//LOGIN AREA
import login from "@/views/login/login-main.vue"
import signIn from "@/views/login/components/sign-in.vue"
import registerUser from "@/views/login/components/register-user.vue"

const routes = [
  {
    path: "" || "/",
    redirect: { name: "home-main" }
  },

  {
    path: '/login',
    component: login,
    redirect: {name: 'sign-in'},
    children: [
      {
        path: 'sign-in',
        name: 'sign-in',
        component: signIn,
        meta: {
          title: 'CAMPZIN | SIGN IN'
        }
      },
      {
        path: 'register',
        name: 'register',
        component: registerUser,
        meta: {
          title: 'CAMPZIN | REGISTRAR-SE'
        }
      }
    ]
  },
  {
    path: '/main',
    redirect: { name: "home-main" },
    children: [
      {
        path: '/main/home',
        name: 'home-main',
        component: home,
        meta: {
          title: 'CAMPZIN | HOME'
        }
      },
    ]
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
