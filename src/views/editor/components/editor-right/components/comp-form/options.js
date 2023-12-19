export default {
  text: [
    {
      type: 'input',
      prop: 'data',
      config: {
        label: '文本内容'
      }
    },
    {
      type: 'divider',
      config: {
        label: '字体设置'
      }
    },
    {
      type: 'select',
      prop: 'fontFamily',
      config: {
        label: '字体名称',
        items: [
          {
            value:
              "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
            label: '默认'
          },
          { value: 'PingFang SC', label: 'PingFang SC' },
          { value: 'Microsoft YaHei', label: '微软雅黑' },
          { value: '宋体', label: '宋体' },
          { value: '楷体', label: '楷体' },
          { value: 'Monospace', label: '等宽字体' },
          { value: 'Serif', label: 'Serif' },
          { value: 'Sans-serif', label: 'Sans-serif' },
          { value: 'Cursive', label: 'Cursive' },
          { value: 'Fantasy', label: 'Fantasy' }
        ]
      }
    },
    {
      type: 'input-number',
      prop: 'fontSize',
      config: {
        label: '字号大小',
        attrs: {
          min: 0,
          max: 100
        }
      }
    },
    {
      type: 'input-number',
      prop: 'lineHeight',
      config: {
        label: '字体行高',
        attrs: {
          min: 0
        }
      }
    },
    {
      type: 'color-picker',
      prop: 'color',
      config: {
        label: '字体颜色'
      }
    },
    {
      type: 'select',
      prop: 'fontWeight',
      config: {
        label: '字体粗细',
        items: new Array(9).fill(100).map((val, idx) => {
          const fontSize = val * (idx + 1)
          return {
            label: fontSize,
            value: fontSize
          }
        })
      }
    },
    {
      type: 'radio-group',
      prop: 'textAlign',
      config: {
        label: '对齐方式',
        items: [
          {
            label: '左',
            value: 'left'
          },
          {
            label: '中',
            value: 'center'
          },
          {
            label: '右',
            value: 'right'
          }
        ]
      }
    },
    {
      type: 'divider',
      config: {
        label: '盒模型'
      }
    },
    {
      type: 'select',
      prop: 'display',
      config: {
        label: '盒模型模式',
        items: [
          {
            label: '块级盒模型',
            value: 'block'
          },
          {
            label: '行内块盒模型',
            value: 'inline-block'
          }
        ]
      }
    },
    {
      type: 'input-number',
      prop: 'paddingTop',
      config: {
        label: '内边距上',
        attrs: {
          min: 0
        }
      }
    },
    {
      type: 'input-number',
      prop: 'paddingBottom',
      config: {
        label: '内边距下',
        attrs: {
          min: 0
        }
      }
    },
    {
      type: 'input-number',
      prop: 'paddingLeft',
      config: {
        label: '内边距左',
        attrs: {
          min: 0
        }
      }
    },
    {
      type: 'input-number',
      prop: 'paddingRight',
      config: {
        label: '内边距右',
        attrs: {
          min: 0
        }
      }
    },
    /*  {
      type: 'input-number',
      prop: 'width',
      config: {
        label: '组件宽度',
        attrs: {
          min: 0,
          max: 375
        }
      }
    },
    {
      type: 'input-number',
      prop: 'height',
      config: {
        label: '组件高度',
        attrs: {
          min: 0
        }
      }
    },
    {
      type: 'input-number',
      prop: 'minHeight',
      config: {
        label: '组件最小高度',
        attrs: {
          min: 0
        }
      }
    },
    {
      type: 'input-number',
      prop: 'borderRadius',
      config: {
        label: '圆角',
        attrs: {
          min: 0
        }
      }
    }, */
    {
      type: 'color-picker',
      prop: 'backgroundColor',
      config: {
        label: '背景色'
      }
    }
    /* {
      type: 'divider',
      config: {
        label: '定位'
      }
    },
    {
      type: 'radio-group',
      prop: 'position',
      config: {
        label: '定位方式',
        items: [
          {
            label: '默认',
            value: 'static'
          },
          {
            label: '绝对定位',
            value: 'absolute'
          },
          {
            label: '相对定位',
            value: 'relative'
          }
        ]
      }
    },
    {
      type: 'input-number',
      prop: 'top',
      config: {
        label: '上'
      }
    },
    {
      type: 'input-number',
      prop: 'bottom',
      config: {
        label: '下'
      }
    },
    {
      type: 'input-number',
      prop: 'left',
      config: {
        label: '左'
      }
    },
    {
      type: 'input-number',
      prop: 'right',
      config: {
        label: '右'
      }
    } */
  ],
  image: [
    {
      type: 'input',
      prop: 'data',
      config: {
        label: '图片链接'
      }
    },
    {
      type: 'divider',
      config: {
        label: '盒模型'
      }
    },
    {
      type: 'select',
      prop: 'display',
      config: {
        label: '盒模型模式',
        items: [
          {
            label: '块级盒模型',
            value: 'block'
          },
          {
            label: '行内块盒模型',
            value: 'inline-block'
          }
        ]
      }
    },
    {
      type: 'input-number',
      prop: 'paddingTop',
      config: {
        label: '内边距上',
        attrs: {
          min: 0,
          max: 100
        }
      }
    },
    {
      type: 'input-number',
      prop: 'paddingBottom',
      config: {
        label: '内边距下',
        attrs: {
          min: 0,
          max: 100
        }
      }
    },
    {
      type: 'input-number',
      prop: 'paddingLeft',
      config: {
        label: '内边距左',
        attrs: {
          min: 0,
          max: 100
        }
      }
    },
    {
      type: 'input-number',
      prop: 'paddingRight',
      config: {
        label: '内边距右',
        attrs: {
          min: 0,
          max: 100
        }
      }
    },
    {
      type: 'input-number',
      prop: 'width',
      config: {
        label: '组件宽度',
        attrs: {
          min: 0,
          max: 375
        }
      }
    },
    {
      type: 'input-number',
      prop: 'height',
      config: {
        label: '组件高度',
        attrs: {
          min: 0
        }
      }
    },
    {
      type: 'input-number',
      prop: 'borderRadius',
      config: {
        label: '圆角',
        attrs: {
          min: 0
        }
      }
    }
  ],
  container: [
    {
      type: 'input',
      prop: 'data',
      config: {
        label: '背景图'
      }
    },
    {
      type: 'divider',
      config: {
        label: '盒模型'
      }
    },
    {
      type: 'select',
      prop: 'display',
      config: {
        label: '盒模型模式',
        items: [
          {
            label: '块级盒模型',
            value: 'block'
          },
          {
            label: '弹性盒模型',
            value: 'flex'
          },
          {
            label: '行内块盒模型',
            value: 'inline-block'
          }
        ]
      }
    },
    {
      type: 'input-number',
      prop: 'paddingTop',
      config: {
        label: '内边距上',
        attrs: {
          min: 0
        }
      }
    },
    {
      type: 'input-number',
      prop: 'paddingBottom',
      config: {
        label: '内边距下',
        attrs: {
          min: 0
        }
      }
    },
    {
      type: 'input-number',
      prop: 'paddingLeft',
      config: {
        label: '内边距左',
        attrs: {
          min: 0
        }
      }
    },
    {
      type: 'input-number',
      prop: 'paddingRight',
      config: {
        label: '内边距右',
        attrs: {
          min: 0
        }
      }
    },
    {
      type: 'color-picker',
      prop: 'backgroundColor',
      config: {
        label: '背景色'
      }
    }
  ]
}
