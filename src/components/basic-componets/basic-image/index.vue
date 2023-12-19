<script setup>
import conf from './conf'
import { useStyles } from '../utils'

const props = defineProps({
  config: {
    type: Object,
    default: () => conf
  }
})

const styles = useStyles(props.config)

defineOptions({
  name: 'basic-image',
  type: 'image'
})
</script>

<template>
  <div :style="styles">
    <img draggable="false" style="height: 100%; width: 100%" :src="config.data" />
  </div>
</template>
