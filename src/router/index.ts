// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/about',
    component: () => import('../layouts/index.vue'),
    children: [
    
      {
        path: '/about',
        name: 'about',
        component: () => import('../pages/about.vue')
      },
      {
        path: '/index',
        name: 'index',
        component: () => import('../pages/index.vue')
      },
    ]
  }
  // {
  //   path: '/',
  //   name:'/',
  //   component: () => import('../pages/index.vue'),
  //   // redirect:'/about',
  //   // children: [

  //   //   // {
  //   //   //   path: 'home',
  //   //   //   name: 'home',
  //   //   //   component:()=> import('../pages/index.vue')
  //   //   // },
  //   // ]
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
