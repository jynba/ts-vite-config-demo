<template>
  <div class="title">肿瘤术后复发预测报告分析平台</div>
  <div class="flex justify-end w-full">
    <el-button type="primary" @click="onExport">导出excel</el-button>
    <import-excel class="ml-20px" @success="loadDataSuccess">导入</import-excel>
  </div>
  <div class="text-red">unocss导入数据：{{ showValue }}</div>
  <el-tabs class="tabs" v-model="activeName">
    <el-tab-pane v-for="tab in tabs" :key="tab.name" :label="tab.label" :name="tab.name">
      <!-- <component :is="tab.name" /> -->
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { jsonToSheetXlsx } from '@/components/ExportExcel';

const state = reactive({
  list: [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
  ]
})
const onExport = () => {
  let data = [] as any;
  data = state.list.map((row) => ({
    编号: row.id
  }));
  jsonToSheetXlsx({
    data,
    filename: '导出数据.xlsx'
  });
}
const showValue = ref();
const loadDataSuccess = (data: any) => {
  console.log('导入成功', data)
  showValue.value = data;
}

const activeName = ref('first')
const tabs = [
  { label: '首页', name: 'first' },
  { label: '数据集', name: 'second' },
  { label: '数据处理', name: 'third' },
  { label: '数据分析', name: 'fourth' },
]
</script>
<style scoped>
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
