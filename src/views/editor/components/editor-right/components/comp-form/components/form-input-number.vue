<template>
  <el-form-item :label="config.label">
    <el-input-number
      :modelValue="value"
      controls-position="right"
      v-bind="config.attrs"
      @change="onChange"
      @input="onInput"
    />
  </el-form-item>
</template>

<script setup>
defineProps({
  value: {
    type: Number,
    default: 0
  },
  config: {
    type: Object,
    default: () => ({
      label: 'input-number',
      attrs: {}
    })
  }
})

const emit = defineEmits(['change'])

const inputValue = ref('')

function onChange(e) {
  //! 防止通过输入框直接修改后触发 change 事件，导致切换组件时，新选择组件的数据被修改 bug
  if (inputValue.value !== e) {
    emit('change', e)
  }
}

function onInput(e) {
  inputValue.value = e
  emit('change', e)
}
</script>
