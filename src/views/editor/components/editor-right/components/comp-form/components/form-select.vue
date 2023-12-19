<template>
  <el-form-item :label="config.label">
    <el-select :modelValue="value" @change="onChange">
      <el-option
        v-for="option in config.items"
        :key="option.label"
        :label="option.label"
        :value="option.value"
      />
    </el-select>
  </el-form-item>
</template>

<script setup>
defineProps({
  value: {
    type: [String, Number],
    default: ''
  },
  config: {
    type: Object,
    default: () => ({
      label: 'select',
      attrs: {},
      items: []
    })
  }
})

const emit = defineEmits(['change'])

function onChange(e) {
  emit('change', e)
}
</script>

<style lang="scss" scoped></style>
