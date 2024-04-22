<template>
  <div>
    <el-button type="primary" @click="upload">上传文件</el-button>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request'

onMounted(() => {})
const upload = () => {
  // request
  //   .post('/upload', {
  //     filename: 'test',
  //     token: 'test',
  //     user_id: 1,
  //     upload_time: new Date(),
  //   })
  //   .then((res) => {
  //     console.log(res)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
}
</script>

<style scoped></style>
