import { createRouter, createWebHistory } from '@ionic/vue-router';

import Home from '../views/Home.vue';

const routes = [
  {
    path: '',
    // redirect: '/folder/Inbox'
    component: Home
  },
  {
    path: '/customer',
    component: () => import ('../views/customer/Customers.vue')
  },
  {
    path: '/customer/add',
    component: () => import('../views/customer/AddCustomer.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
