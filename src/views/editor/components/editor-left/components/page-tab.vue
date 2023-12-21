<template>
  <!-- draggable :allow-drop="allowDrop" -->
  <el-tree
    node-key="id"
    highlight-current
    default-expand-all
    :data="components"
    :props="{
      label: 'id',
      children: 'components'
    }"
    :expand-on-click-node="false"
    :current-node-key="currentNodeKey"
    @node-click="onNodeClick"
  />
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useEditorStore } from '@/stores/editor'

const store = useEditorStore()
const { components, currentComp } = storeToRefs(store)
const { selectComponent } = store

const currentNodeKey = computed(() => {
  return currentComp.value?.id
})

const onNodeClick = (data) => {
  selectComponent(data.id)
}

/* function allowDrop(draggingNode, dropNode) {
  if (dropNode.data.type === 'container') {
    return true
  }
  return false
} */
</script>

<style lang="scss" scoped>
.base-item {
  margin-bottom: 6px;
  border: 2px dashed #ccc;

  &:hover {
    border-color: var(--el-color-primary);
  }
}
</style>
