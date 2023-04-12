<template>
  <div>
    <h2>{{ isEditing ? 'Edit' : 'Create' }} Todo</h2>
    <form @submit.prevent="submitForm">
      <label :class="$style.label">
        <div>Title:</div>
        <input type="text" v-model="title" />
      </label>
      <label :class="$style.label">
        <div>Description:</div>
        <textarea v-model="description"></textarea>
      </label>
      <button type="submit">{{ isEditing ? 'Update' : 'Create' }}</button>
    </form>
  </div>
</template>

<script>
import { ref, defineComponent, toRefs, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    id: {
      type: Number,
      default: null
    },
  },
  setup(props) {
    const router = useRouter()
    const store = useStore()

    const { id } = toRefs(props)
    const todo = computed(() => store.getters.todos.find(todo => todo.id === id.value))
    const isEditing = ref(!!todo.value?.id)
    const title = ref(todo.value?.title || '')
    const description = ref(todo.value?.description || '')

    const submitForm = () => {
      const newTodo = {
        title: title.value,
        description: description.value,
        done: false
      }

      if (isEditing.value) {
        const updatedTodo = { ...props.todo, ...newTodo }
        store.dispatch('updateTodo', { id: todo.value.id, ...updatedTodo})
      } else {
        store.dispatch('addTodo', newTodo)
      }

      router.push('/')
    }

    return {
      isEditing,
      title,
      description,
      submitForm,
    }
  }
})
</script>

<style module>
.label {
  display: block;
  text-align: left;
  margin-bottom: 10px;
}
</style>
