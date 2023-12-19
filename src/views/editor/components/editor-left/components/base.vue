<template>
  <!-- draggable="true" -->
  <div class="base-item" :key="comp.type" v-for="comp in BasicComponents" @click="onClick(comp)">
    <!-- @dragstart="onDragStart" -->
    <component :is="comp" style="width: auto; height: auto" />
  </div>
</template>

<script setup>
import { useEditorStore } from '@/stores/editor'
import BasicComponents from '@/components/basic-componets'

const { addComponent } = useEditorStore()
const onClick = (comp) => {
  addComponent(comp)
}

// const onDragStart = (e) => {
//   console.log(e)
// }
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
