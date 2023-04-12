import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        title: 'Todo 1',
        description: 'Description todo 1',
        done: false
      },
      {
        id: 2,
        title: 'Todo 2',
        description: 'Description todo 2',
        done: false
      },
      {
        id: 3,
        title: 'Todo 3',
        description: 'Description todo 3',
        done: true
      }
    ]
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push({ id: state.todos.length + 1,  ...todo})
    },
    updateTodo (state, todo) {
      const index = state.todos.findIndex(t => t.id === todo.id)
      state.todos[index] = {...todo}
    },
    deleteTodo (state, todo) {
      const index = state.todos.findIndex(t => t.id === todo.id)
      state.todos.splice(index, 1)
    },
    toggleDone (state, todo) {
      const index = state.todos.findIndex(t => t.id === todo.id)
      state.todos[index].done = !state.todos[index].done
    }
  },
  actions: {
    addTodo ({ commit }, todo) {
      commit('addTodo', todo)
    },
    updateTodo ({ commit }, todo) {
      commit('updateTodo', todo)
    },
    deleteTodo ({ commit }, todo) {
      commit('deleteTodo', todo)
    },
    toggleDone ({ commit }, todo) {
      commit('toggleDone', todo)
    }
  },
  getters: {
    todos: state => state.todos,
    doneTodos: state => state.todos.filter(t => t.done),
    undoneTodos: state => state.todos.filter(t => !t.done),
  }
})
