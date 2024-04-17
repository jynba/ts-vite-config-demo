/*
 * @Author: GRIT
 * @Date: 2023-05-08 15:26:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-04-17 11:02:08
 * @FilePath: \vue_study\Vite4.3+Typescript+Vue3+Pinia_Project\vite-vue-ts-seed\vite.config.ts
 * @Description:
 */
// import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' //这个path用到了上面安装的@types/node
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import { presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    UnoCSS({
      presets: [
        presetIcons({
          scale: 1.2,
          warn: true,
        }),
      ],
      // 以下配置是为了可以直接使用标签 <i-ep-edit /> | <el-button icon="i-ep-edit" > edit </el-button>
      variants: [
        {
          match: (s) => {
            if (s.startsWith('i-')) {
              return {
                matcher: s,
                selector: (s) => {
                  return s.startsWith('.') ? `${s.slice(1)},${s}` : s
                },
              }
            }
          },
        },
      ],
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: './types/auto-imports.d.ts',
      resolvers: [ElementPlusResolver({ importStyle: false })],
      // eslint报错解决
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' }), IconsResolver()],
      dts: './types/components.d.ts',
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
        additionalData: `@use "./src/styles/global.scss" as *;`,
      },
    },
  },
  // resolve: {
  //   alias: {
  //     '@': fileURLToPath(new URL('./src', import.meta.url))
  //   }
  // }
})
