<script lang="ts" setup>
const props = defineProps({
  item: { type: Object },
});

const { removeTodo, editTodo, completeTodo, undoTodo } = useTodo();
</script>

<template>
  <div class="todo-item">
    <InputText v-model="item.name" />
    <InputDate v-model="item.deadline" />
    <InputTags v-model="item.tags" />
    <!-- footer -->
    <div
      style="
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      "
    >
      <button v-if="item.status === 'new'" @click="completeTodo(item.id)">
        Complete
      </button>
      <button v-if="item.status === 'completed'" @click="undoTodo(item.id)">
        Undo
      </button>

      <button @click="removeTodo(item.id)">Remove</button>
    </div>
  </div>
</template>

<style>
.todo-item {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #333;
  padding: 8px;
}
</style>
