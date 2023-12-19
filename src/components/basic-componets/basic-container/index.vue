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
    <div v-else style="height: 100px; font-size: 14px">
      <div>容器组件：可放置文本、图片与容器组件</div>
      <slot />
    </div>
  </div>
</template>
