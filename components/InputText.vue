<script lang="ts" setup>
const logger = useLogger('InputText');

const props = defineProps({
  modelValue: { type: String },
  inputProps: { type: Object },
});
const emit = defineEmits(['update:model-value']);
const refInput = ref(null);

onMounted(() => {
  logger.log(':onMounted');
});
</script>

<template>
  <input
    :value="props.modelValue"
    v-bind="props.inputProps"
    @input="emit('update:model-value', $event.target.value)"
    type="text"
    class="validate"
    ref="refInput"
  />
</template>
