<template>
  <div class="title">肿瘤术后复发预测报告分析平台</div>
  <el-tabs class="tabs" v-model="activeName">
    <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name">
      <component v-if="tab.comp" :is="tab.comp" />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import myData from './myData/index.vue'
const activeName = ref('first')
const tabs = [
  { label: '首页', name: 'first' },
  { label: '数据集', name: 'second', comp: myData },
  { label: '数据处理', name: 'third' },
  { label: '数据分析', name: 'fourth' },
]
</script>
<style lang="scss" scoped>
.title {
  font-size: 24px;
  text-align: center;
  font-weight: bold;
}

.tabs {
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #409eff;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 0 10px #ccc;
}
</style>
