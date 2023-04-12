import { createRouter, createWebHistory } from 'vue-router'
// import TodoList from '@/views/TodoList.vue'
// import EditTodo from '@/components/Todo/TodoForm.vue'
import { defineAsyncComponent } from 'vue'
defineAsyncComponent

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: defineAsyncComponent(() => import('@/views/TodoList.vue')),
  },
  {
    path: '/add',
    name: 'AddTodo',
    component: defineAsyncComponent(() => import('@/components/Todo/TodoForm.vue')),
  },
  {
    path: '/edit/:id',
    name: 'EditTodo',
    component: defineAsyncComponent(() => import('@/components/Todo/TodoForm.vue')),
    props: route => ({ id: Number(route.params.id) }),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
