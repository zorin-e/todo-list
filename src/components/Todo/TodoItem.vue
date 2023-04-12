<template>
  <div :class="$style.item">
    <div>
      <input type="checkbox" :checked="isDone" @change="toggleDone" />
      <router-link
        :to="{
            name: 'EditTodo',
            params: {
              id: todo.id,
            }
        }">
        <span :class="{ [$style.done]: isDone }">{{ todo.title }} {{ description }}</span>
      </router-link>
    </div>
    <div :class="$style.buttons">
      <button @click="deleteTodo" :class="$style.deleteBtn">Delete</button>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex'
export default defineComponent({
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const store = useStore()
    const isDone = computed(() => props.todo.done)

    const deleteTodo = () => {
      store.dispatch('deleteTodo', props.todo)
    }
    const toggleDone = () => {
      store.dispatch('toggleDone', props.todo)
    }

    const description = computed(() => {
      const MAX_SYMBOLS = 50
      const description = props.todo.description.length > MAX_SYMBOLS ? `${props.todo.description.slice(0, MAX_SYMBOLS)}...`: props.todo.description
      return `${props.todo.title} ${description}`
    })

    return {
      isDone,
      deleteTodo,
      toggleDone,
      description
    }
  }
})
</script>

<style module>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.buttons {
  margin-left: 10px;
}

.deleteBtn {
  margin-right: 5px;
}
.done {
  text-decoration: line-through;
}
</style>
