<script lang="jsx">
const prefixCls = 'context-menu'

const props = {
  width: {
    type: Number,
    default: 156
  },
  axis: {
    type: Object,
    default() {
      return { x: 0, y: 0 }
    }
  },
  items: {
    type: Array,
    default() {
      return []
    }
  }
}

export default defineComponent({
  name: 'ContextMenu',
  props,
  setup(props) {
    const wrapRef = ref(null)
    const showRef = ref(false)

    const getStyle = computed(() => {
      const { axis, items, width } = props
      const { x, y } = axis || { x: 0, y: 0 }
      const menuHeight = (items || []).length * 40
      const menuWidth = width
      const body = document.body
      const left = body.clientWidth < x + menuWidth ? x - menuWidth : x
      const top = body.clientHeight < y + menuHeight ? y - menuHeight : y

      return {
        position: 'absolute',
        width: `${width}px`,
        left: `${left + 1}px`,
        top: `${top + 1}px`,
        zIndex: 9999
      }
    })

    onMounted(() => {
      nextTick(() => (showRef.value = true))
    })

    onUnmounted(() => {
      const el = unref(wrapRef)
      el && document.body.removeChild(el)
    })

    function onMenuItemClick(e, item) {
      const { onClick, disabled } = item
      if (disabled) {
        e.stopPropagation()
        e.preventDefault()
        return
      }
      showRef.value = false
      e.stopPropagation()
      e.preventDefault()
      onClick?.()
    }

    function renderMenuItem(items) {
      return items.map((item) => {
        const { disabled, label } = item

        return (
          <div
            class={`${prefixCls}__item`}
            key={label}
            disabled={disabled}
            onClick={(e) => onMenuItemClick(e, item)}
          >
            {label}
          </div>
        )
      })
    }

    return () => {
      if (!unref(showRef)) {
        return null
      }

      return (
        <div class={prefixCls} ref={wrapRef} style={unref(getStyle)}>
          {renderMenuItem(props.items)}
        </div>
      )
    }
  }
})
</script>

<style lang="scss" scoped>
.context-menu {
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 156px;
  user-select: none;
  border-radius: 8px;
  background-color: #fff;
  border: solid 1px var(--el-menu-border-color);
  cursor: pointer;

  &__item {
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    border-radius: 8px;
    font-size: 15px;
    color: #444;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
      color: var(--el-color-primary);
      background-color: var(--el-color-primary-light-9);
    }

    &[disabled] {
      color: #bababa !important;
      cursor: not-allowed;
      background: none !important;
    }
  }
}
</style>
