import { defineStore } from 'pinia'
import { customAlphabet } from 'nanoid'
import configs from '@/components/basic-componets/config'

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxwz', 10)

/**
 * 根据传入的组件类型返回一个具有 ID 和配置项的组件对象
 * @param {object} component
 * @param {boolean} select
 * @returns {object} 具有 ID 和配置项的组件对象
 */
const getNewComp = (component, select = true) => ({
  select,
  name: component.name,
  type: component.type,
  id: `${component.type}-${nanoid()}`,
  config: { ...configs[component.type] },
  components: component.type === 'container' ? [] : null
})

/**
 * 根据传入的 id 筛选数据
 * @param {Array} components
 * @param {Number} id
 * @returns {Object}
 */
function findCompById(components, id) {
  for (const comp of components) {
    if (comp.id === id) {
      comp.select = true
      return comp
    }
    if (comp.components && comp.components.length) {
      const child = findCompById(comp.components, id)
      if (child) {
        return child
      }
    }
  }
}

/**
 * 根据传入的组件列表筛选被选中的组件
 * @param {Array} components
 * @returns 被选中的组件
 */
/* function findCompBySelect(components) {
  for (const comp of components) {
    if (comp.select) {
      return comp
    }
    if (comp.components && comp.components.length) {
      const child = findCompBySelect(comp.components)
      if (child) {
        return child
      }
    }
  }
} */

/**
 * 将组建列表的 select 设置为 false
 * @param {Array} components
 */
const unSelectAll = (components) => {
  components.forEach((comp) => {
    if (comp) {
      comp.select = false
    }
    if (comp.components && comp.components.length) {
      unSelectAll(comp.components)
    }
  })
}

/**
 * 根据传入的 id 删除数据
 * @param {Array} components
 * @param {Number} id
 */
const deleteCompById = (components, id) => {
  for (let index = 0, length = components.length; index < length; index++) {
    const comp = components[index]
    if (comp.id === id) {
      components.splice(index, 1)
      break
    }
    if (comp.components && comp.components.length) {
      deleteCompById(comp.components, id)
    }
  }
}

/**
 * 根据传入的 id 删除数据并返回一个相邻的组件或者父组件
 * @param {Array} components
 * @param {Number} id
 */
const deleteCompByIdAndReturnComp = (components, id, parent = null) => {
  for (let index = 0, length = components.length; index < length; index++) {
    const comp = components[index]
    if (comp.id === id) {
      components.splice(index, 1)
      const length = components.length
      if (length === 0) {
        return parent
      }
      if (length === 1) {
        return components[0]
      }
      if (length > index) {
        return components[index]
      }
      const i = index - 1
      return components[i > 0 ? i : 0]
    }
    if (comp.components && comp.components.length) {
      const child = deleteCompByIdAndReturnComp(comp.components, id, comp)
      if (child) {
        return child
      }
    }
  }
}

/**
 * 根据传入的 id 与组件信息复制一份新的组件数据
 * @param {Array} components
 * @param {Opject} component
 * @param {Number} id
 */
/* const copyCompById = (components, element) => {
  for (let index = 0, length = components.length; index < length; index++) {
    const comp = components[index]
    if (comp.id == element.id) {
      comp.select = false
      components.splice(index + 1, 0, getNewComp(element))
      break
    }
    if (comp.components && comp.components.length) {
      copyCompById(comp.components, element)
    }
  }
} */

export const useEditorStore = defineStore('editor', () => {
  // 所有组件
  const components = ref([])
  // 当前组件
  const currentComp = ref({})

  const setCurrentComp = (component) => {
    unSelectAll(components.value)
    currentComp.value = getNewComp(component)
    return currentComp.value
  }

  const selectComponent = (id) => {
    if (id === currentComp.value.id) {
      return
    }
    unSelectAll(components.value)
    currentComp.value = findCompById(components.value, id)
  }

  const deleteComponent = (id) => {
    if (currentComp.value.id !== id) {
      deleteCompById(components.value, id)
      return
    }
    currentComp.value = deleteCompByIdAndReturnComp(components.value, id)
    if (currentComp.value) {
      currentComp.value.select = true
    } else {
      currentComp.value = {}
    }
  }

  /* const copyComponent = (element) => {
    copyCompById(components.value, element)
  } */

  const updateCurrentComp = (key, val) => {
    currentComp.value.config[key] = val
  }

  const resetStates = () => {
    components.value = []
    currentComp.value = {}
  }

  return {
    components,
    currentComp,
    resetStates,
    setCurrentComp,
    // copyComponent,
    selectComponent,
    deleteComponent,
    updateCurrentComp
  }
})
