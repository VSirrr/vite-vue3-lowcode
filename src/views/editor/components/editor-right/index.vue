<script setup>
import CompForm from './components/comp-form/index.vue'
</script>

<template>
  <el-aside class="editor-right">
    <el-tabs type="card" model-value="base">
      <el-tab-pane label="基础" name="base">
        <CompForm />
      </el-tab-pane>
    </el-tabs>
  </el-aside>
</template>

<style lang="scss" scoped>
.editor-right {
  width: 340px;
  border-left: 1px solid var(--el-border-color-lighter);
  background-color: #fff;

  :deep(.el-tabs) {
    height: 100%;

    .el-tabs__content {
      height: calc(100% - 55px);
      overflow-y: auto;
    }
  }
}
</style>
