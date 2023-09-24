<!--
 * @Author: GRIT
 * @Date: 2023-05-10 11:17:42
 * @LastEditors: GRIT
 * @LastEditTime: 2023-05-14 21:33:27
 * @FilePath: \vue_study\Vite4.3+Typescript+Vue3+Pinia_Project\vite-vue-ts-seed\src\components\TheWelcome.vue
 * @Description: 
-->
<!-- // 组件内进入前的守卫 //https://blog.csdn.net/oafzzl/article/details/125045087 -->
<!-- 
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  beforeRouteEnter(to, from, next) {
    console.log(to) //上一个页面前往的的页面(当前页面)
    console.log(from) //来自哪一个页面
    next((e: any) => {
      // 这个回调参数e,包含setup中暴露出去的数据以及内置方法
      window.console.log(e)
      // 获取是否来自home1页面
      if (from.path == '/home1') {
        e.obj.name = '李四'
      }
    })
  },
})
</script> -->

<script setup lang="ts">
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUnmounted,
  onUpdated,
} from 'vue'
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
// 接收父组件的传值
// vue3写法
// let props =defineProps({
//   title: {
//     type: String,
//     default: '默认值',
//   },
// })
// ts写法
let props = withDefaults(
  defineProps<{
    title: string
  }>(),
  {
    title: () => '默认值',
  },
)
console.log(props.title)

// 给父组件传值
// vue3写法
// const emit = defineEmits(['on-click']) //可传入多个参数
// const send = () => {
//   emit('on-click', 'abc')
// }
// ts写法
const emit = defineEmits<{
  (e: 'on-click', name: string): void //没有返回值
  //可传入多个参数
}>()
const send = () => {
  emit('on-click', 'abc')
}

const send2 = () => {
  emit('on-click', 'abc')
}
// defineExpose 暴露方法或属性
defineExpose({
  name: '我是暴露出去的方法',
  send2,
})

/*
组件内守卫
使用情景：预防用户在还未保存修改前突然离开。该导航可以通过返回 false 来取消
*/
import { onBeforeRouteLeave } from 'vue-router'

// 与 beforeRouteLeave 相同，无法访问 `this`
onBeforeRouteLeave(() => {
  const answer = window.confirm('确定离开吗')
  // 取消导航并停留在同一页面上
  if (!answer) return false
})
// 生命周期
//created beforecreate被setup替代
onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onUpdated(() => {
  console.log('onUpdated')
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
onUnmounted(() => {
  console.log('onUnmounted')
})
// 调试用的两个生命周期
onRenderTracked((e) => {
  console.log('onRenderTracked', e)
})
onRenderTriggered((e) => {
  console.log('onRenderTriggered', e)
})
</script>

<template>
  <div>
    {{ title }}
  </div>
  <div><button @click="send">给父组件传值</button></div>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
    provides you with all information you need to get started.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a>. The recommended IDE setup
    is <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener">Volar</a>. If you need to test your
    components and web pages, check out <a href="https://www.cypress.io/" target="_blank" rel="noopener">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank">Cypress Component Testing</a>.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>

    Get official tools and libraries for your project:
    <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener">Pinia</a>,
    <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>,
    <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener">Vue Test Utils</a>, and
    <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener">Vue Dev Tools</a>. If you need more
    resources, we suggest paying
    <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome Vue</a>
    a visit.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

    Got stuck? Ask your question on
    <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Vue Land</a>, our official Discord server, or
    <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener">StackOverflow</a>. You
    should also subscribe to <a href="https://news.vuejs.org" target="_blank" rel="noopener">our mailing list</a> and
    follow the official
    <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">@vuejs</a>
    twitter account for latest news in the Vue world.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
</template>
