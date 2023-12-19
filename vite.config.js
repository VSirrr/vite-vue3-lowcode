import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

function resolve(path) {
  return fileURLToPath(new URL(path, import.meta.url))
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log('dev mode:', mode)

  return {
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/]
      }),
      vueJsx(),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue', 'vue-router'],
        resolvers: [
          // 自动导入图标组件
          IconsResolver(),
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver()
        ],
        eslintrc: {
          enabled: true
        },
        dts: true
      }),
      Components({
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            prefix: false,
            enabledCollections: ['ep']
          }),
          // 自动导入 Element Plus 组件
          ElementPlusResolver()
        ],
        dts: true
      }),
      Icons({
        autoInstall: true
      }),
    ],

    resolve: {
      alias: {
        '@': resolve('./src')
      }
    }
  }
})
