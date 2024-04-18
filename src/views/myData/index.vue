<template>
  <div>
    <div class="flex justify-end w-full">
      <el-button type="primary" @click="onExport">导出excel</el-button>
      <import-excel class="ml-20px" btn-text="上传数据" @success="loadDataSuccess"></import-excel>
    </div>
    <div class="flex flex-wrap">

      <div class="w-100px h-100px flex flex-col justify-items-center items-center" v-for="item in state.fileList"
        :key="item.id" @click="showDetail">
        <img class="img-center w-45px h-45px" :src="excel" />
        <text class="my-10px text-#666">{{ item.name }}</text>
      </div>
    </div>
    <div class="text-red">unocss导入数据：{{ showValue }}</div>
  </div>
  <ImportDialog :params="showValue" ref="importRef" />
</template>

<script setup lang="ts">
import { jsonToSheetXlsx } from '@/components/ExportExcel';
import { excel } from '@/assets/images';
import ImportDialog from './components/ImportDialog.vue';
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
  ],
  fileList: [
    {
      id: 1,
      name: '文件1'
    },
    {
      id: 2,
      name: '文件2'
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
const importRef = ref();
const showDetail = () => {
  importRef.value.visible = true;
}
const showValue = ref();
const loadDataSuccess = (data: any) => {
  console.log('导入成功', data)
  showValue.value = data;
}
</script>

<style scoped></style>