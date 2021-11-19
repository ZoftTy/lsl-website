import path from 'path'
import vue from '@vitejs/plugin-vue'

import { defineConfig } from 'vite'

// ELement-Plus 自动导入
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
    resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "components": path.resolve(__dirname, "src/components"),
      "views": path.resolve(__dirname, "src/views"),
      "layouts": path.resolve(__dirname, "src/layouts"),
      "utils": path.resolve(__dirname, "src/utils"),
      "apis": path.resolve(__dirname, "src/apis"),
      "assets": path.resolve(__dirname, "src/assets")
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData:  `@import "${path.resolve(__dirname, 'src/assets/styles/variable.less')}";`
      }
    }
  }
})
