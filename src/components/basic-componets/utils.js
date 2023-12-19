// 需要增加 px 单位的样式规则
const properties = [
  'top',
  'right',
  'bottom',
  'left',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'width',
  'height',
  'minHeight',
  'lineHeight',
  'fontSize',
  'borderRadius'
]

/**
 * @description 根据表单设置的配置规则进行处理并返回
 * @param {object} options 组件通过表单设置的配置规则
 * @returns 处理后的组件样式规则
 */
export const useStyles = (options, keys = ['data']) =>
  computed(() => {
    // 拷贝配置
    const config = { ...options }
    // 删除不是样式的 key
    keys.forEach((key) => {
      delete config[key]
    })
    // 对特殊样式增加 px 单位
    for (const key of properties) {
      const val = config[key]
      if (val) {
        config[key] = val + 'px'
      }
    }
    return config
  })
