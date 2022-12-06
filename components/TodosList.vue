<script lang="ts" setup>
const props = defineProps({
  status: { type: String, default: 'new' },
});

const { todos } = useTodo();

const todosLocal = computed(() => {
  return todos.value.filter((t: any) => t.status === props.status);
});
</script>

<template>
  <div>
    <!-- header -->
    <span>{{ props.status }}</span>
    <!-- items -->
    <TodoItem
      v-for="t in todosLocal"
      :key="t.id"
      :item="t"
      :style="{ marginBottom: '8px' }"
    ></TodoItem>
  </div>
</template>
