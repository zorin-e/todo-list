import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '@/views/TodoList.vue'
import EditTodo from '@/components/Todo/TodoForm.vue'

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList,
  },
  {
    path: '/add',
    name: 'AddTodo',
    component: EditTodo,
  },
  {
    path: '/edit/:id',
    name: 'EditTodo',
    component: EditTodo,
    props: route => ({ id: Number(route.params.id) }),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
