import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxToViewport from 'postcss-px-to-viewport-8-plugin'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import { VarletUIResolver } from 'unplugin-vue-components/resolvers'
import compression from 'vite-plugin-compression2'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        pxToViewport({
          viewportWidth: 375, // 设计稿宽度
          unitPrecision: 6, // px to vw无法整除时，保留几位小数
          unitToConvert: 'px', // 默认值`px`，需要转换的单位
          propList: ['*'], // 能转化为vw的属性列表
        }),
      ],
    },
  },
  plugins: [
    vue(),
    components({
      resolvers: [VarletUIResolver()],
    }),
    autoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [VarletUIResolver({ autoImport: true })],
    }),
    compression({ // 开启gzip压缩
      include: [/\.html$/, /\.css$/, /\.js$/, /\.ttf$/],
      skipIfLargerOrEqual: true,
    }),
  ],
})
