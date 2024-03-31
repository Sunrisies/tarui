// router/index.js  
import { createRouter, createWebHistory } from 'vue-router';  
  
const routes = [  
  {  
    path: '/home',  
    name: 'Home',  
    component:()=> import('../pages/index.vue')  
  },  
  {  
    path: '/about',  
    name: 'About',  
    component: () =>import('../pages/about.vue')  
  },  
  // 更多路由...  
];  
  
const router = createRouter({  
  history: createWebHistory(),  
  routes  
});  
  
export default router;