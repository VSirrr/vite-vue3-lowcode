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
  name: 'basic-text',
  type: 'text'
})
</script>

<template>
  <div :style="styles">
    {{ config.data }}
  </div>
</template>
