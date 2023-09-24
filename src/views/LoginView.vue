<!--
 * @Author: GRIT
 * @Date: 2023-05-10 11:29:16
 * @LastEditors: GRIT
 * @LastEditTime: 2023-05-11 21:22:39
 * @FilePath: \vue_study\Vite4.3+Typescript+Vue3+Pinia_Project\vite-vue-ts-seed\src\views\LoginView.vue
 * @Description: 
-->
<template>
  Login!
  <HelloWorld :msg="msg" />
  <!-- ??? -->
  <router-link v-slot="{ href, navigate, isExactActive }" to="/home/user" custom>
    <div :class="{ active: isExactActive }" :href="href" @dblclick="navigate">跳转user</div>
  </router-link>
</template>
<script lang="ts" setup>
import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'
defineComponent({
  components: {
    HelloWorld,
  },
})
const msg = 'You did it!'
</script>
