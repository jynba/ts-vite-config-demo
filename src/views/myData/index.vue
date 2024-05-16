<template>
  <div>
    <div class="flex justify-end w-full">
      <import-excel class="m-20px" btn-text="上传数据" @success="loadDataSuccess"></import-excel>
    </div>
    <div class="flex flex-wrap ml-20px min-h-182px">
      <div class="flex flex-col justify-items-center items-center" v-for="item in state.fileList" :key="item.id">
        <div
          class="group/item hover:bg-[#f5f7fa] flex flex-col items-center mx-10px p-10px w-120px h-120px text-[#999]"
        >
          <div class="group/edit invisible group-hover/item:visible flex justify-end w-full">
            <el-popover placement="right-start" trigger="hover" :show-arrow="false">
              <template #reference>
                <el-icon class="hover:text-[#666] cursor-pointer">
                  <MoreFilled />
                </el-icon>
              </template>
              <!-- 查看详情、导出 -->
              <div class="flex flex-col">
                <div class="flex items-center p-5px cursor-pointer hover:bg-[#f5f7fa]" @click="goDetail(item.id)">
                  <el-icon>
                    <Document />
                  </el-icon>
                  <span class="ml-10px">查看详情</span>
                </div>
                <div class="flex items-center p-5px cursor-pointer hover:bg-[#f5f7fa]" @click="onExport(item.name)">
                  <el-icon>
                    <Download />
                  </el-icon>
                  <span class="ml-10px">导出</span>
                </div>
                <div class="flex items-center p-5px cursor-pointer hover:bg-[#f5f7fa]" @click="">
                  <el-icon>
                    <Delete />
                  </el-icon>
                  <span class="ml-10px">删除</span>
                </div>
              </div>
            </el-popover>
          </div>
          <div class="flex flex-col items-center p-10px">
            <img class="img-center w-45px h-45px" :src="excel" />
            <text class="my-10px text-#666">{{ item.name }}</text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { jsonToSheetXlsx } from '@/components/ExportExcel'
import { excel } from '@/assets/images'
import router from '@/router'
const state = reactive({
  list: [
    {
      id: '1',
    },
    {
      id: '2',
    },
    {
      id: '3',
    },
  ],
  fileList: [
    {
      id: '1',
      name: 'data.xlsx',
    },
    {
      id: '2',
      name: 'data_fix.xlsx',
    },
    {
      id: '3',
      name: 'data_01.xlsx',
    },
    {
      id: '4',
      name: 'data_02.xlsx',
    },
    {
      id: '5',
      name: 'data（副本）.xlsx',
    },
    {
      id: '6',
      name: '01_data.xlsx',
    },
  ],
})

const onExport = (name) => {
  let data = [] as any
  data = state.list.map((row) => ({
    编号: row.id,
  }))
  jsonToSheetXlsx({
    data,
    filename: name,
  })
}

const showValue = ref()
const loadDataSuccess = (data: any) => {
  console.log('导入成功', data)
  showValue.value = data
}

const goDetail = (id: string) => {
  router.push({
    path: '/dealData',
    query: {
      id: id,
    },
  })
}
</script>

<style scoped></style>
