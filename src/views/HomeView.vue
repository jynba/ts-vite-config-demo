<!--
 * @Author: GRIT
 * @Date: 2023-05-10 11:17:11
 * @LastEditors: GRIT
 * @LastEditTime: 2023-05-13 19:30:53
 * @FilePath: \vue_study\Vite4.3+Typescript+Vue3+Pinia_Project\vite-vue-ts-seed\src\views\HomeView.vue
 * @Description: 
-->
<template>
  <div ref="dom">{{ a }}</div>
  <div>
    <button @click="change">change</button>

    <button @click="flag = !flag">创建与销毁</button>
    菜单栏
    <TheWelcome v-if="flag" :title="a" @on-click="getName" ref="theWelcome" />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import TheWelcome from '@/components/TheWelcome.vue'
import { ref } from 'vue'
const a = ref('123')
console.log(a)
const getName = (name: string) => {
  console.log('getName:', name, '====》我是父组件获取到的子组件的值')
}
// ts中的InstanceType
const theWelcome = ref<InstanceType<typeof TheWelcome>>()

const dom = ref<HTMLElement>()
// const ab = reactive({
//   a: '123',
//   b: '456',
// })
// 使用ref获取dom；替代vue2中的this.$refs 以及jquery中的$(this.$refs)
const change = function () {
  console.log(dom.value)
  // console.log(ab, ab['__v_raw']) 源码读出 等价于toRaw(ab)
  console.log(theWelcome.value)
}
let flag = ref<boolean>(true)
</script>
<style scoped></style>
