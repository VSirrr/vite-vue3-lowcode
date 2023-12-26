<script setup>
import conf from './conf'
import { useStyles } from '../utils'

const props = defineProps({
  config: {
    type: Object,
    default: () => conf
  },
  components: {
    type: Array,
    default: () => []
  }
})

const styles = useStyles(props.config)

const backgroundImageStyle = computed(() => {
  if (props.config.data) {
    return {
      backgroundImage: `url(${props.config.data})`,
      backgroundPosition: 'top center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% auto'
    }
  }
  return {}
})

defineOptions({
  name: 'basic-container',
  type: 'container'
})
</script>

<template>
  <div :style="{ ...styles, ...backgroundImageStyle }">
    <slot v-if="components && components.length" />
    <div v-else style="flex: 1; height: 100px">
      <div style="position: relative">
        <div style="position: absolute; top: 0; left: 0; font-size: 14px">
          容器组件：可放置文本、图片与容器组件
        </div>
      </div>
      <div style="position: relative; z-index: 2; height: 100%">
        <slot />
      </div>
    </div>
  </div>
</template>
