<script lang="ts" setup>
const { newTodo, addTodo } = useTodo();
</script>

<template>
  <div style="">
    <InputText
      v-model="newTodo.name"
      :input-props="{ placeholder: 'Enter todo name', type: 'text' }"
    />
    <InputDate v-model="newTodo.deadline" />
    <InputTags v-model="newTodo.tags" />
    <!-- <pre>{{ newTodo }}</pre> -->
    <button @click="addTodo()">Create</button>
  </div>
</template>
