<script setup>
import { storeToRefs } from 'pinia'
import { useEditorStore } from '@/stores/editor'
import NestedDraggable from './components/nested-draggable.vue'

const store = useEditorStore()
const { components } = storeToRefs(store)
const { updateComponents } = store
</script>

<template>
  <section class="editor-content" @click="onClick">
    <NestedDraggable v-model="components" @update:modelValue="updateComponents" />
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
