<template>
  <el-form-item :label="config.label">
    <el-input :modelValue="value" v-bind="config.attrs" @input="onInput" />
  </el-form-item>
</template>

<script setup>
defineProps({
  value: {
    type: String,
    default: ''
  },
  config: {
    type: Object,
    default: () => ({
      label: 'input',
      attrs: {}
    })
  }
})

const emit = defineEmits(['change'])

function onInput(e) {
  emit('change', e)
}
</script>
