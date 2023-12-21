<template>
  <draggable
    :list="list"
    item-key="name"
    :sort="false"
    :clone="onClone"
    :group="{ name: 'components', pull: 'clone', put: false }"
  >
    <template #item="{ element }">
      <div class="component-item" :key="element.name" @click="onClick(element)">
        <component :is="element" style="max-width: 100%; height: auto" />
      </div>
    </template>
  </draggable>
</template>

<script setup>
import draggable from 'vuedraggable'
import { useEditorStore } from '@/stores/editor'
import BasicComponents from '@/components/basic-componets'

const { addComponent, setCurrentComp } = useEditorStore()

const list = []
for (const key in BasicComponents) {
  list.push(BasicComponents[key])
}

function onClick(comp) {
  addComponent(comp)
}

function onClone(comp) {
  return setCurrentComp(comp)
}
</script>

<style lang="scss" scoped>
.component-item {
  margin-bottom: 6px;
  border: 2px dashed #ccc;

  &:hover {
    border-color: var(--el-color-primary);
  }
}
</style>
