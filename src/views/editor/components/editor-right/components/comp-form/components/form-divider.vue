<template>
  <div style="overflow: hidden">
    <el-divider>{{ config.label }}</el-divider>
  </div>
</template>

<script setup>
defineProps({
  config: {
    type: Object,
    default: () => ({
      label: 'divider',
      attrs: {}
    })
  }
})
</script>

<style lang="scss" scoped></style>
