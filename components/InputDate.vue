<script lang="ts" setup>
const logger = useLogger('InputDate');

const props = defineProps({
  modelValue: { type: String },
  inputProps: { type: Object },
});
const emit = defineEmits(['update:model-value']);
const refInput = ref(null);

onMounted(() => {
  // logger.log(':onMounted');
  const dateInstances = M.Datepicker.init(refInput.value, {
    defaultDate: props.modelValue,
    firstDay: 1,
    format: 'd-m-yyyy',
    onSelect(e) {
      logger.log(':onSelect', e);
      emit('update:model-value', e);
    },
  });
});
</script>

<template>
  <input
    v-bind="props.inputProps"
    :value="props.modelValue"
    ref="refInput"
    type="text"
    class="datepicker"
    placeholder="Pick deadline date"
  />
</template>
