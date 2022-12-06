<script lang="ts" setup>
const { newTodo, addTodo, addTodoCancel } = useTodo();
const state = reactive({
  isLoading: false,
});
function create() {
  state.isLoading = true;
  addTodo();
  setTimeout(() => {
    state.isLoading = false;
  }, 600);
}
function cancel() {
  state.isLoading = true;
  addTodoCancel();
  setTimeout(() => {
    state.isLoading = false;
  }, 600);
}
</script>

<template>
  <div class="creator">
    <template v-if="!state.isLoading">
      <InputText
        v-model="newTodo.name"
        :input-props="{ placeholder: 'Enter todo name', type: 'text' }"
      />
      <InputDate v-model="newTodo.deadline" />
      <InputTags v-model="newTodo.tags" />
    </template>
    <!-- <pre>{{ newTodo }}</pre> -->
    <button @click="create()">Create</button>
    <button @click="cancel()">Cancel</button>
  </div>
</template>

<style>
.creator {
  max-width: 600px;
  min-height: 210px;
}
</style>
