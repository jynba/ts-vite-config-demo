<template>
  <div class="flex h-full">
    <div class="flex flex-col w-450px">
      <div class="h-full border-r-1px border-[#dde5ed] border-solid">
        <div class="flex h-55px items-center border-b-1px border-[#dde5ed] border-solid text-[#2c3e50] font-700">
          <img class="ml-20px w-20px h-20px" :src="excel" />
          <text class="m-10px text-xl font-700">data.xlsx</text>
        </div>
        <div class="h-50%">
          <div class="border-b-1px border-[#dde5ed] border-solid p-10px text-[#2c3e50] font-700">
            <div class="flex justify-between mx-10px">
              <span>结果选择：</span>
              <span class="text-[#999] cursor-pointer">查看全部</span>
            </div>
          </div>
          <div class="hover:bg-[#F5F7FA] bg-[#E8F1FF] text-[#1A78FF] p-10px">
            <span class="mx-10px cursor-pointer"> COX回归_data01 </span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-450px">
      <div class="h-full border-r-1px border-[#dde5ed] border-solid">
        <div class="border-b-1px border-[#dde5ed] border-solid h-55px text-[#2c3e50] font-700">
          <div class="flex p-10px justify-start mx-10px text-lg">
            <span> 算法模型：</span>
          </div>
        </div>
        <div class="border-b-1px border-[#dde5ed] border-solid p-10px text-[#2c3e50] font-700">
          <div class="flex justify-between mx-10px">
            <span>模型选择：</span>
            <span class="text-[#999] cursor-pointer">查看全部</span>
          </div>
        </div>
        <div class="hover:bg-[#F5F7FA] bg-[#E8F1FF] text-[#1A78FF] p-10px">
          <span class="ml-10px cursor-pointer"> COX回归预测 </span>
        </div>
      </div>
    </div>
    <div class="h-100vh">
      <div
        class="h-55px flex justify-between border-b-1px border-[#dde5ed] border-solid p-10px text-[#2c3e50] font-700"
      >
        <div>
          <span class="ml-20px text-xl"> COX回归 </span>
        </div>
        <div class="mr-20px">
          <el-button type="primary" class="ml-10px">导出为PDF</el-button>
          <el-button type="primary" class="ml-10px">导出为Word</el-button>
        </div>
      </div>
      <div class="flex flex-col gap-y-20px overflow-scroll h-full pb-40px w-full ml-30px">
        <div class="">
          <div class="flex items-center">
            <span class="w-4px h-26px bg-[#1A78FF] mr-20px"> </span>
            <h2 class="text-xl font-bold my-20px">分析流程</h2>
          </div>
          <div class="h-300px">
            <el-steps direction="vertical" :active="3">
              <el-step :icon="List">
                <template #title>
                  <div>
                    <span class="">数据源</span>
                  </div>
                </template>
                <template #description>
                  <div>
                    <span class="text-blue cursor-pointer">data.xlsx</span>
                  </div>
                </template>
              </el-step>
              <el-step :icon="DataAnalysis">
                <template #title>
                  <div>
                    <span class="">数据分析</span>
                  </div>
                </template>
                <template #description>
                  <span>算法配置</span>
                  <div>
                    <p>
                      <span> 算法： </span>
                      <span> 比例风险回归（COX回归） </span>
                    </p>
                    <p>
                      <span> 变量： </span>
                      <span>
                        变量Y：{ years }；状态变量：{ 事件数（1=肿瘤或非肿瘤因素死亡，0=存活 }；变量X：{
                        PR表达（%），ER表达（%），radiation，化疗周期（0=未化疗或未完整治疗，1=4周期，2=6周期，3=8周期），确诊时月经状态（1=未绝经，2=绝经），病理类型（1=浸润性癌，2=浸润性癌+导管内癌），手术方式（0=保乳，1=全切），chemistry，淋巴细胞计数（
                        10^9/L） }
                      </span>
                    </p>
                  </div>
                </template>
              </el-step>
              <el-step :icon="TrendCharts">
                <template #title>
                  <div>
                    <span class="">数据展示</span>
                  </div>
                </template>
                <template #description>
                  <span>结果展示 </span>
                </template>
              </el-step>
            </el-steps>
          </div>
        </div>
        <div class="">
          <div class="flex items-center">
            <span class="w-4px h-26px bg-[#1A78FF] mr-20px"> </span>
            <h2 class="text-xl font-bold my-20px">分析步骤</h2>
          </div>
          <div class="flex flex-col gap-y-10px text-base text-[#666] ml-30px">
            <p>1.进行模型系数的Ominbus检验，检查COX回归模型是否有效。</p>
            <p>2.汇总展示COX回归系数，观察模型是否有效，并重点关注HR（风险比）值，以揭示该变量对阳性事件发生的作用。</p>
            <p>
              3.展示总体生存函数图，以直观得到样本随着时间的推移的生存情况，并简单检验是否满足比例风险建设（既生存函数曲线未交叉则满足），如果设置了画图变量则额外展示以画图变量区分的生存函数图。
            </p>
          </div>
        </div>
        <div class="w-800px flex flex-col gap-y-10px">
          <div class="flex items-center">
            <span class="w-4px h-26px bg-[#1A78FF] mr-20px"> </span>
            <h2 class="text-xl font-bold my-20px">详细结论</h2>
          </div>
          <!-- <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
          </el-table> -->
          <div>
            <h2 class="ml-20px text-lg font-600">回归系数汇总情况</h2>
            <div class="w-full">
              <img :src="cox_table" alt="" />
            </div>
            <div class="ml-20px py-10px text-base">
              <p class="text-base font-600 my-5px">图表说明：</p>
              <p>上图展示了模型的回归系数的大小，标准差，Waid值，P值和HR值</p>
            </div>
          </div>

          <div>
            <h2 class="ml-20px text-lg font-600">生存曲线图</h2>
            <div>
              <img :src="cox" alt="" />
            </div>
            <div class="ml-20px py-10px text-base">
              <p class="text-base font-600 my-5px">图表说明：</p>
              <p>上图展示了样本总体随着时间的推移的生存情况。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { excel, cox, cox_table } from '@/assets/images'
import { List, TrendCharts, DataAnalysis } from '@element-plus/icons-vue'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<style scoped>
:deep(.el-step__title.is-finish) {
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: bold;
  color: #000;
}

:deep(.el-step__description.is-finish) {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: normal;
  color: #666;
}
</style>
