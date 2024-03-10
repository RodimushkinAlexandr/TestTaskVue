import { createRouter, createWebHistory } from 'vue-router'
import Task from '../view/Task.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Task',
      component: Task,
      meta: {
        enterClass: 'animate__animated animate__fadeInLeft',
        leaveClass: 'animate__animated animate__fadeOutRight'
      }
    },
  ]
})

export default router