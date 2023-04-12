<template>
  <div>
    <h2>Todos</h2>
    <router-link :to="{ name: 'AddTodo' }" :class="[$style.add, 'button']">Add</router-link>
    <draggable
        :list="todos"
        item-key="name"
        class="list-group"
        ghost-class="ghost"
        @start="dragging = true"
        @end="dragging = false"
      >
        <template #item="{ element }">
            <TodoItem :todo="element" :class="[$style.item, 'text-left']" />
        </template>
      </draggable>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from 'vue';
import TodoItem from '@/components/Todo/TodoItem.vue'
import { useStore } from 'vuex';
import Draggable from 'vuedraggable'

export default defineComponent({
  components: {
    TodoItem,
    Draggable
  },
  setup(props, { root }) {
    const store = useStore()
    const todos = computed(() => store.getters.todos)
    const dragging = ref(false)
    return {
      todos,
      dragging
    }
  }
})
</script>

<style module>
.item {
  margin-top: 10px;
  cursor: move;
  border: solid 3px #5a5a5a;
  padding: 15px;
  border-radius: 7px;
}

.add {
  display: inline-block;
}
</style>
