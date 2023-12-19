<template>
  <el-header class="editor-header">
    <el-button link type="primary" @click="onBack"> <ep:arrow-left-bold /> 返回 </el-button>
    <div class="editor-header-right">
      <!-- <el-button link type="primary" @click="onPreview">预览</el-button> -->
      <el-button link type="primary" @click="onSave">保存</el-button>
    </div>
  </el-header>
</template>

<script setup>
const emit = defineEmits(['back', 'preview', 'save'])

const onBack = (e) => {
  emit('back', e)
}

// const onPreview = (e) => {
//   emit('preview', e)
// }

const onSave = (e) => {
  emit('save', e)
}
</script>

<style lang="scss" scoped>
.editor-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid var(--el-border-color-lighter);
}
</style>
