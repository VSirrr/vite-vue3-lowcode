<template>
  <el-form-item :label="config.label">
    <el-radio-group :modelValue="value" v-bind="config.attrs" @change="onChange">
      <el-radio-button v-for="item in config.items" :key="item.label" :label="item.value">
        {{ item.label }}
      </el-radio-button>
    </el-radio-group>
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
      label: 'radio-grpup',
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
