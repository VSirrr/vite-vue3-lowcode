<template>
  <el-form
    v-if="currentComp"
    class="form"
    :model="form"
    label-width="120px"
    label-position="left"
    :key="currentComp.id"
  >
    <el-form-item label="组件ID">{{ currentComp.id }}</el-form-item>
    <component
      v-for="(item, idx) in options"
      :key="idx"
      :is="formComponents[item.type]"
      :value="form[item.prop]"
      :config="item.config"
      @change="(val) => updateCurrentComp(item.prop, val)"
    />
  </el-form>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import formOptions from './options'
import formComponents from './components'
import { useEditorStore } from '@/stores/editor'

const store = useEditorStore()
const { updateCurrentComp } = store
const { currentComp } = storeToRefs(store)

const form = ref({})
const options = ref([])

watch(
  currentComp,
  (val) => {
    if (val && val.config && val.type) {
      form.value = { ...val.config }
      options.value = [...formOptions[val.type]]
    } else {
      form.value = {}
      options.value = []
    }
  },
  {
    deep: true
  }
)
</script>

<style lang="scss" scoped>
.form {
  padding: 12px;
}
</style>
