<script setup>
import Base from './components/base.vue'
</script>

<template>
  <el-aside class="editor-left">
    <el-tabs tab-position="left" model-value="base">
      <el-tab-pane label="组件" name="base">
        <Base />
      </el-tab-pane>
      <!-- <el-tab-pane label="容器组件" name="container">容器组件</el-tab-pane> -->
    </el-tabs>
  </el-aside>
</template>

<style lang="scss" scoped>
.editor-left {
  width: 340px;
  height: 100%;
  border-right: 1px solid var(--el-border-color-lighter);
  background-color: #fff;

  :deep(.el-tabs) {
    height: 100%;
  }

  :deep(.el-tabs--left .el-tabs__nav-wrap.is-left::after) {
    width: 1px;
  }

  :deep(.el-tabs__content) {
    padding: 8px;
    height: 100%;
    overflow-y: auto;
  }
}
</style>
