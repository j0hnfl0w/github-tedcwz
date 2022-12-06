<script lang="ts" setup>
const props = defineProps({
  status: { type: String, default: 'new' },
});
const {
  todos,
  newTodo,
  addTodo,
  removeTodo,
  editTodo,
  completeTodo,
  undoTodo,
} = useTodo();

const todosLocal = computed(() => {
  return todos.value.filter((t: any) => t.status === props.status);
});
</script>

<template>
  <div>
    <!-- header -->
    <span>{{ props.status }}</span>
    <!-- items -->
    <div
      v-for="t in todosLocal"
      :key="t.id"
      class="pink"
      style="
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        border: 1px solid #333;
        padding: 8px;
      "
    >
      <span>{{ t.name }} </span>
      <small>Status: {{ t.status }} </small>
      <button @click="removeTodo(t.id)">Remove</button>
      <button v-if="t.status === 'new'" @click="completeTodo(t.id)">
        Complete
      </button>
      <button v-if="t.status === 'completed'" @click="undoTodo(t.id)">
        Undo
      </button>
    </div>
  </div>
</template>
