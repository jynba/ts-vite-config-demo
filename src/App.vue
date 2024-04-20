<script setup lang="ts">
import { RouterView } from 'vue-router'
import Layout from '@/components/Layout/index.vue'
</script>

<template>
  <layout></layout>
  <div class="bg-[#FFFFFF]">
    <RouterView />
  </div>
</template>

<style scoped></style>
