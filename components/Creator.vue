<script lang="ts" setup>
const { newTodo, addTodo } = useTodo();
</script>

<template>
  <div style="">
    <input
      placeholder="Enter new todo name"
      v-model="newTodo.name"
      type="text"
      class="validate"
      @keyup.enter="addTodo()"
    />
    <!-- <div class="chips"></div>
      <div class="chips chips-initial"></div>
      <div class="chips chips-placeholder"></div>
      <div class="chips chips-autocomplete"></div> -->
    <!-- deadline.input, status.input -->
  </div>
</template>
