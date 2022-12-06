<script lang="ts" setup>
useHead({
  title: 'NOVA-TODO',
});
</script>

<template>
  <div style="padding: 8px">
    <h4>NOVA-TODO</h4>
    <Creator />
    <TodosList status="new" />
    <TodosList status="completed" />
  </div>
</template>

<style>
html,
body {
  padding: 0;
}
</style>
