<template>
  <!-- @click="onClick(element)" -->
  <draggable
    v-model="list"
    item-key="name"
    :sort="false"
    :group="{ name: 'components', pull: 'clone', put: false }"
  >
    <template #item="{ element }">
      <div class="base-item" :key="element.name">
        <component :is="element" style="max-width: 100%">
          <template v-if="element.type == 'container'">
            容器组件：可放置文本、图片与容器组件
          </template>
        </component>
      </div>
    </template>
  </draggable>
</template>

<script setup>
import draggable from 'vuedraggable'
// import { useEditorStore } from '@/stores/editor'
import BasicComponents from '@/components/basic-componets'

const list = ref([])
for (const key in BasicComponents) {
  list.value.push(BasicComponents[key])
}

// const { addComponent } = useEditorStore()
// const onClick = (comp) => {
//   addComponent(comp)
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
