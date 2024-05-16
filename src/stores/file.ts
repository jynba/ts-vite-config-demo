import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
interface ExcelFile<T = any> {
  name: string
  title: string
  columns: T[]
  dataSource: T[]
}
export const useFileStore = defineStore('file', () => {
  const fileList = ref<ExcelFile[]>([
    {
      title: 'sheet',
      dataSource: [

      ],
      columns: [

      ],
      name: 'data.xlsx',
    },
  ])
  const getFileList = computed(() => fileList.value)

  return { fileList, getFileList }
})
