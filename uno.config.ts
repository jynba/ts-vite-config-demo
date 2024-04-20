// uno.config.js
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(), // 添加 UnoCSS 的默认样式预设
  ],
  shortcuts: [
    {
      // 垂直居中
      'flex-center': 'flex justify-center items-center',
      'border-split': 'border-t-2rpx border-x-0 border-b-0 border-dashed border-line',
      // 盒子外边框1px
      'border-short': 'border border-solid border-line rounded',
      'border-short-dashed': 'border border-dashed border-line rounded',
      'w-h-full': 'h-full w-full',
      'text-c1': 'color-#000/85',
      'text-c2': 'color-#000/65',
      'text-c3': 'color-#000/45',
      'text-c4': 'color-#000/25',
      'font-sm': 'text-14px',
      'font-base': 'text-16px',
      'font-sl': 'text-18px',
      'font-lg': 'text-20px',
    },
  ],
})
