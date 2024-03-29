<template>
  <draggable
    class="main"
    :list="list"
    item-key="id"
    :animation="200"
    :group="{ name: 'components' }"
    @start="isDrag = true"
    @end="isDrag = false"
  >
    <template #item="{ element }">
      <component
        class="wrapper"
        :class="{
          drag: isDrag,
          select: element.select
        }"
        :config="element.config"
        :components="element.components"
        :is="getBasicComponent(element.name)"
        @mousedown.stop.left="selectComponent(element.id)"
        @contextmenu.stop.prevent="onContextmenu($event, element)"
      >
        <nested-draggable :list="element.components" />
      </component>
    </template>
  </draggable>
</template>

<script setup>
import draggable from 'vuedraggable'
import { useEditorStore } from '@/stores/editor'
import { useContextMenu } from '@/components/context-menu'
import BasicComponents from '@/components/basic-componets'

defineOptions({
  name: 'nested-draggable'
})

defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

const isDrag = ref(false)

const { selectComponent, deleteComponent /* copyComponent */ } = useEditorStore()

const [createContextMenu] = useContextMenu()

const onContextmenu = (e, element) => {
  createContextMenu({
    event: e,
    items: [
      {
        label: '删除',
        onClick: () => {
          deleteComponent(element.id)
        }
      }
    ]
  })
}

/**
 * 返回组建对象
 * @param {string} name 组件名称
 */
function getBasicComponent(name) {
  return BasicComponents[name]
}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  font-size: 0;
}

.wrapper {
  outline: 1px dashed #ccc;
  outline-offset: -1px;
  font-size: 0;

  &.drag {
    cursor: move;
  }

  &:hover {
    outline: 2px dashed var(--el-color-primary);
    outline-offset: -2px;
  }

  &.select {
    outline: 2px dashed var(--el-color-primary);
    outline-offset: -2px;
    outline-style: solid;
  }
}
</style>
