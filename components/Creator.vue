<script lang="ts" setup>
const { newTodo, addTodo } = useTodo();

function init() {
  const elems = document.querySelectorAll('.datepicker');
  const instances = M.Datepicker.init(elems, {
    defaultDate: Date.now(),
    firstDay: 1,
    format: 'd-m-yyyy',
    onSelect(a, b) {
      console.log(':onSelect', a, b);
    },
  });
}

onMounted(() => {
  init();
});
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
    <input type="text" class="datepicker" />
    <!-- <div class="chips"></div>
      <div class="chips chips-initial"></div>
      <div class="chips chips-placeholder"></div>
      <div class="chips chips-autocomplete"></div> -->
    <!-- deadline.input, status.input -->
  </div>
</template>
