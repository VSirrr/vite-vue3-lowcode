<script setup>
import PageTab from './components/page-tab.vue'
import ComponentTab from './components/component-tab.vue'
</script>

<template>
  <el-aside class="editor-left">
    <el-tabs tab-position="left" model-value="base">
      <el-tab-pane label="组件列表" name="base">
        <ComponentTab />
      </el-tab-pane>
      <el-tab-pane label="页面结构" name="container">
        <PageTab />
      </el-tab-pane>
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
