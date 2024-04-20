<template>
  <div class="">
    <div class="flex w-full justify-end p-10px">
      <el-upload v-if="!objectId" action accept=".xlsx,.xls" :show-file-list="false" :auto-upload="false"
        :on-change="handle">
        <template #trigger>
          <el-button type="primary">导入文件数据</el-button>
        </template>

      </el-upload>
    </div>

    <el-table :data="tableData" :max-height="maxHeight" :border="true">
      <el-table-column v-for="(item, index) in title" :key="index" :prop="'in' + index" :label="item" width="180" />
    </el-table>
  </div>
</template>

<script setup>
import * as XLSX from "xlsx";
const route = useRoute();
console.log("route", route);
const objectId = computed(() => route.query.id);

// 把文件按照二进制进行读取
function readFile(file) {
  return new Promise((resolve) => {
    let reader = new FileReader();
    reader.readAsBinaryString(file);
    reader.onload = (ev) => {
      resolve(ev.target.result);
    };
  });
}
const title = ref([]); //表头
const tableData = ref([]); //数据列表

// 选择文件的方法
const handle = async (ev) => {
  title.value = [];
  tableData.value = [];
  let file = ev.raw; //这里面就是数据
  let data = await readFile(file);

  let workbook = XLSX.read(data, { type: "binary" });

  let worksheet = workbook.Sheets[workbook.SheetNames[0]]; //这里是表格的名字,这里取第一个表格,1就是第二个表格数据

  data = XLSX.utils.sheet_to_json(worksheet);

  for (const key in data[0]) {
    title.value.push(key); //获取的是标题,即每个对象的键名
  }
  data.forEach((item, index) => {
    let obj = {};
    title.value.forEach((item2, index2) => {
      obj["in" + index2] = item[item2];
    });
    tableData.value.push(obj);
  });
  console.log("tableData.value", tableData.value);
};

const maxHeight = window.innerHeight - 100;
</script>

<style scoped lang="scss"></style>