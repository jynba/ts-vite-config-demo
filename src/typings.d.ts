/*
 * @Author: GRIT
 * @Date: 2023-05-08 15:35:51
 * @LastEditors: GRIT
 * @LastEditTime: 2023-05-08 15:36:09
 * @FilePath: \vue_study\Vite4.3+Typescript+Vue3+Pinia_Project\vite-vue-ts-seed\src\typings.d.ts
 * @Description:
 */
//声明window上自定义属性，如事件总线
declare interface Window {
  eventBus: any
}

//声明.vue文件
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}
