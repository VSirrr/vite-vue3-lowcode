<template>
  <el-form-item :label="config.label">
    <el-color-picker :modelValue="value" v-bind="config.attrs" @change="onChange" />
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
      label: 'color-picker',
      attrs: {}
    })
  }
})

const emit = defineEmits(['change'])

function onChange(e) {
  emit('change', e)
}
</script>
