<script setup>
import { useEditorStore } from '@/stores/editor'
import NestedDraggable from './components/nested-draggable.vue'

const store = useEditorStore()
</script>

<template>
  <section class="editor-content">
    <NestedDraggable :list="store.components" />
  </section>
</template>

<style lang="scss" scoped>
.editor-content {
  box-sizing: content-box;
  margin: auto;
  width: 375px;
  // height: 667px;
  height: 100%;
  border: 1px solid var(--el-border-color-lighter);
  background-color: #fff;
  overflow-y: auto;

  // &-main {
  //   height: 100%;
  //   font-size: 0;
  // }
}
</style>
