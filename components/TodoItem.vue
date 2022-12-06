<script lang="ts" setup>
const props = defineProps({
  item: { type: Object },
});

const { removeTodo, editTodo, completeTodo, undoTodo } = useTodo();

function init() {}

onMounted(() => {
  init();
});
</script>

<template>
  <div
    class="pink"
    style="
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border: 1px solid #333;
      padding: 8px;
    "
  >
    <span>{{ item.name }} </span>
    <small>Status: {{ item.status }} </small>
    <button @click="removeTodo(item.id)">Remove</button>
    <button v-if="item.status === 'new'" @click="completeTodo(item.id)">
      Complete
    </button>
    <button v-if="item.status === 'completed'" @click="undoTodo(item.id)">
      Undo
    </button>
  </div>
</template>
