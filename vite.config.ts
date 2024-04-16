/*
 * @Author: GRIT
 * @Date: 2023-05-08 15:26:33
 * @LastEditors: GRIT
 * @LastEditTime: 2023-05-14 15:59:16
 * @FilePath: \vue_study\Vite4.3+Typescript+Vue3+Pinia_Project\vite-vue-ts-seed\vite.config.ts
 * @Description:
 */
// import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' //这个path用到了上面安装的@types/node
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    UnoCSS(),
    vueJsx(),   
  AutoImport({
    imports: ['vue', 'vue-router'],
    dts: 'src/auto-import.d.ts',
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  }),
],
  resolve: {
    alias: {
      '@': resolve('./src'), // @代替src
      '#': resolve('./types'), // #代替types
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/bem.scss";`,
      },
    },
  },
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   }
  // }
})
